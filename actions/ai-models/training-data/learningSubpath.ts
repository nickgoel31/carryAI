import { CoreMessage } from "ai";

export const trainingDataLearningSubpath:CoreMessage[] = [
    {
        content: "You are CarryAI LEARNING PATH GENERATOR MODEL, Your task is to generate month from the context given.\nIn the learningPathSubpaths you generate you provide valid links to the articles and videos. They should be relevant and upto date with current technology. Videos should be strictly from youtube and articles can be from anywhere, giving more preference to w3schools, mdn docs.",
        role: 'system',
    },
    {
        content: "input: {\nmonthContext:{\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 1,\ntitle: 'Foundations of Web Development',\nisCurrentMonth: true,\nisMonthCompleted: false,\n},\nmoduleContext: {\nid:'d0f24ecf-90a9-4cfe-af08-547123bca082',\nmonthId: 'a2f91c06-b7be-45bf-8e0f-53438ceea5c4',\nmoduleNumber: 1,\ntitle: 'HTML, CSS, JAVASCRIPT',\n},\nlearningPathId:'9e8b006a-cb1f-4edb-808d-576cb68b4942\n',\npreviousSubPaths:[{\nlearningPathId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle:'Introduction to HTML',\nlink: 'https://www.w3schools.com/html/html_intro.asp',\nsequence: 1,\ntype: 'article',\n}\n],\n}",
        role: 'user'
    },
    {
        content: "output: {\nlearningPathId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle:'HTML Basics',\nlink: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',\nsequence: 2,\ntype: 'video',\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nmonthContext:{\nroadmapId:  'eabgfdge6fb-30fg0d-4gb-85d2-683068fds06c1f',\nmonth: 1,\ntitle: 'Foundations of Programming',\nisCurrentMonth: true,\nisMonthCompleted: false,\n},\nmoduleContext: {\nid:'d0f2ffdecf-90a9-ggfdcfe-afgfd-543bca082',\nmonthId: 'a2f9gfc06-b7bgf-4hgbf-8f-53438hga5c4',\nmoduleNumber: 1,\ntitle: 'C Programming Language',\n},\nlearningPathId:'9e8bgdfg0-cjj1f-4ekb-8jh8d-576cbfgdg4942\n',\npreviousSubPaths:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\"learningPathId\": \"9e8bgdfg0-cjj1f-4ekb-8jh8d-576cbfgdg4942\", \"title\": \"C Programming Tutorial for Beginners\", \"link\": \"https://www.youtube.com/watch?v=KJgsSFOSQv0\", \"sequence\": 1, \"type\": \"video\"}",
        role: 'assistant'
    },
    {
        content: "input: {\nmonthContext:{\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 1,\ntitle: 'Foundations of Web Development',\nisCurrentMonth: true,\nisMonthCompleted: false,\n},\nmoduleContext: {\nid:'d0f24ecf-90a9-4cfe-af08-547123bca082',\nmonthId: 'a2f91c06-b7be-45bf-8e0f-53438ceea5c4',\nmoduleNumber: 1,\ntitle: 'HTML, CSS, JAVASCRIPT',\n},\nlearningPathId:'9e8b006a-cb1f-4edb-808d-576cb68b4942',\npreviousSubPaths:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\"learningPathId\": \"9e8b006a-cb1f-4edb-808d-576cb68b4942\", \"title\": \"Introduction to HTML\", \"link\": \"https://www.w3schools.com/html/html_intro.asp\", \"sequence\": 1, \"type\": \"article\"}",
        role: 'assistant'
    },
]

export const trainingDataLearningSubpathWithTools:CoreMessage[] = [
    {
        content: "You are CarryAI LEARNING PATH GENERATOR MODEL, Your task is to generate month from the context given.\nIn the learningPathSubpaths you generate you provide valid links to the articles and videos. They should be relevant and upto date with current technology. Videos should be strictly from youtube and articles can be from anywhere, giving more preference to w3schools, mdn docs.",
        role: 'system',
    },
    {
        content: "input: {\nmonthContext:{\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 1,\ntitle: 'Foundations of Web Development',\nisCurrentMonth: true,\nisMonthCompleted: false,\n},\nmoduleContext: {\nid:'d0f24ecf-90a9-4cfe-af08-547123bca082',\nmonthId: 'a2f91c06-b7be-45bf-8e0f-53438ceea5c4',\nmoduleNumber: 1,\ntitle: 'HTML, CSS, JAVASCRIPT',\n},\nlearningPathId:'9e8b006a-cb1f-4edb-808d-576cb68b4942\n',\npreviousSubPaths:[{\nlearningPathId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle:'Introduction to HTML',\nlink: 'https://www.w3schools.com/html/html_intro.asp',\nsequence: 1,\ntype: 'article',\n}\n],\n}",
        role: 'user'
    },
    {
        content: "output: {\nlearningPathId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle:'HTML Basics',\nsequence: 2,\ntype: 'video',\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nmonthContext:{\nroadmapId:  'eabgfdge6fb-30fg0d-4gb-85d2-683068fds06c1f',\nmonth: 1,\ntitle: 'Foundations of Programming',\nisCurrentMonth: true,\nisMonthCompleted: false,\n},\nmoduleContext: {\nid:'d0f2ffdecf-90a9-ggfdcfe-afgfd-543bca082',\nmonthId: 'a2f9gfc06-b7bgf-4hgbf-8f-53438hga5c4',\nmoduleNumber: 1,\ntitle: 'C Programming Language',\n},\nlearningPathId:'9e8bgdfg0-cjj1f-4ekb-8jh8d-576cbfgdg4942\n',\npreviousSubPaths:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\"learningPathId\": \"9e8bgdfg0-cjj1f-4ekb-8jh8d-576cbfgdg4942\", \"title\": \"C Programming Tutorial for Beginners\",\"sequence\": 1, \"type\": \"video\"}",
        role: 'assistant'
    },
    {
        content: "input: {\nmonthContext:{\nroadmapId:  'eab8e6fb-300d-46db-85d2-683068206c1f',\nmonth: 1,\ntitle: 'Foundations of Web Development',\nisCurrentMonth: true,\nisMonthCompleted: false,\n},\nmoduleContext: {\nid:'d0f24ecf-90a9-4cfe-af08-547123bca082',\nmonthId: 'a2f91c06-b7be-45bf-8e0f-53438ceea5c4',\nmoduleNumber: 1,\ntitle: 'HTML, CSS, JAVASCRIPT',\n},\nlearningPathId:'9e8b006a-cb1f-4edb-808d-576cb68b4942',\npreviousSubPaths:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\"learningPathId\": \"9e8b006a-cb1f-4edb-808d-576cb68b4942\", \"title\": \"Introduction to HTML\", \"sequence\": 1, \"type\": \"article\"}",
        role: 'assistant'
    },
]