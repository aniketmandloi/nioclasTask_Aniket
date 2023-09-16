// api.js
import axios from 'axios';

const baseURL = 'https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/';

export const fetchQuestionDetails = async (questionID) => {
  try {
    const response = await axios.get(`${baseURL}getquestiondetails?QuestionID=${questionID}`);
    return response.data[0]; // Assuming the API response is an array with a single question object
  } catch (error) {
    console.error('Error fetching question details:', error);
    throw error;
  }
};
