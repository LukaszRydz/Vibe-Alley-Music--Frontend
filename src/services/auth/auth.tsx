import axios from "axios";
import { Host } from "../../utils/variables";

axios.defaults.withCredentials = true;

export const register = async (email: string, password: string, cpassword: string) => {
    if (password !== cpassword) {
        return { error: 'Passwords do not match' }
    }

    try {
        const response = await axios.post(`${Host.CLIENT}/auth/register`, {
            email,
            password,
            cpassword
        }, {
            headers: { "ngrok-skip-browser-warning": true }
        })

        if (response.status !== 201 && response.status !== 200) {
            return { error: 'Error during registration' }
        }

        return response.data;
    } catch (error) {
        return { error: 'Error during registration' }
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${Host.CLIENT}/auth/login`, {
            email,
            password
        }, {
            headers: { "ngrok-skip-browser-warning": true }
        })

        if (response.status !== 200) {
            return { error: 'Error during sign in' }
        }

        localStorage.setItem('auto-login', JSON.stringify("true"));

        return response.data;
    } catch (error) {
        return { error: 'Error during sign in' }
    }
}

export const changePassword = async (newPassword: string, cNewPassword: string) => {
    try {
        const response = await axios.patch(`${Host.CLIENT}/account/change-password`, {
            newPassword,
            cNewPassword
        }, {
            headers: { "ngrok-skip-browser-warning": true }
        })

        if (response.status !== 200) {
            return { error: 'Error during password change' }
        }

        return response.data;
    } catch (error) {
        return { error: 'Error during password change' }
    }
}

export const oneTimeLogin = async (email: string, key: string) => {
    try {
        const response = await axios.post(`${Host.CLIENT}/auth/one-time-login`, {
            email,
            key
        }, {
            headers: { "ngrok-skip-browser-warning": true }
        })

        if (response.status !== 200) {
            return { error: 'Error during one time login' }
        }

        localStorage.setItem('auto-login', JSON.stringify("true"));
        
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            const err = error.response.data.error || error.response.data.message || 'Error during one time login'
            return { error: err };
        }
        return { error: 'Error during one time login' }
    }
}

export const getOneTimeLoginKey = async (email: string) => {
    try {
        const response = await axios.post(`${Host.CLIENT}/auth/one-time-login-key`, {
            email
        }, {
            headers: { "ngrok-skip-browser-warning": true }
        })

        if (response.status !== 200) {
            return { error: 'Error during one time login' }
        }

        return response.data;
    } catch (error) {
        return { error: 'Error during one time login' }
    }
}

export const getAccount = async () => {
    try {
        const response = await axios.get(`${Host.CLIENT}/account`, {
            headers: { "ngrok-skip-browser-warning": true }
        })

        if (response.status !== 200) {
            return { error: 'Error during auto login' }
        }

        return response.data;
    } catch (err) {
        console.error(err);
        return { error: 'Error during auto login' }
    }
}

export const removeCookie = async () => {
    try {
        const response = await axios.get(`${Host.CLIENT}/auth/logout`, {
            headers: { "ngrok-skip-browser-warning": true }
        })
        if (response.status !== 200) {
            return { error: 'Error during logout' }
        }

        return response;
    } catch (err) {
        console.error(err);
        return { error: 'Error during logout' }
    }
}