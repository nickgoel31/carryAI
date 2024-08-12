
import z from 'zod'

export const RoadmapSchemaAI = z.object({
    userId: z.string(),
    prompt: z.string(),
    userGoal: z.string(),
    currentMonth: z.number(),
    duration: z.string(),
})

export type RoadmapSchemaAIType = z.infer<typeof RoadmapSchemaAI>

export const MonthSchemaAI = z.object({
    roadmapId: z.string(),
    month: z.number(),
    title: z.string(),
    isCurrentMonth: z.boolean(),
    isMonthCompleted: z.boolean(),
})

export type MonthSchemaAIType = z.infer<typeof MonthSchemaAI>

export const ModuleSchemaAI = z.object({
    monthId: z.string(),
    moduleNumber: z.number(),
    title: z.string(),
})

export type ModuleSchemaAIType = z.infer<typeof ModuleSchemaAI>

export const SubPathSchemaAI = z.object({
    learningPathId: z.string(),
    title: z.string(),
    link: z.string(),
    sequence: z.number(),
    type: z.string()
})

export const SubPathSchemaAIWithTools = z.object({
    learningPathId: z.string(),
    title: z.string(),
    sequence: z.number(),
    type: z.string()
})



export type SubPathSchemaAIType = z.infer<typeof SubPathSchemaAI>
export type SubPathSchemaAIWithToolsType = z.infer<typeof SubPathSchemaAIWithTools>

export const QuizSchemaAI = z.object({
    quizId: z.string(),
    title: z.string(),
    description: z.string(),
    type: z.string(),
    sequence: z.number(),
    options: z.array(z.object({
        optionNumber: z.number(),
        content: z.string(),
    })).optional(),
    difficultyLevel: z.enum(['easy', 'medium', 'hard']),
    correctOption: z.number().optional(),
    correctAnswer: z.string().optional(),
})

export type QuizSchemaAIType = z.infer<typeof QuizSchemaAI>

export const ProjectSchemaAI = z.object({
    moduleId: z.string(),
    title: z.string(),
    problemStatement: z.string(),
    hints: z.array(z.string()).optional(),
    checkParameterForAI: z.string(),
})

export type ProjectSchemaAIType = z.infer<typeof ProjectSchemaAI>

export const IntExerciseSchemaAI = z.object({
    title: z.string(),
    description: z.string(),
    sequence: z.number(),
    type: z.string(),
    difficultyLevel: z.string(),
    correctOption: z.number().optional(),
    correctAnswer: z.string().optional(),
    options: z.array(z.object({
        optionNumber: z.number(),
        content: z.string(),
        isCorrect: z.boolean(),
        explanation: z.string().optional(),
    })).optional(),
})

export type IntExerciseSchemaAIType = z.infer<typeof IntExerciseSchemaAI>

export const AnswerCheckerSchemaAI = z.object({
    rating: z.number(),
    outOf: z.number(),
    markedAs: z.string(),
    remarks: z.string(),
})

export type AnswerCheckerSchemaAIType = z.infer<typeof AnswerCheckerSchemaAI>