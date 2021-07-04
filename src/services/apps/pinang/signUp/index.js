// Externals
import axios from 'axios';
//fungsi error request time out
import { handleErrorResponse } from 'helpers';

/**
 * @description post sign up
 */
export const SignUpData = async (username) => {
  try {
    const { data, status, statusText } = await axios.post('/auth/login', { username });
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};