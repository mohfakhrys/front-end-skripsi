// Externals
import axios from 'axios';
import { handleErrorResponse } from '../../../../helpers'

/**
 * @description post sign in
 */
export const SignInData = async ( username, password ) => {
  try {
    const { data, status, statusText } = await axios.post('/auth/login', { username, password });
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};