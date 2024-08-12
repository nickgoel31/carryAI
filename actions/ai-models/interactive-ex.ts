'use server'

import { google } from '@ai-sdk/google';

import { generateObject, streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';
import { IntExerciseSchemaAI, MonthSchemaAI, ProjectSchemaAI, QuizSchemaAI, RoadmapSchemaAI } from './schema';
import { trainingDataRoadmap } from './training-data/roadmap';
import { trainingDataMonth } from './training-data/month';
import { trainingDataProject } from './training-data/project';
import { trainingDataQuiz } from './training-data/quiz';
import { trainingDataIntExercise } from './training-data/int-exercise';

const model = google('models/gemini-1.5-pro-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
});

export async function interactiveExGenerator(object: any){
    const stream = createStreamableValue();

    const {partialObjectStream} = await streamObject({
        model,
        schemaName: 'InteractiveExercise',
        schemaDescription: 'An interactive exercise generated from the context give',
        schema: IntExerciseSchemaAI,
        system: 'You are CarryAI Interactive Exercise generation model, Your task is to generate interactive exercise based on the previous subpaths from the context along with moduleTitle.',
        messages:[
            ...trainingDataIntExercise,
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

