import { IMessage } from './Chat';
import { Message } from './Message';

import styles from './Chat.module.scss';
import { Writing } from './Writing';
import { useEffect, useRef } from 'react';

export const Messages = ({ messages, isResponding }: { messages: IMessage[], isResponding: boolean }) => {
    const messagesRef = useRef<HTMLDivElement>(null);
    
    const renderMessages = () => {
        return messages.map((message) => {
            return <Message key={message.id} lang={message.lang} message={message.content} userQuestion={message.userQuestion || ''} from={message.from} status={message.status} customTag={message.customTag as { [key: string]: string[] } | undefined}/>;
        });
    }

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);  

    return (
        <div className={styles.messages} ref={messagesRef}>
            {messages.length > 0 ? renderMessages() : <p className={styles['no-messages']}>No messages yet</p>}
            {isResponding && <Writing />}
        </div>
    );
};