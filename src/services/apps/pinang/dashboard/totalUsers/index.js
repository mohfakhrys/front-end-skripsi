// Externals
import axios from 'axios';
import { handleErrorResponse } from 'helpers'
/**
 * @description Get all total user
 */
export const getAllTotalUser =  async (filters) => {
    try{
        const { data,status, statusText } = await axios.get('/pinang/registration/total', { headers: { Authorization: localStorage.getItem('accessToken')}} , { params: { ...filters }});
    
        return { data,status, statusText }
    }catch (error) {
        return handleErrorResponse(error)
    }
};
