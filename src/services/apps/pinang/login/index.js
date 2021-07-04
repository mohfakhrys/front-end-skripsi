// Externals
import axios from 'axios';
import { handleErrorResponse } from '../../../../helpers'

/**
 * @description post sign in
 */
export const SignInData = async ( userName, password ) => {
  try {
    const { data, status, statusText } = await axios.post('/users/login', { userName, password });
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};