import { IMessage } from './Chat';
import { Message } from './Message';

import { Writing } from './Writing';
import styles from './Chat.module.scss';

export const Messages = ({ messages, isResponding }: { messages: IMessage[], isResponding: boolean }) => {
    
    const renderMessages = () => {
        return messages.map((message, idx) => {
            const isLast = idx === messages.length - 1
            return <Message isLast={isLast} key={message.id} lang={message.lang} message={message.content} userQuestion={message.userQuestion || ''} from={message.from} status={message.status} customTag={message.customTag as { [key: string]: string[] } | undefined}/>;
        });
    }

    return (
        <div className={styles.messages}>
            {messages.length > 0 ? renderMessages() : <p className={styles['no-messages']}>No messages yet</p>}
            {isResponding && <Writing />}
        </div>
    );
};