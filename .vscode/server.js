import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.OPENAI_API_KEY;

app.post("/generate", async (req, res) => {

    const { situation, audience } = req.body;

    const prompt = `Generate a believable excuse for being late.
Situation: ${situation}
Audience: ${audience}
Keep it short and realistic.`;

    try {

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "user", content: prompt }
                ]
            })
        });

        const data = await response.json();

        const excuse = data.choices[0].message.content;

        res.json({ excuse });

    } catch (error) {
        res.status(500).json({ error: "API error" });
    }

});

app.listen(3000, () => console.log("Server running on port 3000"));