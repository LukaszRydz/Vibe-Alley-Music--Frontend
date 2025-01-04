import axios from 'axios';
import { Host } from '../../utils/variables';

axios.defaults.withCredentials = true;

type IsOnlineResponse = { 
    chatStatus: boolean; 
    model_name: string; 
};

export const isOnline = async (): Promise<IsOnlineResponse> => {
    try {
        const res = await axios.get(`${Host.BOT}/is-online`, { withCredentials: true });
        return { chatStatus: res.status === 200, model_name: res.data.name };
    } catch (e) {
        return { chatStatus: false, model_name: '' };
    }
};

export const sendMessage = async (message: string) => {
    try {
        const res = await axios.post(`${Host.BOT}/chat`, { message, withCredentials: true });
        console.log(res.data);
        return res.data;
    }
    catch (e) {
        return false;
    }
}

export const sendReport = async (body: ISendReportBody) => {
    await axios.post(`${Host.BOT}/report`, body) 
    // TODO
}

interface ISendReportBody {
    userMess: string;
    botMess: string;
    lang: string;
    date: string;
}
