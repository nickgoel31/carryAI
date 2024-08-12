'use server'

import { google } from '@ai-sdk/google';

import { generateObject, streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';
import { AnswerCheckerSchemaAI, IntExerciseSchemaAI, MonthSchemaAI, ProjectSchemaAI, QuizSchemaAI, RoadmapSchemaAI } from './schema';
import { trainingDataRoadmap } from './training-data/roadmap';
import { trainingDataMonth } from './training-data/month';
import { trainingDataProject } from './training-data/project';
import { trainingDataQuiz } from './training-data/quiz';
import { trainingDataIntExercise } from './training-data/int-exercise';
import { trainingDataAnswerChecker } from './training-data/answerchecker';

const model = google('models/gemini-1.5-pro-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
});

export async function AnswerCheckerAI(object: any){
    const stream = createStreamableValue();

    const {partialObjectStream} = await streamObject({
        model,
        schemaName: 'AnswerChecker',
        schemaDescription: 'You are an answer checker ai',
        schema: AnswerCheckerSchemaAI,
        system: 'You are CarryAI: Answer Checking Model, your task is to rate answers and determine whether the user wrote the correct answer or not.',
        messages:[
            ...trainingDataAnswerChecker,
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

