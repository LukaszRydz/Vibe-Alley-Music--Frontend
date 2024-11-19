import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";

import { connectToSpotify, disconnectFromSpotify } from "../../services/spotify/spotify";
import { useContext } from "react";
import { UserContext } from "../../context/User/User";

import styles from "./SettingsPageView.module.scss";

export const SpotifyBtn = () => {
    const { user, setUser } = useContext(UserContext)!;

    const connect = () => connectToSpotify();
    const disconnect = () => {
        disconnectFromSpotify().then((res) => {
            if (res.error) {
                console.error(res.error);
                return;
            }
            setUser(res);
        });
    };

    if (user && user.spotify) {
        return (
            <button className={`${styles["spotify-btn"]} ${styles.button}`} onClick={disconnect}>
                Disconnect from Spotify
            </button>
        );
    }

    return (
        <button className={`${styles["spotify-btn"]} ${styles.button}`} onClick={connect}>
            <FaSpotify className={styles.icon} />
            Connect to Spotify
        </button>
    );
};
