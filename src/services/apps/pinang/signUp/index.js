// Externals
import axios from 'axios';
//fungsi error request time out
import { handleErrorResponse } from '../../../../helpers'
import {baseApiUrl} from '../../../../common/config';
axios.defaults.baseURL = baseApiUrl

/**
 * @description post sign up
 */
export const SignUpData = async (userName, fullName, rekening, email, password, userRoles) => {
  try {
    const { data, status, statusText } = await axios.post('/users/register', { userName, fullName, rekening, email, password, userRoles });
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};