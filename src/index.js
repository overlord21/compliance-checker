const express = require('express');
import { checkCompliance } from "./handler/compilanceHandler";
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT ? process.env.PORT : 3000;

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
  
app.post('/check-compliance', async (req, res) => {
    const { webpage_url } = req.body;
    if (!webpage_url) {
      return res.status(400).json({ error: 'webpage_url is required' });
    }
  try {
    let result = await checkCompliance(webpage_url)
    return res.status(200).json({ data: result });
  }catch(e){
    return res.status(500).json({ error: e.message });
  }   
  }
);
  
app.listen(port, () => {
    console.log(`Compliance check API running on http://localhost:${port}`);
  });
