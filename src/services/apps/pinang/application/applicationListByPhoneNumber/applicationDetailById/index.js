// Mock data
import axios from 'axios';
// fungsi error request time out
import { handleErrorResponse } from 'helpers'

export const getAllApplicationDetails = async ( application_id ) => {
  try {
    const { data, status, statusText } = await axios.get(`/pinang/application/detail/${application_id}`, { headers: { Authorization: localStorage.getItem('accessToken') }}, { params: { application_id } },);
    
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};