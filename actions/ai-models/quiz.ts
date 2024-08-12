'use server'

import { google } from '@ai-sdk/google';

import { generateObject, streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';
import { MonthSchemaAI, ProjectSchemaAI, QuizSchemaAI, RoadmapSchemaAI } from './schema';
import { trainingDataRoadmap } from './training-data/roadmap';
import { trainingDataMonth } from './training-data/month';
import { trainingDataProject } from './training-data/project';
import { trainingDataQuiz } from './training-data/quiz';

const model = google('models/gemini-1.5-pro-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
});

export async function quizGenerator(object: any){
    const stream = createStreamableValue();

    const {partialObjectStream} = await streamObject({
        model,
        schemaName: 'Quiz',
        schemaDescription: 'A quiz generated from topic and context',
        schema: QuizSchemaAI,
        system: 'You are CarryAI Quiz Question generation model, Your task is to generate quiz question for the topic and context given to you as input. The quiz should be hard and difficult. All the questions in the quiz should be relevant',
        messages:[
            ...trainingDataQuiz,
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

