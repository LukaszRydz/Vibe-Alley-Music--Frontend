import { useEffect, useState } from "react";

import { FaSpotify } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

import styles from "./ProductPageView.module.scss";
import '../../styles/global/buttons.scss';

export const TrackList = ({ spotifyAlbumId }: { spotifyAlbumId: string }) => {
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [loudWarning, setLoudWarning] = useState(true);

    useEffect(() => {
        setIframeLoaded(false);
    }, [spotifyAlbumId]);

    const notLoaded = () => {
        if (iframeLoaded) return;

        return (
            <div className={styles["iframe-placeholder"]}>
                <FaSpotify />
                <span>Fetching...</span>
            </div>
        )
    }

    const loudWarningMessage = () => {
        if (!loudWarning || !iframeLoaded) return;

        return (
            <div className={styles["iframe-warning"]}>
                <IoIosWarning />
                <span>Warning! The Spotify player does not have a built-in volume control. Please lower the browser volume in your system.</span>
                <button onClick={() => setLoudWarning(false)} className="btn-1">Understand</button>
            </div>
        )
    }

    return (
        <div className={styles["spotify-iframe"]}>
            <h1 className={styles.header}>Track list:</h1>
            <div className={styles["iframe-container"]}>
                <iframe
                    style={{ display: `${iframeLoaded ? "block" : "none"}` }}
                    src={`https://open.spotify.com/embed/album/${spotifyAlbumId}`}
                    key={spotifyAlbumId}
                    width="100%"
                    height="550"
                    allow="encrypted-media"
                    onLoad={() => setIframeLoaded(true)}
                >
                </iframe>
                {loudWarningMessage()}
                {notLoaded()}
            </div>

        </div>
    );
};
