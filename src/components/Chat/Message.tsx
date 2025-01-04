import { useEffect, useRef } from "react";
import { FaUser, FaRobot } from "react-icons/fa";
import { MessageReader } from "./MessageReader";
import { ParsedMessage } from "./ParsedMessage";

import { SendReport } from "./SendReport";

import { CustomTag } from "./CustomTag";
import { loadLocalTranslations } from "../../translations/config";

import styles from "./Chat.module.scss";

export const Message = ({ message, customTag, from, isLast, lang, userQuestion }: { message: string; lang?: string, from: string, status?: string, customTag?: { [key: string]: string[] }, userQuestion: string, isLast: boolean }) => {
    const t = loadLocalTranslations('ChatBot')()
    const messageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (isLast && messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    
    
    return (
        <div className={`${styles["message-wrapper"]} ${(from === "bot" || from === "none") && styles.bot}`} ref={messageRef}>
            {from === "user" ? <FaUser className={styles.avatar} /> : <FaRobot className={styles.avatar} />}
            <div className={`${styles.message} ${from === "user" ? styles["message_user"] : styles["message_bot"]}`}>
                <p>{ParsedMessage({ message })}</p>
                {customTag && <CustomTag tag={customTag} />}

                {from === "bot" && 
                    <div className={styles["report-info"]}>
                        <hr />
                        <p>{t('responseReportInfo')}</p>
                    </div>
                }
                
                <div className={styles.controls}>
                    {from === "bot" && <SendReport message={message} userQuestion={userQuestion} lang={lang || 'en'} />}  
                    {from !== "user" && <MessageReader message={message} lang={lang ? lang : 'en'} />}
                </div>
                
            </div>
        </div>
    );
};
