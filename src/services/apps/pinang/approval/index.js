import axios from 'axios';

//fungsi error request time out
import { handleErrorResponse } from 'helpers'

/**
 * @description Get all approval data
 */
export const getAllApprovalExpiration = async (limit = 10, offset = 0, q, filters) => {
  try {
    const { data, status, statusText } = await axios.get('/pinang/application/expire', { headers: { Authorization: localStorage.getItem('accessToken') } ,  params: {limit, offset, q, ...filters }});
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};

export const requestToApproveExpiration = async ( dataToApprove ) => {
  try {
    const { data, status, statusText } = await axios.patch('/pinang/application/expire/approve', { data : dataToApprove }, { headers: { Authorization: localStorage.getItem('accessToken') } });
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};

export const requestToRejectExpiration = async ( dataToReject ) => {
  try {
    const { data, status, statusText } = await axios.patch('/pinang/application/expire/reject', { data : dataToReject }, { headers: { Authorization: localStorage.getItem('accessToken') } });
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};

export const requestToCancelExpiration = async ( dataToDelete ) => {
  try {
    const { data, status, statusText } = await axios.delete('/pinang/application/expire/cancel', { headers: { Authorization: localStorage.getItem('accessToken') }, data: {data : dataToDelete}});
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};