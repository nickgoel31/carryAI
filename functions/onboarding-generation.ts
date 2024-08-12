import { roadmapGenerator } from '@/actions/ai-models/roadmap';
import { readStreamableValue } from 'ai/rsc';
import { monthGenerator } from '@/actions/ai-models/month';
import { moduleGenerator } from '@/actions/ai-models/module';
import { learningSubpathGenerator } from '@/actions/ai-models/learningSubpath';
import { User } from '@prisma/client';
import { RoadmapSchemaAIType } from '@/actions/ai-models/schema';
import { createRoadmapInDB } from '@/actions/roadmap/create';
import { createMonthInDB } from '@/actions/month/create';
import { createModuleInDB } from '@/actions/module/create';
import { createLearningPathInDB } from '@/actions/learningpath/create';
import { createSubpathInDB } from '@/actions/subpath/create';
import { generateModuleFunction, generateMonthFunction, generateSubpathFunction, generateSubpathWithToolsFunction } from './generate-ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function onboardingGeneration(user: User) {
    let roadmap: RoadmapSchemaAIType | null = null;
    let month: any = null; // Replace `any` with the actual type if known
    let moduleCustom: any = null; // Replace `any` with the actual type if known
    let subpath: any = null; // Replace `any` with the actual type if known

    let success = false;

    try {
        // 1. Generate Roadmap
        const { object: roadmapObject } = await roadmapGenerator({ userId: user.id, prompt: user.goal });

        for await (const partialRoadmap of readStreamableValue(roadmapObject)) {
            if (partialRoadmap) {
                roadmap = partialRoadmap as RoadmapSchemaAIType;
                // ROADMAP RECORD
                const { roadmap: roadmapDB, error: roadmapError } = await createRoadmapInDB(user.id, roadmap);

                if (roadmapError) {
                    console.error(`Failed to create roadmap in DB: ${roadmapError}`);
                    break; // Stop processing if roadmap creation fails
                }

                if (roadmapDB) {                 
                    setTimeout(async () => {
                        const {month} = await generateMonthFunction([], roadmapDB);
                        
                        if(month){
                            setTimeout(async () => {
                                const {module} = await generateModuleFunction(month, [])
                                if(module){
                                    const {learningPath} = await createLearningPathInDB(module.id)
    
                                    if(learningPath){
                                        setTimeout(async () => {
                                            const {subpath} = await generateSubpathWithToolsFunction(month, module, [], learningPath.id)
                                            
                                            if(subpath){
                                                success = true;
                                            }
                                        },5000)
                                    }
                                }
                            },5000)
                            
                        }
                    },4000)
                    
                }
            }
        }
    
        return success;

    } catch (error) {
        console.error('Error during onboarding generation:', error);
        // Handle error appropriately (e.g., send a response or notify the user)
        return false;
    }
}
