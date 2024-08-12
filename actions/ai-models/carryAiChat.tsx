'use server';

import { generateText, streamText } from 'ai';
import {  createGoogleGenerativeAI } from '@ai-sdk/google';
import { createStreamableUI, createStreamableValue } from 'ai/rsc';
import { z } from 'zod';
import { fetchYoutubeSearchResults } from '../youtube/search';
import { ReactNode } from 'react';
import { YoutubeVideoDisplayer } from '@/components/ai/ytVideo';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  display?: ReactNode;
}

const google = createGoogleGenerativeAI({
    apiKey:process.env.GOOGLE_FLASH_API_KEY,
});

export async function continueConversation(history: Message[], currentPageInfo?: any) {

    
    const stream = createStreamableUI();

    const { text, toolResults } = await generateText({
        model: google('models/gemini-1.5-flash-latest'),
        system:
            `You are carryAI, a virtual assistant. You are created by the team of CarryAI. You help students or people with their roadmap and career related query. The query can be from the current page they are at so try to solve that as best as possible. DO NOT USE ANY MARKDOWN CHARACTERS. CURRENT PAGE INFORMATION: ${JSON.stringify(currentPageInfo)}`,
        messages: history,
        tools: {
            findVideoFromYoutube: {
                description: 'Find a suitable video for the user to watch',
                parameters: z.object({
                    value: z.string().describe(''),
                    moduleTitle: z.string().describe('Title of the module the user wants to watch video for')
                }),
                execute: async ({ value, moduleTitle }) => {
                    const findVideo = await fetchYoutubeSearchResults(moduleTitle);
                    // Note: The correct way to use stream.done is to provide a single ReactNode.
                    // Here, we render the Weather component directly.
                    const videoLink = `https://www.youtube.com/watch?v=${findVideo.items[0].id.videoId}`;
                    stream.done(<YoutubeVideoDisplayer link={videoLink}/>);
                    
                    return `Here is the video link for the module ${moduleTitle}`;
                }
            },
            findModules:{
                description: 'Find the modules for the user',
                parameters: z.object({
                    value: z.string().describe(''),
                }),
                execute: async ({ value }) => {
                    
                    return `Here are the modules for you`;
                }
            }
        }
    });

    return {
        messages: [
            ...history,
            {
                role: 'assistant' as const,
                content: text || toolResults.map(result => result.result).join('\n'),
                display: stream.value,
            },
        ],
    };
}
