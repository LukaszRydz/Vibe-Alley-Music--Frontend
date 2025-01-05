import axios from 'axios'
import { Host } from '../../utils/variables';

axios.defaults.withCredentials = true;

export const sendContactMessage = async (email: string, name: string, message: string) => {
    const response = await axios.post(`${Host.SHOP}/message`, {
        email,
        name,
        message
    }, {
        headers: { "ngrok-skip-browser-warning": true }
    });
    
    if (response.status !== 200) {
        return { error: 'Error fetching products' }
    }

    return response.data;
}