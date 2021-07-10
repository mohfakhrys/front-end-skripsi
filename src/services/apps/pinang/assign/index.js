// Externals
import axios from 'axios';
//fungsi error request time out
import { handleErrorResponse } from '../../../../helpers'
// import {baseApiUrl2} from '../../../../common/config';
// axios.defaults.baseURL = baseApiUrl2

/**
 * @description post sign up
 */
export const AssignData = async (id, pekerja) => {
  try {
    const { data, status, statusText } = await axios.put(`http://localhost:8000/assign/id_tiket=${id}`,{ pekerja });
  
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};

export const updateStatus = async (id, statusTiket) => {
  try {
    const { data, status, statusText } = await axios.put(`http://localhost:8000/status/id_tiket=${id}`,{ statusTiket });
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};