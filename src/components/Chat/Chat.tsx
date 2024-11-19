import { IoChatboxEllipsesSharp } from '@react-icons/all-files/io5/IoChatboxEllipsesSharp';

import { useEffect, useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { Input } from './Input';
import { Messages } from './Messages';
import { isOnline, sendMessage } from '../../services/bot/bot';

import styles from './Chat.module.scss'

export const Chat = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isShowed, setIsShowed] = useState(false);
    const [isBotOnline, setIsBotOnline] = useState(false);
    const [isResponding, setIsResponding] = useState(false);

    useEffect(() => {
        isOnline().then(state => setIsBotOnline(state));
    }, []);

    const addMessage = (message: IMessage, local?: boolean) => {
        const userMess = message
        if (!message.id) message.id = (Math.random() + 1).toString(36).substring(7);
        setMessages(prevMessages => [...prevMessages, message]);

        if (local) return;

        setIsResponding(true);
        sendMessage(message.content).then((res) => {
            if (!res) {
                setIsResponding(false);

                setMessages(prevMessages => [...prevMessages, {
                    id: (Math.random() + 1).toString(36).substring(7),
                    from: 'bot',
                    content: 'There was an error processing your request. Please try again later. 🙁',
                    status: 'error'
                }]);

                return;
            }
            
            const message = res.response.message ? res.response.message : 'There was an error processing your request. Please try again later. 🙁';
            setMessages(prevMessages => [...prevMessages, {
                id: (Math.random() + 1).toString(36).substring(7),
                from: 'bot',
                content: message,
                status: res.status,
                customTag: res.response.customTag || null,
                lang: res.response.lang || 'en',
                userQuestion: userMess.content
            }]);
            setIsResponding(false);
        }
        ).catch(() => {
            setIsResponding(false);
            console.log('Error sending message');
        });
    }

    if (!isBotOnline) return null;

    if (!isShowed) {
        return (
            <div className={styles['chat_open_btn']} onClick={() => setIsShowed(true)}>
                <IoChatboxEllipsesSharp className={styles.icon}/>
            </div>
        )
    }

    return (
        <div className={styles.chat}>
            <ChatHeader addMessage={addMessage} setShowed={setIsShowed}/>
            <Messages messages={messages} isResponding={isResponding}/>
            {!isResponding && <Input addMessage={addMessage}/>}
        </div>
    );
}

export interface IMessage {
    id: string;
    from: string;
    userQuestion?: string;
    content: string;
    link?: string;
    status?: string;
    customTag?: string[];
    lang?: string | 'en';
}