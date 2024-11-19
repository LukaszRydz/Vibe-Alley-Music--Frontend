import axios from 'axios';
import { Host } from '../../utils/variables';

axios.defaults.withCredentials = true;

export const isOnline = async () => {
    try {
        const res = await axios.get(`${Host.BOT}/is-online`, { withCredentials: true });
        return res.status === 200;
    }
    catch (e) {
        return false;
    }
}

export const sendMessage = async (message: string) => {
    try {
        const res = await axios.post(`${Host.BOT}/chat`, { message, withCredentials: true });
        return res.data;
    }
    catch (e) {
        return false;
    }
}

export const sendReport = async (body: ISendReportBody) => {
    const res = await axios.post(`${Host.BOT}/report`, body)
    // TODO
}

interface ISendReportBody {
    userMess: string;
    botMess: string;
    lang: string;
    date: string;
}