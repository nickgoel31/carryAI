'use server'

import { google } from '@ai-sdk/google';

import { generateObject, streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';
import { ModuleSchemaAI, MonthSchemaAI, RoadmapSchemaAI } from './schema';
import { trainingDataRoadmap } from './training-data/roadmap';
import { trainingDataMonth } from './training-data/month';
import { trainingDataModule } from './training-data/module';

const model = google('models/gemini-1.5-pro-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
});

export async function moduleGenerator(object: any){
    const stream = createStreamableValue();

    const {partialObjectStream} = await streamObject({
        model,
        schemaName: 'Module',
        schemaDescription: 'A module generated from month context',
        schema: ModuleSchemaAI,
        system: 'You are CarryAI MODULE GENERATOR MODEL, Your task is to generate modules for the month given',
        messages:[
            ...trainingDataModule,
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

