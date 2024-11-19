import axios from 'axios'
import { Host } from '../../utils/variables';

axios.defaults.withCredentials = true;

export const connectToSpotify = async () => {
    // This endpoint redirects to Spotify login page
    try {
        const response = await axios.get(`${Host.SPOTIFY}/spotify/login`, {withCredentials: true});

        if (response.status !== 200) {
            return { error: 'Error during connecting to Spotify' }
        }

        const url: string = response.data;
        window.location.href = url;
    } catch (error) {
        return { error: 'Error during connecting to Spotify' }
    }
}

export const disconnectFromSpotify = async () => {
    try {
        const response = await axios.delete(`${Host.CLIENT}/spotify/disconnect`, {withCredentials: true});

        if (response.status !== 200) {
            return { error: 'Error during disconnecting from Spotify' }
        }

        return response.data;
    }

    catch (error) {
        return { error: 'Error during disconnecting from Spotify' }
    }
}