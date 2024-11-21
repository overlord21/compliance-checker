export const GET_POLICY_PROMPT = "Return me all the context of regulation without changing the content too much and remove garbage thing"

export const COMPLIANCE_SYSTEM_PROMPT = "You are a compliance officer your job is check weather the details are compliant or not"

export const CHECK_COMPLIANCE_PROMPT = (webpageText,policyText) => `Please analyze the following webpage content and compare it with the following compliance policy. Return any non-compliant issues found.\n\nWebpage Content: ${webpageText}\n\nCompliance Policy: ${policyText}`