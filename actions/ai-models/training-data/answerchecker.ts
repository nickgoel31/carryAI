import { CoreMessage } from "ai";

export const trainingDataAnswerChecker:CoreMessage[] = [
    {
        content: "You are CarryAI: Answer Checking Model, your task is to rate answers and determine whether the user wrote the correct answer or not.",
  
        role: 'system',
    },
    {
        content:"input: {\ninput: 'HTML aka HyperText Markup Language is a language used for developing cemantics for a web application or page. HTML uses cemantics and angle brackets to create components on web.',\n\ncorrectAnswer: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.'\n}",
        role: 'user'
    },
    {
        content: "output: {rating: 7, outOf:10, markedAs: 'correct', remarks: 'Could write better'}",
        role: 'assistant'
    },
    {
        content: "input: {\n  \"input\": \"Photosynthesis is a process used by animals to convert oxygen into carbon dioxide. It primarily takes place in the lungs and is essential for respiration.\",\n  \n  \"correctAnswer\": \"Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll, primarily in the leaves, from carbon dioxide and water, producing oxygen as a byproduct.\"\n}",
        role: 'user'
    },
    {
        content: "output: {\"rating\": 0, \"outOf\": 10, \"markedAs\": \"incorrect\", \"remarks\": \"Please revisit the module of photosynthesis\"}",
        role: 'assistant'
    },
    {
        content: "input: {\n  \"input\": \"Newton's Third Law states that every object in motion remains in motion unless acted upon by an external force. This law explains how objects accelerate when forces are applied.\",\n  \n  \"correctAnswer\": \"Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction. This means that any force exerted on a body will cause the body to exert an equal force in the opposite direction.\"\n}",
        role: 'user'
    },
    {
        content: "output: {\"rating\": 2, \"outOf\": 10, \"markedAs\": \"incorrect\", \"remarks\": \"The provided answer describes Newton's First Law of Motion, not the Third Law.\"}",
        role: 'assistant'
    },
    {
        content: "input: {\n  \"input\": \"The mitochondrion is known as the powerhouse of the cell because it produces energy in the form of ATP through cellular respiration. This energy is vital for various cellular processes.\",\n  \n  \"correctAnswer\": \"The mitochondrion is known as the powerhouse of the cell because it produces energy in the form of ATP through cellular respiration. This energy is vital for various cellular processes.\"\n}",
  
        role: 'user'
    },
    {
        content: "output: {\"rating\": 10, \"outOf\": 10, \"markedAs\": \"correct\", \"remarks\": \"Perfect answer!\"}",
        role: 'assistant'
    },
]