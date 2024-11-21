import { GET_POLICY_PROMPT } from "../constant/aiPromptConstant"
import { SYSTEM, USER } from "../constant/aiConstants"
import { addObjectToPolicyData, getPolicyBasedOnUrl } from "../helper/policyDataHelper"
import { aiCaller } from "./aiHandler"
import { getUrlPageContent } from "./scrapperHandler"

export async function getPolicy(url){
    let model = {}
    model.url = url
    model.policy = await getPolicyBasedOnUrl(url)
    if(!model.policy){
        model.scrappedPolicy = await getUrlPageContent(url)
        model.ai_prompt =[{
              
                                    role: SYSTEM,
                                    content: GET_POLICY_PROMPT
                                  },
                                  {
                          
                                      role: USER,
                                      content: model.scrappedPolicy
                                    },
                        ]
        model.cleanedPolicy = await aiCaller(model.ai_prompt)
        model.policy = {
            url : model.url,
            raw_data : model.scrappedPolicy,
            clean_data : model.cleanedPolicy
        }
        await addObjectToPolicyData(model.policy)
    }
    return model.policy.clean_data
}