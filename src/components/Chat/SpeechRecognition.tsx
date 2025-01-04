import { FaMicrophone } from "react-icons/fa";

import styles from "./Chat.module.scss";

export const SpeechRecognition = ({ setMessage }: { setMessage: (message: string) => void }) => {
    if (!("webkitSpeechRecognition" in window)) return;

    const recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "pl-PL";

    const start = () => recognition.start();

    recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const message = event.results[last][0].transcript;
        setMessage(message);
    };

    recognition.onerror = function (event) {
        console.error("Błąd rozpoznawania mowy: " + event.error);
    };

    recognition.onend = function () {};

    return (
        <button>
            <FaMicrophone className={styles.icon} onClick={start} />
        </button>
    );
};
