import mongoose, { model, SchemaTypes } from "mongoose";

const policyDataSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  raw_data: {
    type: String,
  },
  clean_data: {
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

export const PolicyDataModel = model("PolicyData", policyDataSchema);