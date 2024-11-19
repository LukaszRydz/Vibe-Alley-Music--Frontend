import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaRobot } from "@react-icons/all-files/fa/FaRobot";
import { MessageReader } from "./MessageReader";
import { ParsedMessage } from "./ParsedMessage";

import { SendReport } from "./SendReport";

import { CustomTag } from "./CustomTag";

import styles from "./Chat.module.scss";

// TODO: add error flag in sendReport
export const Message = ({ message, customTag, from, status, lang, userQuestion }: { message: string; lang?: string, from: string, status?: string, customTag?: { [key: string]: string[] }, userQuestion: string }) => {
    return (
        <div className={`${styles["message-wrapper"]} ${from === "bot" && styles.bot}`}>
            {from === "user" ? <FaUser className={styles.avatar} /> : <FaRobot className={styles.avatar} />}
            <div className={`${styles.message} ${from === "user" ? styles["message_user"] : styles["message_bot"]}`}>
                <p>{ParsedMessage({ message })}</p>
                {customTag && <CustomTag tag={customTag} />}

                <div className={styles.controls}>
                    {from !== "user" && <SendReport message={message} userQuestion={userQuestion} lang={lang || 'en'} />}  
                    {from !== "user" && <MessageReader message={message} lang={lang ? lang : 'en'} />}
                </div>

            </div>
        </div>
    );
};
