// Externals
import axios from 'axios';
//fungsi error request time out
import { handleErrorResponse } from 'helpers';

/**
 * @description Get all applications latest data
 */

export const getAllAplicationLists = async (limit = 10, offset = 0, q, filters) => {
  try {
    const { data, status, statusText } = await axios.get('/pinang/applications', { headers: { Authorization: localStorage.getItem('accessToken') }, params: {limit, offset, q, ...filters }});
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};