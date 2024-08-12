'use server'

import { google } from '@ai-sdk/google';

import { generateObject, streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';
import { MonthSchemaAI, ProjectSchemaAI, RoadmapSchemaAI } from './schema';
import { trainingDataRoadmap } from './training-data/roadmap';
import { trainingDataMonth } from './training-data/month';
import { trainingDataProject } from './training-data/project';

const model = google('models/gemini-1.5-pro-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
});

export async function projectGenerator(object: any){
    const stream = createStreamableValue();

    const {partialObjectStream} = await streamObject({
        model,
        schemaName: 'Project',
        schemaDescription: 'A project generated from module and subpaths context',
        schema: ProjectSchemaAI,
        system: 'You are CarryAI Project generation model, Your task is to generate project for a specific module in the roadmap given by the context. Create project only for the topics covered in the subpaths of the module.',
        messages:[
            ...trainingDataProject,
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

