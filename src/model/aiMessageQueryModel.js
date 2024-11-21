import mongoose, { model, SchemaTypes } from "mongoose";

const aiMessageQuerySchema = new mongoose.Schema({
  ai_used: {
    type: String,
  },
  ai_model_used: {
    type: String,
  },
  ai_message_input: {
    type: String,
  },
  ai_message_output: {
    type: String,
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const AiMessageQueryModel = model("AiMessageQueries", aiMessageQuerySchema);
