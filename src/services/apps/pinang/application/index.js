// Externals
import axios from 'axios';
//function error
import { handleErrorResponse } from 'helpers'
/**
 * @description Get all applications latest data
 */
export const getAllLatestAplications = async ( limit = 10, offset = 0, q, filters ) => {
  try {
    const { data, status, statusText } = await axios.get('/pinang/applications/latest', { headers: { Authorization: localStorage.getItem('accessToken') }, params: { limit, offset, q, ...filters }});
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};

export const requestToExpireApplications = async ( dataToExpire ) => {
  try {
    const { data, status, statusText } = await axios.put('/pinang/application/expire/request', { data: dataToExpire }, { headers: { Authorization: localStorage.getItem('accessToken')}});
    console.log('Returned data:', data);
    return { data, status, statusText }
    
  } catch (error) {
    return handleErrorResponse(error)
  }
};