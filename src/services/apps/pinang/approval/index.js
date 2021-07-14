// Externals
import axios from 'axios';
//fungsi error request time out
import { handleErrorResponse } from '../../../../helpers'
// import {baseApiUrl2} from '../../../../common/config';
// axios.defaults.baseURL = baseApiUrl2

/**
 * @description post sign up
 */
export const  addNasabah = async (rekening, name,phoneNumber,alamat,KodeCabang) => {
  try {
    const { data, status, statusText } = await axios.post(`http://localhost:8000/Nasabah`,{ rekening, name,phoneNumber,alamat,KodeCabang});
  
    return { data, status, statusText }
  } catch (error) {
    return handleErrorResponse(error)
  }
};
