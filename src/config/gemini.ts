import { GoogleGenerativeAI } from '@google/generative-ai';

// Google Gemini Configuration
export const GEMINI_CONFIG = {
  API_KEY: process.env.REACT_APP_GEMINI_API_KEY || '',
  MODEL: 'gemini-1.5-flash', // Updated free model
};

// Initialize Gemini client
let geminiClient: GoogleGenerativeAI | null = null;

export const getGeminiClient = (): GoogleGenerativeAI | null => {
  console.log('Checking Gemini API key:', GEMINI_CONFIG.API_KEY ? 'Key found (length: ' + GEMINI_CONFIG.API_KEY.length + ')' : 'No key found');
  console.log('Environment variable REACT_APP_GEMINI_API_KEY:', process.env.REACT_APP_GEMINI_API_KEY ? 'Set' : 'Not set');
  
  if (!GEMINI_CONFIG.API_KEY) {
    console.warn('Gemini API key not found. Please set REACT_APP_GEMINI_API_KEY in your environment variables.');
    return null;
  }

  if (!geminiClient) {
    geminiClient = new GoogleGenerativeAI(GEMINI_CONFIG.API_KEY);
  }

  return geminiClient;
};

// Chat completion function for Gemini
export const getGeminiResponse = async (
  systemPrompt: string,
  conversationHistory: string,
  userMessage: string
): Promise<string> => {
  const client = getGeminiClient();
  
  if (!client) {
    throw new Error('Gemini client not initialized. Please check your API key.');
  }

  try {
    const model = client.getGenerativeModel({ model: GEMINI_CONFIG.MODEL });

    // Combine system prompt, context, conversation history, and user message
    const fullPrompt = `${systemPrompt}

Previous conversation:
${conversationHistory}

User: ${userMessage}`;

    const response = await model.generateContent(fullPrompt);
    return response.response.text();
  } catch (error) {
    console.error('Error generating Gemini response:', error);
    throw new Error('Failed to generate Gemini response.');
  }
}; 