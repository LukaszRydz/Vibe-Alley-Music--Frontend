import { IoChatboxEllipsesSharp } from "react-icons/io5";

import { useEffect, useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { Input } from './Input';
import { Messages } from './Messages';
import { isOnline, sendMessage } from '../../services/bot/bot';

import styles from './Chat.module.scss'

export const Chat = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isShowed, setIsShowed] = useState(false);
    const [isBotOnline, setIsBotOnline] = useState({ chatStatus: false, model_name: '' });
    const [isResponding, setIsResponding] = useState(false);

    useEffect(() => {
        isOnline().then(res => {
            setIsBotOnline(res);
        });
    }, []);

    const addMessage = (message: IMessage, local?: boolean) => {
        const userMess = message
        if (!message.id) message.id = (Math.random() + 1).toString(36).substring(7);
        setMessages(prevMessages => [...prevMessages, message]);

        if (local) return;

        setIsResponding(true);
        const modelLoadingMessage = setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, answer.wait]);
        }, 3000);

        sendMessage(message.content).then((res) => {
            clearTimeout(modelLoadingMessage);
            
            if (!res) {
                setIsResponding(false);
                setMessages(prevMessages => [...prevMessages, answer.error]);

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

    if (!isBotOnline.chatStatus) return null;

    if (!isShowed) {
        return (
            <div className={styles['chat_open_btn']} onClick={() => setIsShowed(true)}>
                <IoChatboxEllipsesSharp className={styles.icon}/>
            </div>
        )
    }

    return (
        <div className={styles.chat}>
            <ChatHeader addMessage={addMessage} setShowed={setIsShowed} model_name={isBotOnline.model_name}/>
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

const answer = {
    wait: {
        id: (Math.random() + 1).toString(36).substring(7),
        from: 'none',
        content: 'Model is currently loading to memory. Please wait a moment. ⏳',
        status: 'error'
    },

    error: {
        id: (Math.random() + 1).toString(36).substring(7),
        from: 'bot',
        content: 'There was an error processing your request. Please try again later. 🙁',
        status: 'error'
    }
}