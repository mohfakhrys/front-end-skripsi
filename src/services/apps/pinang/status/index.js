// Externals
import axios from 'axios';
//fungsi error request time out
import { handleErrorResponse } from '../../../../helpers'
// import {baseApiUrl2} from '../../../../common/config';
// axios.defaults.baseURL = baseApiUrl2

/**
 * @description post sign up
 */
export const AssignData = async (id, status) => {
  try {
    const { data, status, statusText } = await axios.put(`http://localhost:8000/assign/id_tiket=${id}`,{ status });
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};