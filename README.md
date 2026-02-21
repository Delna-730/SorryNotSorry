![WhatsApp Image 2026-02-21 at 8 38 22 AM](https://github.com/user-attachments/assets/5c476f6d-cd79-4bf0-94e3-d1a8deb195d6)<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# SorryNotSorry 🎯

## Basic Details

### Team Name: Ciphera

### Team Members
- Member 1: Gifty Paul - Viswajyothi College of Engineering And Technology
- Member 2: Delna Jeeson - Viswajyothi College of Engineering And Technology

### Hosted Project Link
(https://drive.google.com/file/d/1L8TYDTnsKtsDexJqczprM-dF3kdNI5gV/view?usp=sharing)

### Project Description
SorryNotSorry is a lighthearted, AI-powered excuse generator designed to help users navigate awkward social or professional situations with ease. By leveraging Large Language Models (LLMs), the app crafts creative, believable, two-sentence excuses tailored to specific audiences—whether it’s a teacher, a boss, or a disappointed friend. The app even provides a "Believability Score" to let you know if your excuse is likely to fly or if you’re flying too close to the sun.

### The Problem statement
Let’s face it: life happens, but coming up with a convincing reason why you missed a deadline or skipped an event is stressful. People often struggle to strike the right balance between being "too vague" and "too detailed," leading to excuses that sound suspicious or unprofessional. Additionally, some AI models have a tendency to output "squashed" text without proper spacing when asked for short-form content, making the resulting message difficult to read or copy-paste.

### The Solution
SorryNotSorry solves this by using a refined AI prompt strategy and a custom "Super Space Fixer" algorithm to ensure every excuse is perfectly formatted and grammatically sound.

Tailored Generation: Users input their specific situation (e.g., "missing assignment") and their audience (e.g., "teacher") to get a context-aware response.

Witty & Concise: The system is hard-coded to deliver exactly two sentences, avoiding the "AI fluff" of typical chatbot responses.

Formatting Reliability: The backend includes custom regex logic to repair common tokenization errors, ensuring "I'mtrulyformissing" becomes "I'm truly sorry for missing" every single time.

---


### Technologies/Components Used

**For Software:**
- Languages used: html,css,javascript,node.js
- Frameworks used: express.js
- Libraries used: hugging face
- Tools used: VS Code (Editor), Hugging Face Inference API, npm (Package Manager)


---

## Features

List the key features of your project:
- Real-Time Biometric Emotion Tracking : The project uses high-speed facial landmark detection to analyze the user's honesty and "performance."

Expression Analysis: Detects emotions like sadness, fear, happiness, and anger in real-time.

Live Coaching Feedback: Provides a HUD-style (Heads-Up Display) overlay that gives instructions such as "Stop smiling" or "Look more regretful" to ensure the user’s face matches the lie they are telling.
- Emotion-Driven Tone Mapping :Unlike standard AI generators, this project uses your physical state to determine the linguistic style of the output.

Dynamic Prompting: The backend automatically adjusts the AI's "temperature" and "system instructions" based on the detected emotion.

Tone Profiles: Maps Sadness to "Heartbreaking/Desperate," Neutral to "Professional/Corporate," and Fear to "Urgent/Apologetic."
- Contextual Natural Language Generation:Leveraging the Llama-3.1-8B model, the project generates excuses that are specifically tailored to the user's specific scenario.

Audience Customization: Handles any typed input, from formal (Boss/Professor) to informal (Friends/Neighbors).

Two-Sentence Constraint: Uses strict "Few-Shot" prompting to ensure the AI remains concise and avoids common "AI-isms" like starting with "I hope this finds you well."
- Robust Text Sanitization : The system includes a custom cleaning pipeline to ensure the output is ready for immediate use.

Pipe Delimiter Logic: Forces the AI to generate text separated by pipes (|) to prevent formatting hallucinations, which are then cleaned by the backend into perfect prose.

Greeting Stripper: Automatically removes formal headers (Dear, Sincerely) to keep the generated text ready for instant messaging or email.

---

## Implementation

### For Software:

#### Installation
```bash
[npm install express dotenv cors @huggingface/inference]
```

#### Run
```bash
[node server.js]
```



---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![WhatsApp Image 2026-02-21 at 8 38 22 AM](https://github.com/user-attachments/assets/52715552-40c9-4274-aa32-c790998d0c69)



![WhatsApp Image 2026-02-21 at 8 38 23 AM (1)](https://github.com/user-attachments/assets/d5b95567-b556-4c66-878a-db3053f12e39)


![WhatsApp Image 2026-02-21 at 8 38 23 AM](https://github.com/user-attachments/assets/13d4394f-7558-4795-934c-a8cd8143a8ee)



#### Diagrams

**System Architecture:**

![5ed38046-3efe-465b-9c8a-3784c45beb0e](https://github.com/user-attachments/assets/1593f7d7-01e1-4bc6-bf29-1aa5ce54a377)

The architecture of SorryNotSorry follows a classic Client-Server model integrated with two distinct layers of Artificial Intelligence. It is designed to bridge the gap between physical human emotion and digital text generation.

1. The Frontend (Client Layer)
Built with HTML5, CSS3, and JavaScript, the frontend acts as the sensory organ of the project.

Vision Engine: It utilizes face-api.js (running on TensorFlow.js) to perform Edge Computing. This means your facial expressions are analyzed directly in your browser rather than being sent as a video stream to a server.

State Management: The client tracks your "Live Emotion" (e.g., sad or neutral) and holds it in a local variable, ready to be bundled with your text inputs.

2. The Backend (Server Layer)
The "Brain" of the operation is a Node.js environment using the Express framework.

API Gateway: It hosts a single POST endpoint (/generate) that receives the situation, audience, and detected emotion.

Contextual Logic: Before talking to the AI, the server runs a "Tone Selector." It maps the physical emotion to a linguistic style (e.g., a fearful face triggers a deeply apologetic tone).

3. The Inference Layer (AI Model)
This is the external intelligence provided by Hugging Face.

LLM (Llama-3.1-8B): The server sends a structured prompt to the Llama model.

Constraint Enforcement: The architecture uses "System Instructions" to force the AI to act as a witty assistant and follow strict formatting rules (like using pipes | as delimiters), which ensures the output is always consistent and predictable.

**Application Workflow:**

![7fdeff6c-c334-4f02-bd4a-93dfde43e094](https://github.com/user-attachments/assets/73843971-a10b-4974-976e-02e4bc546215)

The workflow of SorryNotSorry is a synchronized loop of data moving from your face to the server and back as a tailored excuse. It can be broken down into four distinct stages:

1. Biometric Calibration (Sense)
When the app launches, it initializes the webcam and loads the Tiny Face Detector models. The browser begins a continuous loop (every 300–500ms), scanning the video feed for facial landmarks. This allows the system to determine your current "emotional state" without sending any actual video data to the cloud.

2. Contextual Packaging (Input)
Once you type in your situation and audience, you trigger the "Generate" function. The app bundles three pieces of data into a single JSON object:

The What: Your situation (e.g., "Car broke down").

The Who: Your audience (e.g., "My Teacher").

The Mood: Your detected emotion (e.g., "Sad").

3. Neural Processing (Inference)
The Node.js backend receives this bundle and acts as a translator. It maps your Mood to a specific Tone (like "apologetic" or "assertive"). It then constructs a prompt for the Llama-3.1 model on Hugging Face. The model generates a response using pipes (|) as placeholders to ensure the AI doesn't add unwanted fluff like "Dear" or "Sincerely."

4. Text Sanitization & Delivery (Output)
The raw AI response (e.g., I|am|so|sorry|my|car|died.) returns to your server. The fixSpacing function scrubs the pipes, cleans up any weird formatting, and sends a polished, human-readable excuse back to your screen.

---


## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `'https://justadudewhohacks.github.io/face-api.js/weights'
`

##### Endpoints

**GET /api/endpoint**
- **Description:** A simple heartbeat check to ensure the Node.js server is running and the Hugging Face Inference connection is active.
- **Parameters:**
  - None
- **Response:**
```json
{
  "status": "success",
  "message": "Backend is online and neural sensors are calibrated",
  "timestamp": "2023-10-27T10:00:00Z"
}
```

**POST /api/endpoint**
- **Description:** Processes the user's situation and audience along with detected facial expressions to generate a contextually aware, two-sentence excuse using the Llama-3.1 model.
- **Request Body:**
```json
{
  "situation": "My internet went down during the final",
  "audience": "Prof. Smith",
  "emotion": "sad"
}
```
- **Response:**
```json
{
  "excuse": "I am incredibly sorry about the technical failure during the exam. My connection dropped unexpectedly and I am working to resolve it immediately."
}
```



---



#### App Flow Diagram

![34465017-20cc-4c14-af3a-66d8a7666503](https://github.com/user-attachments/assets/dbe438ba-1a18-4ca3-a31c-692280005546)

The app flow of SorryNotSorry follows a linear, circular path where the human face and the AI brain interact in a continuous feedback loop.

Phase 1: The Initialization (The Handshake)
When the user opens the URL, the browser performs a hardware and software "handshake."

Model Loading: The frontend fetches the pre-trained weights for face-api.js (Tiny Face Detector and Face Expression Net).

Permission Request: The browser asks the user for webcam access.

Video Stream: Once allowed, the webcam feed is piped into the <video> element, and the AI scan-line animation begins.

Phase 2: Live Analysis (The Feedback Loop)
Before the user even types, the app is already working.

Frame Capture: The code grabs a frame from the video feed every 300ms.

Emotion Extraction: The AI analyzes facial landmarks and assigns a probability to 7 core emotions.

Live Coaching: The UI updates the "AI Status" overlay, telling the user to "Look more sad" or "Stop smiling." This ensures the user's physical "performance" is ready for the excuse generation.

Phase 3: The Generation Request (The Data Payload)
When the user clicks "Generate Defense," the following data flow occurs:

Bundle: The frontend packages the situation, audience, and the current emotion into a JSON object.

Transmission: This payload is sent via a POST request to the Node.js backend.

Tone Selection: The backend reads the emotion and chooses a "Tone" (e.g., Sad face = "Heartbreaking" tone).

Phase 4: Inference & Sanitization (The Brain)
Prompt Engineering: The backend sends a strict prompt to the Llama-3.1 model.

Pipe Delimitation: The AI responds with words separated by pipes (|) to prevent it from wandering off-topic.

Scrubbing: The backend runs the fixSpacing function to remove pipes and formal fluff (like "Sincerely").

Phase 5: Final Delivery (The Output)
Response: The cleaned text is sent back to the frontend.

Display: The result box updates with the polished excuse.

Reset: The user can read the excuse, adjust their face, and try again, starting the loop over.



---



## Project Demo

### Video
[https://drive.google.com/file/d/1L8TYDTnsKtsDexJqczprM-dF3kdNI5gV/view?usp=sharing](https://drive.google.com/file/d/1L8TYDTnsKtsDexJqczprM-dF3kdNI5gV/view?usp=sharing)

This project, SorryNotSorry, is an interactive AI-powered "Excuse Coach." It combines real-time facial expression recognition with a Large Language Model (LLM) to help users craft the perfect excuse for any situation.

How it Works
The project is split into two main parts:

The Vision System (Frontend): Using a library called face-api.js, the app accesses your webcam to analyze your facial expressions. It detects whether you look happy, sad, angry, or neutral. It then gives you live feedback (e.g., "Stop smiling! This is a crisis!") to help you maintain a "believable" face for your excuse.

The Brain (Backend): A Node.js server connects to the Llama-3.1 model via Hugging Face. When you type in your situation (e.g., "I'm late") and your audience (e.g., "My Boss"), the backend combines that info with your current emotion.

Key Technical Features
Emotion-Aware Generation: The AI changes its tone based on your face. If you look sad, it writes a "heartbreaking" excuse; if you look neutral, it stays professional.

Real-time Processing: The frontend runs a continuous loop to track your face without lagging the UI.

Structured Output: The backend uses custom logic (like "pipes instead of spaces") to force the AI to follow strict formatting rules before cleaning the text for the user.

The Workflow
Input: You provide the Who and the What.

Analysis: The AI sees the How (your expression).

Output: You get a 2-sentence, tailor-made excuse ready to use.




## Team Contributions

- Delna Jeeson:  Frontend development, API integration
- Gifty Paul: Backend development, camera initialization

---


---

Made with ❤️ at TinkerHub
