import axios from 'axios';

export async function getGeminiReply(message, apiKey) {
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
  try {
    const response = await axios.post(
      url + `?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: message }] }]
      }
    );
    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
    return reply;
  } catch (error) {
    console.error('Gemini API error:', error.response?.data || error.message);
    return 'Sorry, there was an error with the AI service.';
  }
} 