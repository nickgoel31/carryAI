import { CoreMessage } from "ai";

export const trainingDataIntExercise:CoreMessage[] = [
    {
        content: "You are CarryAI Interactive Exercise generation model, Your task is to generate interactive exercise based on the previous subpaths from the context along with moduleTitle.",
        role: 'system',
    },
    {
        content: "input: {\nmoduleTitle: 'HTML, CSS, JAVASCRIPT',\nlearningPathId:'9e8b006a-cb1f-4edb-808d-576cb68b4942',\npreviousSubpaths:[\n{\nlearningPathId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle:'HTML Basics',\nlink: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',\nsequence: 1,\ntype: 'video',\n},\n],\npreviousExercises:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\ntitle: 'Exercise 1',\ndescription: 'What is the primary purpose of the  element in an HTML document?',\nsequence: 1,\ntype: 'objective',\ndifficultyLevel: 'easy',\ncorrectOption: 2,\noptions:[\n{optionNumber: 1, content: 'To define the main content of the webpage', isCorrect: false, explanation: ''},\n{optionNumber: 2, content: 'To include metadata, such as the page title and links to stylesheets', isCorrect: true, explanation: ''},\n{optionNumber: 3 content: 'To display images and other media content', isCorrect: false, explanation: ''},\n]\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nmoduleTitle: 'HTML, CSS, JAVASCRIPT',\nlearningPathId:'9e8b006a-cb1f-4edb-808d-576cb68b4942',\npreviousSubpaths:[\n{\nlearningPathId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle:'HTML Basics',\nlink: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',\nsequence: 1,\ntype: 'video',\n},\n],\npreviousExercises:[\n{\ntitle: 'Exercise 1',\ndescription: 'What is the primary purpose of the  element in an HTML document?',\nsequence: 1,\ntype: 'objective',\ndifficultyLevel: 'easy',\ncorrectOption: 2,\noptions:[\n{optionNumber: 1, content: 'To define the main content of the webpage', isCorrect: false, explanation: ''},\n{optionNumber: 2, content: 'To include metadata, such as the page title and links to stylesheets', isCorrect: true, explanation: ''},\n{optionNumber: 3 content: 'To display images and other media content', isCorrect: false, explanation: ''},\n]\n}],\n}",
        role: 'user'
    },
    {
        content: "output: {\"title\": \"Exercise 2\", \"description\": \"In the context of web development, how does the evolution of HTML from its initial version to HTML5 impact the way modern web applications are developed? Discuss the significance of these changes in terms of semantic markup, multimedia integration, and the overall user experience.\", \"sequence\": 2, \"type\": \"subjective\", \"difficultyLevel\": \"hard\", \"correctAnswer\": 'The evolution of HTML from its initial versions to HTML5 has significantly transformed web development practices, enhancing the way modern web applications are designed and interacted with. Here’s how these changes have impacted the field, 1. Semantic Markup, 2. Multimedia Integration'}",
        role: 'assistant'
    },
    {
        content: "input: {\nmoduleTitle: 'Python',\nlearningPathId:'9ehb006a-cvbf-4bb-80vcd-576cbcvbvc42',\npreviousSubpaths:[\n{\nlearningPathId: '9ehb006a-cvbf-4bb-80vcd-576cbcvbvc42',\ntitle:'Introduction to Python',\nlink: 'https://www.youtube.com/watch?v=cxzN-pngfdaVg',\nsequence: 1,\ntype: 'video',\n},\n],\npreviousExercises:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\"title\": \"Exercise 1\", \"description\": \"What is the correct way to print \\\"Hello, World!\\\" in Python?\", \"sequence\": 1, \"type\": \"objective\", \"difficultyLevel\": \"easy\", \"correctOption\": 1, \"options\": [{\"optionNumber\": 1, \"content\": \"print(\\\"Hello, World!\\\")\", \"isCorrect\": true, \"explanation\": \"\"}, {\"optionNumber\": 2, \"content\": \"console.log(\\\"Hello, World!\\\")\", \"isCorrect\": false, \"explanation\": \"\"}, {\"optionNumber\": 3, \"content\": \"System.out.println(\\\"Hello, World!\\\")\", \"isCorrect\": false, \"explanation\": \"\"}]}",
        role: 'assistant'
    },
    {
        content: "input: {\nmoduleTitle: 'Python',\nlearningPathId:'9ehb006a-cvbf-4bb-80vcd-576cbcvbvc42',\npreviousSubpaths:[\n{\nlearningPathId: '9ehb006a-cvbf-4bb-80vcd-576cbcvbvc42',\ntitle:'Introduction to Python',\nlink: 'https://www.youtube.com/watch?v=cxzN-pngfdaVg',\nsequence: 1,\ntype: 'video',\n},\n],\npreviousExercises:[\n{\"title\": \"Exercise 1\", \"description\": \"What is the correct way to print \\\"Hello, World!\\\" in Python?\", \"sequence\": 1, \"type\": \"objective\", \"difficultyLevel\": \"easy\", \"correctOption\": 1, \"options\": [{\"optionNumber\": 1, \"content\": \"print(\\\"Hello, World!\\\")\", \"isCorrect\": true, \"explanation\": \"\"}, {\"optionNumber\": 2, \"content\": \"console.log(\\\"Hello, World!\\\")\", \"isCorrect\": false, \"explanation\": \"\"}, {\"optionNumber\": 3, \"content\": \"System.out.println(\\\"Hello, World!\\\")\", \"isCorrect\": false, \"explanation\": \"\"}]}\n],\n}",
        role: 'user'
    },
    {
        content: "output: {\"title\": \"Exercise 2\", \"description\": \"What is the difference between a list and a tuple in Python?\", \"sequence\": 2, \"type\": \"subjective\", \"difficultyLevel\": \"easy\", \"correctAnswer\": \"The main difference between a list and a tuple in Python is that lists are mutable, while tuples are immutable. This means that you can change the items in a list after it has been created, but you cannot change the items in a tuple after it has been created.\"}",
        role: 'assistant'
    },
]