import { FaBug } from 'react-icons/fa';

import { sendReport } from '../../services/bot/bot';
import { useRef } from 'react';

import styles from './Chat.module.scss';

export const SendReport = ({userQuestion, message, lang } : {userQuestion: string, message: string, lang: string}) => {
    const buttonRef = useRef<HTMLDivElement>(null)
    
    const send = () => {
        const body = {
            userMess: userQuestion,
            botMess: message,
            lang: lang,
            date: new Date().toLocaleDateString()
        }

        if (buttonRef.current) {
            buttonRef.current.style.display = 'none'
        }

        sendReport(body)
    }

    return (
        <div className={styles.controls} ref={buttonRef}>
            <FaBug className={styles.icon} onClick={send} title='Report a response anonymously' />
        </div>
    )
}