// Externals
import axios from 'axios';

import { handleErrorResponse } from 'helpers'

/**
 * @description Get all registrations data
 */
export const getAllRegistrations = async (limit = 10, offset = 0, q, filters) => {
  try {
    const { data, status, statusText } = await axios.get('/pinang/registration', { headers: { Authorization: localStorage.getItem('accessToken') }, params: { limit, offset, q, ...filters }});
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};
