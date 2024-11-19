import axios from 'axios';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/User/User';
import { toast, ToastContainer } from 'react-toastify';

import './ResponseHandler.scss'
import 'react-toastify/dist/ReactToastify.css';


export const ResponseHandler = () => {
    const { removeUserInformation } = useContext(UserContext)!;

    useEffect(() => {
        const responseInterceptor = axios.interceptors.response.use(
            (res) => {
                if (res.headers['music-store-cookie_deleted'] === "true") {
                    removeUserInformation();
                    toast.info("Your session has expired, you have been logged out.");
                }

                if (res.data.showSuccess == 'true' || res.data.showSuccess == true) {
                    if (res.data?.message) {
                        toast.success(res.data.message);
                    } else {
                        toast.success("Operation completed successfully.");
                    }
                }

                return res;
            },
            (error) => {
                if (error.code === "ERR_NETWORK") {
                    toast.error(
                        <>
                            <span>{`Server ${recognizeSender(error.config.url)} error`}</span><br />
                            <hr style={{ width: "100%", color: '#e74c3c', border: ".5px solid", margin: ".3rem 0" }} />
                            <span>{`Server is not responding`}</span>
                        </>
                    );
                } else {
                    const message = error.response?.data?.error || error.message || "Unknown error occurred";
                    toast.error(
                        <>
                            <span>{`Server ${recognizeSender(error.config.url)} error`}</span><br />
                            <hr style={{ width: "100%", color: '#e74c3c', border: ".5px solid", margin: ".3rem 0" }} />
                            <span>{message}</span>
                        </>
                    );
                }

                if (error.response?.headers['music-store-cookie_deleted'] === "true") {
                    removeUserInformation();
                    toast.info("Your session has expired, you have been logged out.");
                }

                return Promise.reject(error);
            },
        );

        return () => axios.interceptors.response.eject(responseInterceptor);
    }, [removeUserInformation]);

    const recognizeSender = (url: string) => {
        const port = url.split(":")[2].split("/")[0];

        switch (port) {
            case "5010":
                return "Bot";
            case "5000":
                return "Spotify";
            case "8080":
                return "Client";
            case "8050":
                return "Shop"
            default:
                return url;
        }
    }

    return (
        <>
            <ToastContainer 
                position="top-right" 
                theme="dark"
                newestOnTop={true}
                autoClose={5000} 
                hideProgressBar={false} 
                closeOnClick
                pauseOnHover
                className={"toast-container"}
            draggable />
        </>
    );
};