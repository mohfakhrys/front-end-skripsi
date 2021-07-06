// Externals
import axios from 'axios';

import { handleErrorResponse } from '../../../../helpers'

import {baseApiUrl2} from '../../../../common/config';
axios.defaults.baseURL = baseApiUrl2

/**
 * @description Get all registrations data
 */
export const getAllRegistrations = async (userName, password) => {
  try {
    const { data, status, statusText } = await axios.post('/tiket',{userName, password});
    console.log(data)
    console.log(status)
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};
