// Externals
import axios from 'axios';
import { handleErrorResponse } from 'helpers';
/**
 * @description Get all total repayment
 */
export const getAllTotalRepayment = async (filters) => {
    try { 
        const { data,status, statusText } = await axios.get('/pinang/repayment/total', { headers: { Authorization: localStorage.getItem('accessToken')}} , { params: { ...filters }});
    
        return { data,status, statusText }
    }catch (error) {
        return handleErrorResponse(error)
    }
};
