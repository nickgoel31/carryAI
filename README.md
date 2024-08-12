## Testing For Judges

Firstly, we need to clone this repository using 

```bash
git clone https://github.com/nickgoel31/carryAI.git
```

Once it is cloned on our computer we need to run the following commands in order

```bash
npm i

npx prisma generate
```

After following these steps we need to create a **.env** file in the root directory of the app and paste in the following API keys

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cGxlYXNpbmctYnV6emFyZC00MS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_czsZXDqf9MKNJ8flxryERGqO0Lv0gjFlFDOw084vaF

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

DATABASE_URL="mongodb+srv://harshgoel2004:673oYy6S9a9hsztG@cluster0.pupp6lp.mongodb.net/prisma"

GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyB3uBDJB8dgz8YtINtJO6Yzhx7vE5GA1uk

GOOGLE_FLASH_API_KEY=AIzaSyAq-geQad7qCN9-CfSieEzLQvTyVV0-t3U

YOUTUBE_DATA_API_KEY=AIzaSyCxxwpt7QkPNou7FaKMSAuR7JDUGnakOxg

GOOGLE_CUSTOM_SEARCH_API_KEY=AIzaSyCxxwpt7QkPNou7FaKMSAuR7JDUGnakOxg
```

Once all the setup is complete you can run the project on your localhost by typing this command in your terminal:

```bash
npm run dev
```

Now you can run the app on your local environment!

### ALL THE API KEYS ASSOCIATED TO THIS APP WILL BE DISABLED AFTER THIS COMPETITION'S RESULT FOR PREVENTING MISSUSE OF THEM.


# Learn More

Introduction
CarryAI is an innovative, AI-powered learning platform designed to revolutionize how individuals approach skill development and career growth. The app provides users with a personalized learning experience that is dynamically tailored to their unique goals, skills, and preferences. By leveraging advanced AI algorithms, CarryAI constructs comprehensive roadmaps that guide users through structured modules, engaging projects, interactive exercises, and curated learning paths, ensuring that every user can achieve their career aspirations in the most efficient and effective way possible.

The Problem
In the rapidly evolving job market, staying relevant requires continuous learning and skill development. Traditional learning platforms often follow a one-size-fits-all approach, which fails to address the individual needs of learners with different goals, backgrounds, and learning styles. This can lead to frustration, wasted time, and suboptimal outcomes. Moreover, the vast amount of available online resources can be overwhelming, making it difficult for learners to identify the most relevant and valuable content for their specific needs.

The Solution
CarryAI solves these challenges by providing a personalized, adaptive learning experience. The platform takes into account each user's current skill level, career goals, preferred learning style, and availability to create a tailored roadmap. This roadmap is not static; it evolves based on the user's progress, ensuring that the learning experience remains relevant and challenging.

Key Features
1. Personalized Roadmaps
At the heart of CarryAI is the personalized roadmap. When users sign up, they are asked to provide information about their current skills, career goals, preferred learning modes, and availability. Based on this input, the AI generates a customized roadmap that outlines the learning journey, broken down into months, modules, and specific tasks.

Dynamic Adjustment: As users progress through their roadmap, the AI continually adjusts the learning path based on their performance, providing additional resources, exercises, or challenges where needed.
Goal-Oriented: The roadmap is designed to keep users focused on their career goals, ensuring that every learning activity is directly aligned with achieving those objectives.
2. Modular Learning Structure
CarryAI organizes the learning journey into structured modules, each focusing on a specific set of skills or knowledge areas. This modular approach allows users to build expertise progressively while maintaining a clear sense of progress.

Monthly Breakdown: The roadmap is divided into months, each containing a set of modules. This structure helps users manage their time effectively and provides a clear timeline for achieving their goals.
Module Content: Each module includes a mix of learning resources, such as articles, videos, and tutorials, along with interactive exercises, projects, and quizzes. This variety ensures that users engage with the material in multiple ways, reinforcing their understanding and retention.
3. Curated Learning Subpaths
Within each module, CarryAI provides curated learning subpaths that guide users through a sequence of resources and activities. These subpaths are carefully selected by the AI to ensure that users are exposed to the most relevant and high-quality content available.

Sequential Learning: The subpaths follow a logical sequence, allowing users to build on their knowledge step by step. Each subpath includes a mix of content types (articles, videos, courses) and tracks the user's progress through completion indicators.
Interactive Content: To keep users engaged, the subpaths include interactive exercises that challenge users to apply what they've learned in practical scenarios. These exercises are designed to simulate real-world challenges, helping users build confidence in their abilities.
4. Interactive Exercises and Quizzes
CarryAI includes interactive exercises and quizzes within each module to reinforce learning and assess understanding. These activities are designed to be both educational and engaging, helping users retain information and apply it in practical contexts.

Exercise Variety: The exercises cover a range of formats, from coding challenges and problem-solving tasks to scenario-based simulations. This variety ensures that users develop a well-rounded skill set.
Quizzes: Each module concludes with a quiz that tests the user's knowledge and understanding of the material covered. Quizzes include both subjective and objective questions, providing a comprehensive assessment of the user's progress.
5. Real-World Projects
Projects are a critical component of the CarryAI experience, allowing users to apply what they've learned in a tangible way. Each module includes one or more projects that challenge users to create something real, such as a website, app, or report, based on the skills they've developed.

Detailed Problem Statements: Each project comes with a detailed problem statement that outlines the requirements and goals. This ensures that users understand what is expected and can approach the project with confidence.
Guided Hints: To assist users in completing their projects, CarryAI provides a series of hints that guide them through the process. These hints are designed to be helpful without giving away the solution, encouraging users to think critically and problem-solve independently.
Project Evaluation: Once a project is completed, users can submit it for evaluation. The AI checks the project against predefined parameters to ensure it meets the required standards. Users receive feedback on their work, including areas for improvement and suggestions for further learning.
User Experience
1. Onboarding
The onboarding process is designed to be seamless and intuitive. When users first sign up, they are guided through a series of questions that help the AI understand their goals, skills, and preferences. This information is used to generate the initial roadmap, which is presented to the user as soon as they complete the onboarding process.

2. Dashboard
The dashboard is the user's central hub within CarryAI. It provides an overview of their progress, including current modules, upcoming tasks, and overall roadmap status. Users can access their learning subpaths, projects, and quizzes directly from the dashboard, making it easy to stay on track.

Progress Tracking: The dashboard includes visual indicators of progress, such as percentage completion for modules and subpaths. This helps users stay motivated and see how far they've come.
Customizable: Users can customize their dashboard to highlight the information that matters most to them, such as upcoming deadlines, project status, or recent achievements.
3. Continuous Feedback
CarryAI provides continuous feedback to users throughout their learning journey. This feedback is designed to be constructive and actionable, helping users understand their strengths and areas for improvement.

Real-Time Feedback: As users complete exercises, quizzes, and projects, they receive real-time feedback from the AI. This feedback includes detailed explanations of correct answers, suggestions for further study, and tips for improvement.
Progress Reports: Users can access progress reports at any time, which provide a detailed overview of their performance across modules and projects. These reports are useful for identifying areas where additional focus may be needed.
Conclusion
CarryAI is more than just a learning platform; it is a personalized guide that adapts to the needs of each user, providing a tailored learning experience that evolves over time. By combining AI-driven roadmaps, modular learning, interactive exercises, real-world projects, and continuous feedback, CarryAI empowers users to achieve their career goals in a structured, efficient, and engaging way. Whether you're looking to learn a new skill, switch careers, or advance in your current role, CarryAI is designed to help you succeed.