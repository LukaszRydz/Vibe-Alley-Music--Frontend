import { useEffect, useState } from 'react';

import { AiFillSound } from '@react-icons/all-files/ai/AiFillSound';
import { FaVolumeMute } from '@react-icons/all-files/fa/FaVolumeMute';

import styles from './Chat.module.scss';
import { urlRegex } from '../../utils/helpers';

export const MessageReader = ({ message, lang } : {message: string, lang: string }) => {
    const [isReading, setIsReading] = useState(false);
    const [isRead, setIsRead] = useState(false);

    useEffect(() => {
        const autoplay = document.documentElement.getAttribute('auto-read');
        if (autoplay === 'on' && !isRead) {
            readMessage();
        }
    }, []);

    const readMessage = () => {
        const textWithoutLinks = message.replace(urlRegex, 'Hidden Link');
        const utterance = new SpeechSynthesisUtterance(textWithoutLinks);
        utterance.lang = lang === 'pl' ? 'pl-PL' : 'en-US';

        utterance.onend = () => {
            setIsReading(false);
        };

        window.speechSynthesis.speak(utterance);
        
        setIsReading(true);
        setIsRead(true);
    }

    const stopReading = () => {
        window.speechSynthesis.cancel();
        setIsReading(false);
    }

    return (
        <>
            {isReading ? (
                <FaVolumeMute className={styles.icon} onClick={stopReading}/>
            ) : (
                <AiFillSound className={styles.icon} onClick={readMessage}/>
            )}
        </>
    )
}