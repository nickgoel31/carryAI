import { z } from "zod"

export type UserValuesType = {
    name: string
    goals: string
    skills: string[]
    learningPreferences: {
        learningMode: string[]
        learningSchedule: string
        contentTypePreference: string[]
        certificationGoals: string[]
    }
    subscribeToNewsletter: boolean
    allowDataCollection: boolean
}

// Type for a quiz
type Quiz = {
    questions: number;
    topics: string[];
    requirement: string;
  };
  
  // Type for a project
  type Project = {
    title: string;
    problemStatement: string;
    hints?: string;
    completionCheck: string;
  };
  
  // Type for a learning path
  type LearningPath = {
    articles: string[];
    videos: string[];
  };
  
  // Type for a module
  type Module = {
    title: string;
    dueDate: string;
    completionStatus: number;
    learningPath: LearningPath;
    coursesAndTutorials: {
      free: string[];
      paid: string[];
    };
    bookmarked: string[];
    projects: Project[];
    certificationCourses: {
      free: string[];
      paid: string[];
    };
    quiz: Quiz;
  };
  
  // Type for a month
  type Month = {
    monthNumber: number;
    modules: Module[];
  };
  
  // Type for the overall roadmap
  type Roadmap = {
    goal: string;
    experienceLevel: string;
    timeline: string;
    months: Month[];
  };
  

export const settingsFormSchema = z.object({
  name: z.string(),  
  goal: z.string(),
  skills: z.array(z.string()),
  learningMode: z.array(z.string()),
  learningSchedule: z.string(),
  contentTypePreference: z.array(z.string()),
  certificationGoals: z.array(z.string()),
  subscribeToNewsletter: z.boolean(),
  allowDataCollection: z.boolean()
})