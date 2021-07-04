import axios from 'axios';
//function error
import { handleErrorResponse } from 'helpers'

/**
 * @description Get all Disbursement
 */

export const getAllDisbursement = async ( limit = 10, offset = 0, q, filters ) => {
  try {
    const { data, status, statusText } = await axios.get('/pinang/disbursement', { headers: { Authorization: localStorage.getItem('accessToken') }, params: { limit, offset, q, ...filters }});
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};
