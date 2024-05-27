// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const loginUser = async (email, code) => {
  try {
    const response = await axios.get(`${API_URL}/login/${email}/${code}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
