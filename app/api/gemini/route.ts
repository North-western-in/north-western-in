import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Verify API key presence
const apiKey = process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

export async function POST(req: NextRequest) {
  try {
    if (!ai) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY environment variable is not configured on this server. Please set it in Settings > Secrets." },
        { status: 500 }
      );
    }

    const { messages, userProfile } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request payload. 'messages' array is required." },
        { status: 400 }
      );
    }

    // Format the messages for the GoogleGenAI SDK
    // The last message is the current user prompt. We can pass the history as contents or systemInstructions.
    const userPrompt = messages[messages.length - 1]?.content || "";
    
    // Construct rich context about NWI and the user profile
    const profileContext = userProfile 
      ? `User Context: Name is ${userProfile.name || 'Visitor'}, interest in ${userProfile.projectType || 'Unspecified project'}, budget scale is ${userProfile.budget || 'Unspecified budget'}.`
      : 'User is a luxury visitor browsing the website.';

    const systemInstruction = `You are "Aura", the Elite Virtual Design Director at NORTH WESTERN INNOVATORS (NWI) in Chandigarh, India. NWI is a top-tier premium architecture, high-end interior design, advanced MEP engineering, and custom product styling firm located in Chandigarh.

Your tone of voice is highly professional, sophisticated, warm, design-literate, and deeply reassuring. You speak with the authority and poetic elegance of an international design curator. Avoid dry, bullet-pointed, standard bot-like lines. Instead, use rich design vocabulary (e.g., "spatial harmony", "tactile honesty", "luminous balance", "circulation rhythm", "monolithic travertine").

NWI Details:
- Location: SCO 96-97, 2nd Floor, Sector 34A, Chandigarh, India.
- Services: Architecture, Luxury Interior Design, Residential, Office/Commercial, Institutional, MEP engineering, Custom Furniture Prototyping.
- Unique value: Full multidisciplinary integration. We handle both visual styling and invisible engineering (acoustics, air volume, smart water loops).

${profileContext}

Goal:
1. Provide highly detailed, bespoke, elegant architectural and interior suggestions based on the user's inquiry.
2. Ask sophisticated follow-up questions to understand their space's light, proportions, and function.
3. Gently encourage them to book a free physical or virtual elite consultation with Ar. Raman Kumar and Id. Meera Singhania using the booking link on the page.

Provide your answers in clean Markdown. Keep responses engaging and concise (under 250 words) to maintain an exclusive feel.`;

    // Map conversation history into contents format for generateContent
    // Since we are using standard content generation, we can pass systemInstruction in config
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, but I was unable to compile my design thoughts. Let us discuss your vision in a live call.";

    return NextResponse.json({ text: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: error?.message || "An error occurred during content generation." },
      { status: 500 }
    );
  }
}
