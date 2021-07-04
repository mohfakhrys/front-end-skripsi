// Externals
import axios from 'axios';
import { handleErrorResponse } from 'helpers';
/**
 * @description Get all total outstanding
 */
export const getAllTotalOutstanding = async (filters) => {
    try{
        const { data,status, statusText } = await axios.get('/pinang/disbursement/total-outstanding',{ headers: { Authorization: localStorage.getItem('accessToken')}} , { params: { ...filters }});
    
        return { data,status, statusText }
    }catch (error) {
        return handleErrorResponse(error)
    }
};
