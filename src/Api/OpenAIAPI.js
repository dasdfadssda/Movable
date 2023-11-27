import axios from 'axios';

async function askOpenAI(question) {
  try {
    const response = await axios.post('http://localhost:3001/ask', { question });
    return {
      answer: response.data.answer,
      chatCompletion: response.data.chatCompletion
    };
  } catch (error) {
    console.error(error);
    return {
      answer: null,
      chatCompletion: null
    };
  }
}

export default askOpenAI;
