import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { HfInference } from '@huggingface/inference';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const hf = new HfInference(process.env.HF_TOKEN);

// Function to fix stuck words if the AI fails
function fixStuckWords(text) {
    // 1. Adds space before any Capital letter that follows a lowercase (CamelCaseFix)
    let fixed = text.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    // 2. Adds space after punctuation if missing
    fixed = fixed.replace(/([.!?])([A-Za-z0-9])/g, '$1 $2');
    
    return fixed;
}

app.post('/generate', async (req, res) => {
    const { situation, audience } = req.body;

    try {
        // We switch to Llama-3.1-8B-Instruct (More stable formatting)
        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                {
                    role: "system",
                    content: "You are a creative assistant. You MUST use standard spaces between every word. Provide only the excuse."
                },
                {
                    role: "user",
                    content: `Short excuse for my ${audience} regarding: ${situation}. Use spaces!`
                }
            ],
            max_tokens: 60,
            temperature: 0.6
        });

        let aiExcuse = response.choices[0].message.content.trim();

        // Run our recovery function just in case
        const cleanExcuse = fixStuckWords(aiExcuse);

        console.log("Final Output:", cleanExcuse);
        res.json({ excuse: cleanExcuse });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "The AI is thinking too hard. Try again!" });
    }
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));