'use server'

import { google } from '@ai-sdk/google';

import { generateObject, generateText, streamObject, streamText } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';
import { SubPathSchemaAI, ModuleSchemaAI, MonthSchemaAI, RoadmapSchemaAI, SubPathSchemaAIWithTools } from './schema';
import { trainingDataLearningSubpath, trainingDataLearningSubpathWithTools } from './training-data/learningSubpath';

const model = google('models/gemini-1.5-pro-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
});

const model2 = google('models/gemini-1.5-flash-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
});

export async function learningSubpathGenerator(object: any){
    const stream = createStreamableValue();

    const {partialObjectStream} = await streamObject({
        model,
        temperature: 0.6,
        schemaName: 'Subpath',
        schemaDescription: 'A learning subpath generated from context',
        schema: SubPathSchemaAI,
        system: 'You are CarryAI LEARNING SUBPATH GENERATOR MODEL. Your task is to generate Subpath from the context given.',
        messages:[
            ...trainingDataLearningSubpath,
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

export async function learningSubpathGeneratorWithTools(object:any){
    const stream = createStreamableValue();

    const {partialObjectStream} = await streamObject({
        model,
        temperature: 0.6,
        schemaName: 'Subpath',
        schemaDescription: 'A learning subpath generated from context',
        schema: SubPathSchemaAIWithTools,
        system: 'You are CarryAI LEARNING SUBPATH GENERATOR MODEL. Your task is to generate Subpath from the context given.',
        messages:[
            ...trainingDataLearningSubpathWithTools,
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



export async function linkGeneratorAI(object:any){

    const {text} = await generateText({
        model:model2,
        system: 'You are an AI Who generate link of an article from the web, uptodate, in context of what is provided. THE LINKS MUST BE WORKING AND UPDATED!',
        messages:[
            {
                content: `input: {title: 'HTML for beginners', type: 'article', sequence: 1, learningPathId: '1234'}`,
                role: 'user',
            },
            {
                content: 'output: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
                role: 'assistant',
            },
            {
                content: `input: {title: 'HTML Elements', type: 'article', sequence: 4, learningPathId: '1gdfsgdgdshhhre65t4'}`,
                role: 'user',
            },
            {
                content: 'output:  https://www.w3schools.com/html/html_elements.asp',
                role: 'assistant',
            },
           
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

    



    return { text };
}