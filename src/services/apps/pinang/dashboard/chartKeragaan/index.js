// Externals
import axios from 'axios';
import { handleErrorResponse } from 'helpers';

/**
 * @description Get all  chart keragaan
 */
export const getAllChartKeragaan = async (filters) => {
    try{
        const { data,status, statusText } = await axios.get('/pinang/statistic/keragaan', { headers: { Authorization: localStorage.getItem('accessToken')}} ,{ params: { ...filters }});
    
        return { data,status, statusText }
    }catch (error) {
        return handleErrorResponse(error)
    }
};
