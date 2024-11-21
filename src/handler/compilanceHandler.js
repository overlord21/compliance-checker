import { SYSTEM, USER } from "../constant/aiConstants";
import { CHECK_COMPLIANCE_PROMPT, COMPLIANCE_SYSTEM_PROMPT } from "../constant/aiPromptConstant";
import { STRIPE_POLICY_URL } from "../constant/urlConstant";
import { aiCaller } from "./aiHelper";
import { getPolicy } from "./policyHandler";
import { getUrlPageContent } from "./scrapperHelper";

export async function checkCompliance(webPageUrl){
    let model = {}
    model.webPageUrl = webPageUrl
    model.policyPageUrl = STRIPE_POLICY_URL
    model.policy = await getPolicy(model.policyPageUrl)
    model.webPageData = await getUrlPageContent(model.webPageUrl)
    const prompt =[{

        role: SYSTEM,
        content: COMPLIANCE_SYSTEM_PROMPT
        },
        {
            role: USER,
            content: CHECK_COMPLIANCE_PROMPT(model.webPageData,model.policy)
        },
    ]
    model.complianceIssue = await aiCaller(prompt)
    console.log(model.complianceIssue)
    return model.complianceIssue
  }