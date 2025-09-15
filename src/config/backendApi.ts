// Backend API Configuration for AI Chat
const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
  ENDPOINTS: {
    CHAT: '/api/ai/chat',
    STATUS: '/api/ai/status',
    HEALTH: '/api/ai/health'
  }
};

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  success: boolean;
  response?: string;
  provider?: string;
  timestamp?: string;
  error?: string;
  message?: string;
}

export interface ProviderStatus {
  success: boolean;
  provider: string;
  hasApiKey: boolean;
  status: string;
  timestamp: string;
}

// Chat with AI through backend
export const sendChatMessage = async (
  message: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponse> => {
  try {
    console.log('🔗 Sending chat request to backend...');
    
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHAT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationHistory
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    const data: ChatResponse = await response.json();
    console.log('✅ Chat response received from backend');
    
    return data;
  } catch (error) {
    console.error('❌ Backend API Error:', error);
    
    // Return fallback response
    return {
      success: false,
      error: 'Connection Error',
      message: getFallbackResponse(message)
    };
  }
};

// Get AI provider status
export const getProviderStatus = async (): Promise<ProviderStatus | null> => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.STATUS}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to get provider status:', error);
    return null;
  }
};

// Health check
export const checkBackendHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HEALTH}`);
    return response.ok;
  } catch (error) {
    console.error('Backend health check failed:', error);
    return false;
  }
};

// Fallback responses when backend is unavailable
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

export { API_CONFIG }; 