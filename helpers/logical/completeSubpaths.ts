import { getInteractiveExercisesFromLearningPathId } from "../getInteractiveExercise";
import { getSubPathsFromLearningPath } from "../getLearningSubpath"

export async function completedSubpaths(learningPathId:string){
    const subpaths = await getSubPathsFromLearningPath(learningPathId)
    let completedSubpaths = [];

    if(subpaths.subPaths){
        for (const subpath of subpaths.subPaths) {
            if(subpath.isCompleted){
                completedSubpaths.push(subpath)
            }
        }
    }
    return completedSubpaths;
}

export async function completedExercises(learningPathId:string){
    const exercises = await getInteractiveExercisesFromLearningPathId(learningPathId)
    let completedExercises = [];

    if(exercises.exercise){
        for (const exercise of exercises.exercise) {
            if(exercise.isCompleted){
                completedExercises.push(exercise)
            }
        }
    }
    return completedExercises;
}