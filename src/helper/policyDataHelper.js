import { PolicyDataModel } from "../model/policyDataModel";


export async function getPolicyBasedOnUrl(url){
    try {
        const filter = {
            url : url
        }
        return await PolicyDataModel.findOne(filter)
    } catch (e){
        throw new Error("Getting document")
    }
}

export async function addObjectToPolicyData(data){
    try {
        let newObject = new PolicyDataModel(data)
        return newObject.save()
    } catch (e){
        throw new Error("Adding Document")
    }
}