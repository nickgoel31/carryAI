import { CoreMessage } from "ai";

export const trainingDataQuiz:CoreMessage[] = [
    {
        content: "You are CarryAI Quiz Question generation model, Your task is to generate quiz question for the topic and context given to you as input. The quiz should be hard and difficult. All the questions in the quiz should be relevant",
        role: 'system',
    },
    {
        content: "input: {\nquizContext: {\nid:'9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle: 'HTML, CSS, and JavaScript Fundamentals',\ndescription: 'This quiz will cover all the topics from HTML, CSS and JavaScript you have studied till now',\nnoOfQuestions: 15,\n}\npreviousQuestions:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\nquizId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle: 'Explain the box model in CSS.',\ndescription: 'Provide a brief explanation.',\nsequence: 1,\ntype: 'subjective',\ndifficultyLevel: 'Medium',\ncorrectAnswer: 'The box model in CSS describes how the width and height of elements are calculated, including padding, borders, and margins.',\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nquizContext: {\nid:'9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle: 'HTML, CSS, and JavaScript Fundamentals',\ndescription: 'This quiz will cover all the topics from HTML, CSS and JavaScript you have studied till now',\nnoOfQuestions: 15,\n}\npreviousQuestions:[{\nid:'fe59a6b3-cc5b-4b7f-8490-888c358a3b94',\nquizId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle: 'Explain the box model in CSS.',\ndescription: 'Provide a brief explanation.',\nsequence: 1,\ntype: 'subjective',\ncorrectAnswer: 'The box model in CSS describes how the width and height of elements are calculated, including padding, borders, and margins.',\n}\n],\n}",
        role: 'user'
    },
    {
        content: "output: {\nquizId: '9e8b006a-cb1f-4edb-808d-576cb68b4942',\ntitle: 'What does HTML stand for?',\ndescription: 'Choose the correct option.',\nsequence: 2,\ntype: 'objective',\ndifficultyLevel:'Easy',\noptions:[\n{optionNumber: 1, content: 'Hyper Text Markup Language'},\n{ \"optionNumber\": 2, \"content\": \"Hyperlink and Text Markup Language\" },\n          { \"optionNumber\": 3, \"content\": \"Hyper Text Modeling Language\" }\n],\ncorrectOption: 1,\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nquizContext: {\nid:'2b1f50ab-49a1-443e-8419-256b6379553e',\ntitle: 'C++ Fundamentals',\ndescription: 'This quiz will cover all the topics from C++ you have studied till now',\nnoOfQuestions: 15,\n}\npreviousQuestions:[],\n}",
        role: 'user'
    },
    {
        content: "output: {\"quizId\": \"2b1f50ab-49a1-443e-8419-256b6379553e\", \"title\": \"What is the difference between a class and a struct in C++?\", \"description\": \"Explain the key difference and its implications.\", \"sequence\": 1, \"type\": \"subjective\", \"difficultyLevel\": \"Medium\", \"correctAnswer\": \"The key difference between a class and a struct in C++ is the default member access specifier. In a class, members are private by default, while in a struct, they are public. This affects how member variables and functions can be accessed from outside the class or struct.\"}",
        role: 'assistant'
    },
    {
        content: "input: {\nquizContext: {\nid:'2b1f50ab-49a1-443e-8419-256b6379553e',\ntitle: 'C++ Fundamentals',\ndescription: 'This quiz will cover all the topics from C++ you have studied till now',\nnoOfQuestions: 15,\n}\npreviousQuestions:[{\"quizId\": \"2b1f50ab-49a1-443e-8419-256b6379553e\", \"title\": \"What is the difference between a class and a struct in C++?\", \"description\": \"Explain the key difference and its implications.\", \"sequence\": 1, \"type\": \"subjective\", \"difficultyLevel\": \"Medium\", \"correctAnswer\": \"The key difference between a class and a struct in C++ is the default member access specifier. In a class, members are private by default, while in a struct, they are public. This affects how member variables and functions can be accessed from outside the class or struct.\"}\n],\n}",
        role: 'user'
    },
    {
        content: "output: {\"quizId\": \"2b1f50ab-49a1-443e-8419-256b6379553e\", \"title\": \"Explain the concept of virtual functions and polymorphism in C++.\", \"description\": \"Provide a concise explanation and illustrate with an example.\", \"sequence\": 2, \"type\": \"subjective\", \"difficultyLevel\": \"Hard\", \"correctAnswer\": \"Virtual functions in C++ facilitate polymorphism, allowing objects of derived classes to be treated as objects of the base class through a common interface. When a virtual function is called through a pointer or reference to the base class, the actual function called is determined at runtime based on the object's dynamic type. For example:\\n\\n",
        role: 'assistant'
    },
]