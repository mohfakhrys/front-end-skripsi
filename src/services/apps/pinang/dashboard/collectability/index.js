// Externals
import axios from 'axios';
//fungsi error 
import { handleErrorResponse } from 'helpers';

/**
 * @description Get all application status
 */
export const getAllTotalStatusCollectability = async (filters) => {
    try {
        const { data,status, statusText } = await axios.get('/pinang/collectability/total-status-collectability',{ headers: { Authorization: localStorage.getItem('accessToken')} , params: { ...filters }});
    
        return { data,status, statusText }
    }catch (error) {
        return handleErrorResponse(error)
    }
};
