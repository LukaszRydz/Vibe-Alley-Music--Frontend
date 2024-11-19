import { useEffect, useState } from "react";

import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";
import { IoIosWarning } from "@react-icons/all-files/io/IoIosWarning";

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
                <span>Uwaga! Odtwarzacz Spotify nie ma wbudowanego regulatora głośności. Proszę ścisz głośność przeglądarki w systemie.</span>
                <button onClick={() => setLoudWarning(false)} className="btn-1">Rozumiem</button>
            </div>
        )
    }

    return (
        <div className={styles["spotify-iframe"]}>
            <h1 className={styles.header}>Lista utworów:</h1>
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
