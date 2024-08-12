import { CoreMessage } from "ai";

export const trainingDataMonth:CoreMessage[] = [
    {
        content: 'You are CarryAI MONTH GENERATOR MODEL, Your task is to generate month from the roadmap and previousMonthsContext given.',
        role: 'system',
    },
    {
        content: "input: {\nroadmap: {\nid: 'eab8e6fb-300d-46db-85d2-683068206c1f',\n userId: '4a8d39da-77f4-40c3-b541-fe1b9f20fe84',\nprompt: 'I want to become a frontend engineer',\nuserGoal: 'Frontend Engineer',\ncurrentMonth: 1,\nduration : '3 months'\n},\npreviousMonths: [],\n}",
        role: 'user'
    },
    {
        content: "output: {\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 1,\ntitle: 'Foundations of Web Development',\nisCurrentMonth: true,\nisMonthCompleted: false,\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nroadmap: {\nid: 'eab8e6fb-300d-46db-85d2-683068206c1f',\n userId: '4a8d39da-77f4-40c3-b541-fe1b9f20fe84',\nprompt: 'I want to become a frontend engineer',\nuserGoal: 'Frontend Engineer',\ncurrentMonth: 1,\nduration : '3 months'\n},\npreviousMonths: [\n{\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 1,\ntitle: 'Foundations of Web Development',\nisCurrentMonth: true,\nisMonthCompleted: false,\n}],\n}",
        role: 'user'
    },
    {
        content: "output: {\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 2,\ntitle: 'Intermediate React Development',\nisCurrentMonth: false,\nisMonthCompleted: false,\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nroadmap: {\nid: 'eab8e6fb-300d-46db-85d2-683068206c1f',\n userId: '4a8d39da-77f4-40c3-b541-fe1b9f20fe84',\nprompt: 'I want to become a frontend engineer',\nuserGoal: 'Frontend Engineer',\ncurrentMonth: 1,\nduration : '3 months'\n},\npreviousMonths: [\n{\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 1,\ntitle: 'Foundations of Web Development',\nisCurrentMonth: true,\nisMonthCompleted: false,\n},{\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 2,\ntitle: 'Intermediate React Development',\nisCurrentMonth: false,\nisMonthCompleted: false,\n}\n],\n}",
        role: 'user'
    },
    {
        content: "output: {\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 3,\ntitle: 'Advanced React and State Management',\nisCurrentMonth: false,\nisMonthCompleted: false,\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nroadmap: {\"userId\": \"4a8d39da-77f4-40c3-b541-fe1b9f20fe84\", \"prompt\": \"I want to become a full stack engineer\", \"userGoal\": \"Full Stack Engineer\", \"currentMonth\": 1, \"duration\": \"6 months\"},\npreviousMonths:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\"roadmapId\": \"eab8e6fb-300d-46db-85d2-683068206c1f\", \"month\": 1, \"title\": \"Fundamentals of Web Development (HTML, CSS, JavaScript)\", \"isCurrentMonth\": true, \"isMonthCompleted\": false}",
        role: 'assistant'
    },
    {
        content: "input: {\nroadmap: {\"userId\": \"4a8d39da-77f4-40c3-b541-fe1b9f20fe84\", \"prompt\": \"I want to become a full stack engineer\", \"userGoal\": \"Full Stack Engineer\", \"currentMonth\": 1, \"duration\": \"6 months\"},\npreviousMonths:[{\"roadmapId\": \"eab8e6fb-300d-46db-85d2-683068206c1f\", \"month\": 1, \"title\": \"Fundamentals of Web Development (HTML, CSS, JavaScript)\", \"isCurrentMonth\": true, \"isMonthCompleted\": false}\n],\n}",
        role: 'user'
    },
    {
        content:  "output: {\"roadmapId\": \"eab8e6fb-300d-46db-85d2-683068206c1f\", \"month\": 2, \"title\": \"Frontend Development with React\", \"isCurrentMonth\": false, \"isMonthCompleted\": false}",
        role: 'assistant'
    },
    {
        content: "input: {\nroadmap: {\"userId\": \"4a8d39da-77f4-40c3-b541-fe1b9f20fe84\", \"prompt\": \"I want to become a full stack engineer\", \"userGoal\": \"Full Stack Engineer\", \"currentMonth\": 1, \"duration\": \"6 months\"},\npreviousMonths:[{\"roadmapId\": \"eab8e6fb-300d-46db-85d2-683068206c1f\", \"month\": 1, \"title\": \"Fundamentals of Web Development (HTML, CSS, JavaScript)\", \"isCurrentMonth\": true, \"isMonthCompleted\": false},\n{\"roadmapId\": \"eab8e6fb-300d-46db-85d2-683068206c1f\", \"month\": 2, \"title\": \"Frontend Development with React\", \"isCurrentMonth\": false, \"isMonthCompleted\": false}\n],\n}",
        role: 'user'
    },
    {
        content:  "output: {\"roadmapId\": \"eab8e6fb-300d-46db-85d2-683068206c1f\", \"month\": 3, \"title\": \"Backend Development with Node.js and Express\", \"isCurrentMonth\": false, \"isMonthCompleted\": false}",
        role: 'assistant'
    },
]