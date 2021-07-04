import axios from 'axios';
import { handleErrorResponse } from 'helpers'

/**
 * @description Get all paidoff
 */

export const getAllPaidOffs = async( limit = 0, offset = 0, q , filters ) => {
  try{

      const { data, status, statusText } = await axios.get('/pinang/fullpayment', { headers: { Authorization: localStorage.getItem('accessToken')}, params: { limit, offset, q, ...filters }})

    return { data,status,statusText }
  } catch(error){

    return handleErrorResponse(error)
  }
}
