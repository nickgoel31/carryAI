'use server'

import { google } from '@ai-sdk/google';

import { generateObject, streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';
import { RoadmapSchemaAI } from './schema';
import { trainingDataRoadmap } from './training-data/roadmap';

const model = google('models/gemini-1.5-pro-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
});

export async function roadmapGenerator(object: any){
    const stream = createStreamableValue();

    const {partialObjectStream} = await streamObject({
        model,
        schemaName: 'Roadmap',
        schemaDescription: 'A roadmap for a user\'s prompt',
        schema: RoadmapSchemaAI,
        system: 'You are CarryAI ROADMAP GENERATOR MODEL, Your task is to generate roadmap for user prompt',
        messages:[
            ...trainingDataRoadmap,
            {
                content: `input: ${JSON.stringify(object)}`,
                role: 'user',
            },
            {
                content: 'output: ',
                role: 'assistant',
            }
        ],
    });

    for await (const partialObject of partialObjectStream) {
        stream.update(partialObject);
    }
  
    stream.done();

    return { object: stream.value };
}

