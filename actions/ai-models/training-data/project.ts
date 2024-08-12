import { CoreMessage } from "ai";

export const trainingDataProject:CoreMessage[] = [
    {
        content: "You are CarryAI Project generation model, Your task is to generate project for a specific module in the roadmap given by the context",
        role: 'system',
    },
    {
        content: "input: {\nmodule:{\nid:'6e5ec000-ee3e-4de3-b743-16d7ad3ed7f5',\nmonthId: 'e6680c4c-673d-452d-82cd-51b23db15eaf',\nmoduleNumber: 1,\ntitle: 'HTML, CSS, Javascript',\n},\nsubpaths:[\n{\nid: 'f76b6771-a898-401d-95e4-7876963897b7',\nlearningPathId:'9ba8950a-d337-464d-b269-a7f3ee542ead',\ntitle:'Introduction to HTML',\nlink:'https://www.w3schools.com/html/html_intro.asp',\ntype:'article',\nsequence: 1,\n}\n]\n}",
        role: 'user'
    },
    {
        content: "output: {\nmoduleId: '6e5ec000-ee3e-4de3-b743-16d7ad3ed7f5',\ntitle: 'Build a Personal Portfolio Website',\nproblemStatement: \"Create a fully responsive personal portfolio website using HTML, CSS, and JavaScript. The website should include multiple sections such as About Me, Projects, Skills, and Contact. Each section should be accessible through a navigation menu that remains visible as the user scrolls through the page. The Projects section should showcase your work with images, descriptions, and links to the live projects or their repositories. Implement smooth scrolling for the navigation and ensure that the website is fully responsive, adapting to various screen sizes, including mobile devices. Additionally, include a form in the Contact section that allows visitors to send you a message. Use CSS Grid and Flexbox for layout, and add interactive elements using JavaScript where necessary.\",\n  hints: [\n    \"Start by creating the basic HTML structure with semantic tags for each section.\",\n    \"Use CSS Grid and Flexbox to create a responsive layout that adapts to different screen sizes.\",\n    \"Implement smooth scrolling with CSS or JavaScript for better user experience.\",\n    \"Test the website on multiple devices to ensure responsiveness.\",\n    \"In the Contact form, use form validation to ensure all fields are filled out correctly.\"\n  ],\n checkParameterForAI: \"Ensure that the website is fully responsive, all sections are properly linked in the navigation, smooth scrolling is implemented, and the Contact form is functional with validation.\"\n}",
        role: 'assistant'
    },
    {
        content: "input: {\nmodule:{\nid:'6e5ec000-ee3e-4de3-b743-16d7ad3ed7f5',\nmonthId: 'e6680c4c-673d-452d-82cd-51b23db15eaf',\nmoduleNumber: 1,\ntitle: 'HTML, CSS, Javascript',\n},\nsubpaths:[\n{\nid: 'f76b6771-a898-401d-95e4-7876963897b7',\nlearningPathId:'9ba8950a-d337-464d-b269-a7f3ee542ead',\ntitle:'Introduction to HTML',\nlink:'https://www.w3schools.com/html/html_intro.asp',\ntype:'article',\nsequence: 1,\n}\n]\n}",
        role: 'user'
    },
    {
        content: "output: {\"moduleId\": \"6e5ec000-ee3e-4de3-b743-16d7ad3ed7f5\", \"title\": \"Build an Interactive Quiz Game\", \"problemStatement\": \"Develop an interactive quiz game using HTML, CSS, and JavaScript. The game should present users with a series of multiple-choice questions on a chosen topic. Upon selecting an answer, the user should receive immediate feedback indicating whether their choice is correct or incorrect. The game should keep track of the user's score and display it at the end of the quiz.  Enhance the user experience by incorporating features like a progress bar to visualize their advancement and a timer for each question.\", \"hints\": [\"Structure the quiz questions using HTML, ensuring proper labeling for questions and answer options.\", \"Style the quiz interface with CSS to create an engaging and visually appealing design.\", \"Utilize JavaScript to handle user interactions, evaluate answers, provide feedback, and manage the quiz flow.\", \"Implement a timer function that limits the time allowed for each question.\", \"Display a clear and concise summary of the user's performance at the end of the quiz, including their score and any relevant feedback.\"], \"checkParameterForAI\": \"Verify if the quiz functions correctly, including answer validation, scorekeeping, timer implementation, and a user-friendly interface.\"}",
        role: 'assistant'
    },
]