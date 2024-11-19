import { IoSend } from '@react-icons/all-files/io5/IoSend';
import { useState } from 'react';

import styles from './Chat.module.scss';
import { SpeechRecognition } from './SpeechRecognition';
import { IMessage } from './Chat';

export const Input = ({ addMessage } : { addMessage: (messages: IMessage) => void }) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message) {
            addMessage({
                id: (Math.random() + 1).toString(36).substring(7),
                from: 'user',
                content: message,
            });
            setMessage('');
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div className={styles['input-wrapper']}>
            <input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown}/>
            <div className={styles.controls}>
                <SpeechRecognition setMessage={setMessage}/>
                <button onClick={sendMessage}><IoSend className={styles.icon}/></button>
            </div>
        </div>
    );
}