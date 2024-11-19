import { FaBug } from '@react-icons/all-files/fa/FaBug';

import styles from './Chat.module.scss';
import { sendReport } from '../../services/bot/bot';

export const SendReport = ({userQuestion, message, lang } : {userQuestion: string, message: string, lang: string}) => {
    const send = () => {
        const body = {
            userMess: userQuestion,
            botMess: message,
            lang: lang,
            date: new Date().toLocaleDateString()
        }

        sendReport(body)
    }

    return (
        <div className={styles.controls}>
            <FaBug className={styles.icon} onClick={send} />
        </div>
    )
}