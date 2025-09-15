import OpenAI from 'openai';

// OpenAI Configuration
export const OPENAI_CONFIG = {
  API_KEY: process.env.REACT_APP_OPENAI_API_KEY || '',
  MODEL: 'gpt-3.5-turbo', // Using the free tier model
  MAX_TOKENS: 500,
  TEMPERATURE: 0.7,
};

// Initialize OpenAI client
let openaiClient: OpenAI | null = null;

export const getOpenAIClient = (): OpenAI | null => {
  if (!OPENAI_CONFIG.API_KEY) {
    console.warn('OpenAI API key not found. Please set REACT_APP_OPENAI_API_KEY in your environment variables.');
    return null;
  }

  if (!openaiClient) {
    openaiClient = new OpenAI({
      apiKey: OPENAI_CONFIG.API_KEY,
      dangerouslyAllowBrowser: true, // Note: In production, API calls should be made from backend
    });
  }

  return openaiClient;
};

// Chat completion function
export const getChatCompletion = async (
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
): Promise<string> => {
  const client = getOpenAIClient();
  
  if (!client) {
    throw new Error('OpenAI client not initialized. Please check your API key.');
  }

  try {
    const completion = await client.chat.completions.create({
      model: OPENAI_CONFIG.MODEL,
      messages,
      max_tokens: OPENAI_CONFIG.MAX_TOKENS,
      temperature: OPENAI_CONFIG.TEMPERATURE,
    });

    return completion.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to get response from OpenAI. Please try again.');
  }
}; 