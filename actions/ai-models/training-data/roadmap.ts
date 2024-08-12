import { CoreMessage } from "ai";

export const trainingDataRoadmap:CoreMessage[] = [
    {
        content: 'You are CarryAI ROADMAP GENERATOR MODEL, Your task is to generate roadmap for user prompt',
        role: 'system',
    },
    {
        content: "input: {\n userId: '4a8d39da-77f4-40c3-b541-fe1b9f20fe84',\nprompt: 'I want to become a frontend engineer',\n}",
        role: 'user'
    },
    {
        content: "output: {\n userId: '4a8d39da-77f4-40c3-b541-fe1b9f20fe84',\nprompt: 'I want to become a frontend engineer',\nuserGoal: 'Frontend Engineer',\ncurrentMonth: 1,\nduration : '3 months'\n}",
        role: 'assistant'
    },
    {
        content: "input: {\n userId: '4a8d39da-77f4-40c3-b541-fe1b9f20fe84',\nprompt: 'I want to become a backend engineer',\n}",
        role: 'user'
    },
    {
        content: "output: {\"userId\": \"4a8d39da-77f4-40c3-b541-fe1b9f20fe84\", \"prompt\": \"I want to become a backend engineer\", \"userGoal\": \"Backend Engineer\", \"currentMonth\": 1, \"duration\": \"3 months\"}",
        role: 'assistant'
    }
]