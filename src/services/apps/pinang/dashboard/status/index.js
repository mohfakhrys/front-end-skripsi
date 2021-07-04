// Externals
import axios from 'axios';
import { handleErrorResponse } from 'helpers'
/**
 * @description Get all Total status
 */
export const getAllTotalStatus = async (filters) => {
    try{
        const { data, status, statusText } = await axios.get('/pinang/statistic/total-group-by-status',{ headers: { Authorization: localStorage.getItem('accessToken')}} , { params: { ...filters }});
    
        return { data, status, statusText }
    }catch (error) {
        return handleErrorResponse(error)
    }
};
