import { AI_MODEL, CHAT_GPT } from '../constant/aiConstants';
import { addObjectToAiMessageQuery } from '../helper/aiMessageQueryHelper';

const axios = require('axios');

export async function aiCaller(prompt) {
    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-4",
            messages: prompt,
        },
        {
            headers: { Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}` },
        }
        );
        
    const result = response.data.choices[0].message.content;
    let newObject = {
        ai_used : CHAT_GPT,
        ai_model_used : AI_MODEL,
        ai_message_input: JSON.stringify(prompt),
        ai_message_output : result
    }
    await addObjectToAiMessageQuery(newObject)
    return result
}