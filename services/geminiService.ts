import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ContentType, ToneType, GeneratedContent } from "../types";

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "A catchy and relevant headline for the content.",
    },
    body: {
      type: Type.STRING,
      description: "The main content body, formatted with markdown if necessary (e.g. bolding key terms). Keep it under 200 words for the demo.",
    },
    metaDescription: {
      type: Type.STRING,
      description: "A concise SEO meta description (max 160 characters).",
    },
    tags: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "3-5 relevant keywords or hashtags.",
    }
  },
  required: ["title", "body", "tags"],
};

export const generateContentSample = async (
  topic: string,
  type: ContentType,
  tone: ToneType
): Promise<GeneratedContent> => {
  const modelId = "gemini-2.5-flash"; // Using Flash for speed in a demo context

  const prompt = `
    You are a professional content writer at 'Inkwell & Co.'.
    Please write a sample piece of content for a potential client to demonstrate our writing capabilities.
    
    Topic: ${topic}
    Format: ${type}
    Tone: ${tone}
    
    Requirements:
    - High quality, engaging, and error-free.
    - If it's a blog post, provide an intro and one main point.
    - If it's social media, include emojis if the tone fits.
    - Output strictly valid JSON matching the schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7, // Balance creativity and coherence
      },
    });

    const text = response.text;
    if (!text) throw new Error("No content generated");

    return JSON.parse(text) as GeneratedContent;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate content sample. Please try again.");
  }
};
