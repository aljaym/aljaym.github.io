// AI Provider Configuration System
import { getChatCompletion } from './openai';
import { getGeminiResponse } from './gemini';
import { ALJAY_CONTEXT, SYSTEM_PROMPT } from '../data/context';

export type AIProvider = 'gemini' | 'openai' | 'fallback';

// AI Provider Configuration
export const AI_CONFIG = {
  // Main setting - change this to switch AI providers
  PROVIDER: (process.env.REACT_APP_AI_PROVIDER || 'gemini') as AIProvider,
  
  // API Keys for different providers
  GEMINI_API_KEY: process.env.REACT_APP_GEMINI_API_KEY || '',
  OPENAI_API_KEY: process.env.REACT_APP_OPENAI_API_KEY || '',
};

// Unified AI Response Interface
export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Main AI Response Function - automatically uses the configured provider
export const getAIResponse = async (
  conversationHistory: AIMessage[],
  userMessage: string
): Promise<string> => {
  
  console.log(`🤖 Using AI Provider: ${AI_CONFIG.PROVIDER.toUpperCase()}`);
  
  try {
    switch (AI_CONFIG.PROVIDER) {
      case 'gemini':
        return await getGeminiAIResponse(conversationHistory, userMessage);
      
      case 'openai':
        return await getOpenAIResponse(conversationHistory, userMessage);
      
      case 'fallback':
      default:
        return getFallbackResponse(userMessage);
    }
  } catch (error) {
    console.error(`❌ ${AI_CONFIG.PROVIDER.toUpperCase()} AI Error:`, error);
    console.log('🔄 Falling back to basic responses...');
    return getFallbackResponse(userMessage);
  }
};

// Gemini AI Implementation
const getGeminiAIResponse = async (
  conversationHistory: AIMessage[],
  userMessage: string
): Promise<string> => {
  
  if (!AI_CONFIG.GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured');
  }
  
  const conversationHistoryText = conversationHistory
    .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
    .join('\n');
  
  const fullSystemPrompt = `${SYSTEM_PROMPT}\n\nHere is comprehensive information about Aljay:\n${ALJAY_CONTEXT}`;
  
  return await getGeminiResponse(fullSystemPrompt, conversationHistoryText, userMessage);
};

// OpenAI Implementation
const getOpenAIResponse = async (
  conversationHistory: AIMessage[],
  userMessage: string
): Promise<string> => {
  
  if (!AI_CONFIG.OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }
  
  const messages = [
    {
      role: 'system' as const,
      content: `${SYSTEM_PROMPT}\n\nHere is comprehensive information about Aljay:\n${ALJAY_CONTEXT}`
    },
    ...conversationHistory,
    {
      role: 'user' as const,
      content: userMessage
    }
  ];
  
  return await getChatCompletion(messages);
};

// Fallback responses for when no AI is available
const getFallbackResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();
  
  if (input.includes('experience') || input.includes('work')) {
    return "Aljay has 10+ years of experience as a Full Stack Developer, working with companies like Kinetic Innovative Staffing Services and Cloudstaff. He specializes in PHP, Laravel, WordPress, React, and Angular.";
  }
  
  if (input.includes('skills') || input.includes('technology') || input.includes('tech')) {
    return "Aljay's key skills include PHP, Laravel, WordPress, React, Angular, JavaScript, TypeScript, MySQL, Docker, and more. He's experienced in both frontend and backend development.";
  }
  
  if (input.includes('contact') || input.includes('hire') || input.includes('email')) {
    return "You can contact Aljay at mallarialjay07@gmail.com or +639452063639. He's currently available for new opportunities!";
  }
  
  if (input.includes('projects') || input.includes('portfolio')) {
    return "Aljay has worked on enterprise web applications, e-commerce platforms, medical software systems, and data center management systems. Check out the Projects section for more details!";
  }
  
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return "Hello! Nice to meet you! I can help you learn about Aljay's background and experience. What would you like to know?";
  }
  
  return "I can help you learn about Aljay's experience, skills, and projects. Feel free to ask me anything about his background, or contact him directly at mallarialjay07@gmail.com!";
};

// Get current provider status
export const getProviderStatus = (): { provider: AIProvider; hasApiKey: boolean; status: string } => {
  const provider = AI_CONFIG.PROVIDER;
  let hasApiKey = false;
  let status = '';
  
  switch (provider) {
    case 'gemini':
      hasApiKey = !!AI_CONFIG.GEMINI_API_KEY;
      status = hasApiKey ? 'Google Gemini AI' : 'Gemini (No API Key)';
      break;
    case 'openai':
      hasApiKey = !!AI_CONFIG.OPENAI_API_KEY;
      status = hasApiKey ? 'OpenAI ChatGPT' : 'OpenAI (No API Key)';
      break;
    case 'fallback':
    default:
      hasApiKey = true; // Fallback doesn't need API key
      status = 'Basic Responses';
      break;
  }
  
  return { provider, hasApiKey, status };
}; 