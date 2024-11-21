import { AiMessageQueryModel } from "../model/aiMessageQueryModel";


export async function addObjectToAiMessageQuery(data){
    try {
        let newObject = new AiMessageQueryModel(data)
        return newObject.save()
    } catch (e){
        throw new Error("Adding Document")
    }
}