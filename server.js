import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { HfInference } from '@huggingface/inference';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const hf = new HfInference(process.env.HF_TOKEN);

function fixSpacing(text) {
    if (!text) return '';
    return text
        .replace(/\|/g, ' ')                   // Pipes to spaces
        .replace(/([a-z])([A-Z])/g, '$1 $2')   // CamelCase fix
        .replace(/([,.;!])([A-Za-z])/g, '$1 $2') // Punctuation fix
        .replace(/\s+/g, ' ')                  // Clean double spaces
        .trim();
}

app.post('/generate', async (req, res) => {
    const { situation, audience } = req.body;
    try {
        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                {
                    role: "system",
                    content: "You are a witty assistant. Speak only using pipes instead of spaces. Example: I|am|sorry|for|this. Write exactly two sentences. Do not use Dear or Sincerely."
                },
                {
                    role: "user",
                    content: `Two-sentence excuse for my ${audience} regarding: ${situation}. Separate|every|word|with|a|pipe.`
                }
            ],
            max_tokens: 120,
            temperature: 0.4
        });

        let rawText = response?.choices?.[0]?.message?.content || '';
        rawText = rawText.replace(/(Dear|Sincerely|Hi|Thanks|Best|Regards)[^.!?]*/gi, '');
        const finalExcuse = fixSpacing(rawText);
        res.json({ excuse: finalExcuse });
    } catch (error) {
        res.status(500).json({ error: "API Error" });
    }
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));