import { AnswerCheckerAI } from "@/actions/ai-models/answerChecker";
import { interactiveExGenerator } from "@/actions/ai-models/interactive-ex";
import { learningSubpathGenerator, learningSubpathGeneratorWithTools, linkGeneratorAI } from "@/actions/ai-models/learningSubpath";
import { moduleGenerator } from "@/actions/ai-models/module";
import { monthGenerator } from "@/actions/ai-models/month";
import { projectGenerator } from "@/actions/ai-models/project";
import { quizGenerator } from "@/actions/ai-models/quiz";
import { AnswerCheckerSchemaAIType, IntExerciseSchemaAIType, ModuleSchemaAIType, MonthSchemaAIType, ProjectSchemaAIType, QuizSchemaAIType, SubPathSchemaAIType, SubPathSchemaAIWithToolsType } from "@/actions/ai-models/schema";
import { createInteractiveExerciseWithOptionsInDB, createInteractiveExerciseWithoutOptionsInDB } from "@/actions/exercise/create";
import { createModuleInDB } from "@/actions/module/create";
import { createMonthInDB } from "@/actions/month/create";
import { createProjectInDB } from "@/actions/project/create";

import { createSubpathInDB } from "@/actions/subpath/create";
import { fetchYoutubeSearchResults } from "@/actions/youtube/search";
import { InteractiveExercise, InteractiveExerciseOption, LearningPathSubpath, Module, Month, Project, Quiz, QuizOption, QuizQuestion, Roadmap } from "@prisma/client";
import { readStreamableValue } from "ai/rsc";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function generateMonthFunction(previousMonths: Month[], roadmap: Roadmap){
    try {
        let monthAI: MonthSchemaAIType | undefined;
        let monthDBInit: Month | undefined;
        const { object: monthObject } = await monthGenerator({ roadmap, previousMonths });

        for await (const partialMonth of readStreamableValue(monthObject)) {
            if (partialMonth) {
                monthAI = partialMonth;

                // MONTH RECORD
                if(monthAI){
                    const {monthDB} = await createMonthInDB(roadmap.id, monthAI);
                    if(monthDB){
                        monthDBInit = monthDB;
                    }
                }
            }
        }

        return { monthAI,month:monthDBInit, error: null }
    } catch (error) {
        console.log(error)
        return { month: null, error }
    }
}

export async function generateModuleFunction(month:Month, previousModules: Module[]){
    try {
        let moduleAI: ModuleSchemaAIType | undefined;
        let moduleDBInit: Module | undefined;
        const { object: moduleObject } = await moduleGenerator({ monthContext: month, previousModules: previousModules });

        for await (const partialMonth of readStreamableValue(moduleObject)) {
            if (partialMonth) {
                moduleAI = partialMonth;

                // MODULE RECORD
                if(moduleAI){
                    const {moduleDB} = await createModuleInDB(month.id, moduleAI);
                    if(moduleDB){
                        moduleDBInit = moduleDB;
                    }
                }
            }
        }

        return { moduleAI, module: moduleDBInit, error: null }
    } catch (error) {
        console.log(error)
        return { module: null, error }
    }
}

export async function generateSubpathFunction(month: Month, module: Module, previousSubPaths: LearningPathSubpath[], learningPathId:string ){
    try {
        let subpathAI: SubPathSchemaAIType | undefined;
        let subpathDBInit: LearningPathSubpath | undefined;
        const { object: subpathObject } = await learningSubpathGenerator({ monthContext: month, moduleContext: module, previousSubpaths: previousSubPaths, learningPathId  });

        for await (const partialMonth of readStreamableValue(subpathObject)) {
            if (partialMonth) {
                subpathAI = partialMonth;

                // SUBPATH RECORD
                if(subpathAI){
                    const {subPath} = await createSubpathInDB(learningPathId, subpathAI);

                    if(subPath){
                        subpathDBInit = subPath;
                    }
                }
            }
        }

        return { subpath:subpathDBInit, subpathAI, error:null}
        
    } catch (error) {
        console.log(error)
        return { subpath: null, error: 'Something went wrong' }
    }
}

export async function generateProjectFunction(subPaths: LearningPathSubpath[], moduleCustom: Module){
    try {
        let projectAI: ProjectSchemaAIType | undefined;
        let projectDBInit: Project | undefined;
        const { object: projectObject } = await projectGenerator({ module:moduleCustom,subpaths:subPaths });

        for await (const partialProject of readStreamableValue(projectObject)) {
            console.log(projectAI)
            if (partialProject) {
                projectAI = partialProject;

                // MONTH RECORD
                if(projectAI){
                    const {projectDB} = await createProjectInDB(moduleCustom.id, projectAI);
                    if(projectDB){
                        projectDBInit = projectDB;
                    }
                }
            }
        }
        

        return { projectAI,project:projectDBInit, error: null }
    } catch (error) {
        console.log(error)
        return { project: null, error }
    }
}

// export async function generateQuizFunction(quizContext: Quiz, previousQuestions: QuizQuestion[]){
//     try {
//         let quizAI: QuizSchemaAIType | undefined;
//         let quizDBInit: QuizQuestion | undefined;
//         let quizOptionDBInit: QuizOption | undefined;
//         let questionsGenerated = 0

//         for(let i = 0; i < quizContext.noOfQuestions; i++){
//             let prevQuestions = previousQuestions;
//             setTimeout(async () => {
//                 const { object: quizObject } = await quizGenerator({ quizContext, prevQuestions });

//                 for await (const partialQuiz of readStreamableValue(quizObject)) {
//                     console.log(quizAI)
//                     if (partialQuiz) {
//                         quizAI = partialQuiz;
        
//                         // MONTH RECORD
//                         if(quizAI){
//                             if(quizAI.type === 'objective'){
//                                 const {quizDB} = await createQuizQuestionWithOptionsInDB(quizContext.id, quizAI)
//                                 if(quizDB){
//                                     questionsGenerated++
//                                     prevQuestions.push(quizDB)
//                                 }
//                             } else if(quizAI.type === 'subjective'){
//                                 const {quizDB} = await createQuizQuestionWithoutOptionsInDB(quizContext.id, quizAI)
//                                 if(quizDB){
//                                     questionsGenerated++
//                                     prevQuestions.push(quizDB)
//                                 }
//                             }
//                         }
//                     }
//                 }
//             },3000)
//         }     

//         return { quizAI,quiz: quizDBInit, error: null }
//     } catch (error) {
//         console.log(error)
//         return { quiz: null, error }
//     }
// }


export async function generateSubpathWithToolsFunction(month: Month, module: Module, previousSubPaths: LearningPathSubpath[], learningPathId:string ){
    try {
        let subpathAI: SubPathSchemaAIWithToolsType | undefined;
        let subpathDBInit: LearningPathSubpath | undefined;
        const { object: subpathObject } = await learningSubpathGeneratorWithTools({ monthContext: month, moduleContext: module, previousSubpaths: previousSubPaths, learningPathId  });

        

        for await (const partialMonth of readStreamableValue(subpathObject)) {
            if (partialMonth) {
                subpathAI = partialMonth;

                // SUBPATH RECORD
                if(subpathAI){
                    if(subpathAI.type === 'video'){
                        
                        const ytResults = await fetchYoutubeSearchResults(subpathAI.title) 
                        console.log(ytResults)
                        const ytLink = `https://www.youtube.com/watch?v=${ytResults.items[0].id.videoId}`
                        const subPathAIWithLink:SubPathSchemaAIType = {
                            ...subpathAI,
                            link: ytLink
                        }
                        const {subPath} = await createSubpathInDB(learningPathId, subPathAIWithLink);

                        if(subPath){
                            subpathDBInit = subPath;
                        }      
                    }
                    else if(subpathAI.type === 'article'){
                        const {text} = await linkGeneratorAI(subpathAI)
                        const subPathAIWithLink:SubPathSchemaAIType = {
                            ...subpathAI,
                            link: text
                        }
                        const {subPath} = await createSubpathInDB(learningPathId, subPathAIWithLink);

                        if(subPath){
                            subpathDBInit = subPath;
                        }
                    }
                    
                }
            }
        }

        return { subpath:subpathDBInit, subpathAI, error:null}
        
    } catch (error) {
        console.log(error)
        return { subpath: null, error: 'Something went wrong' }
    }
}

export async function generateInteractiveExerciseFunction(moduleTitle: string, learningPathId: string, previousSubpaths: LearningPathSubpath[], previousExercises: InteractiveExercise[]){
    try {
        let exerciseAI: IntExerciseSchemaAIType | undefined;
        let exerciseDBInit: InteractiveExercise | undefined;
        let exerciseOptionDBInit: InteractiveExerciseOption | undefined;

        const { object: exerciseObject } = await interactiveExGenerator({ moduleTitle, learningPathId, previousSubpaths, previousExercises });

            for await (const partialExercise of readStreamableValue(exerciseObject)) {
                if (partialExercise) {
                    exerciseAI = partialExercise;
    
                    // MONTH RECORD
                    if(exerciseAI){
                        if(exerciseAI.type === 'objective'){
                            const {exerciseDB} = await createInteractiveExerciseWithOptionsInDB(learningPathId, exerciseAI)
                            if(!exerciseDB) return { exercise: null, error: 'Failed to create exercise' };
                            exerciseDBInit = exerciseDB;
                            
                        } else if(exerciseAI.type === 'subjective'){
                            const {exerciseDB} = await createInteractiveExerciseWithoutOptionsInDB(learningPathId, exerciseAI)
                            if(!exerciseDB) return { exercise: null, error: 'Failed to create exercise' };
                            exerciseDBInit = exerciseDB;
                        }
                    }
                }
            } 

        return { exerciseAI,exercise: exerciseDBInit, error: '' }
    } catch (error) {
        console.log(error)
        return { exercise: null, error: 'Something went wrong' }
    }
}

export async function answerCheckerAIFunction(answer:string, correctAnswer:string){
    try {
        let answerCheckerAI: AnswerCheckerSchemaAIType | undefined;

        const { object: answerObject } = await AnswerCheckerAI({ input:answer, correctAnswer });

            for await (const partialAnswer of readStreamableValue(answerObject)) {
                if (partialAnswer) {
                    answerCheckerAI = partialAnswer;
                }
            } 

        return { answerAI: answerCheckerAI, error: '' }
    } catch (error) {
        console.log(error)
        return { answerAI: null, error: 'Something went wrong' }
    }
}
