import axios from 'axios'
import { Host } from '../../utils/variables';

export const sendContactMessage = async (email: string, name: string, message: string) => {
    const response = await axios.post(`${Host.SHOP}/message`, {
        email,
        name,
        message
    });
    
    if (response.status !== 200) {
        return { error: 'Error fetching products' }
    }

    return response.data;
}