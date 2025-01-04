import { IMessage } from "./Chat";

import { IoIosCloseCircle, IoMdHelpCircle } from "react-icons/io";
import { Host } from "../../utils/variables";

import styles from "./Chat.module.scss";

export const ChatHeader = ({ addMessage, setShowed, model_name }: IChatHeader) => {
    const showHelp = () => {
        addMessage({
            id: (Math.random() + 1).toString(36).substring(7),
            from: "none",
            content: `
                You can ask me a question, and I will do my best
                to answer it by analyzing its content.
                If I'm unable to provide an answer, I will apologize
                and try to learn the answer in the future.
                Here's an example of a conversation:<br>
                User: Can you recommend a rap album?<br>
                Bot: Of course! I recommend the album 'UTOPIA,' which you can check out
                by clicking here -> ${Host.FRONT}/product/66e5a5eb48c04617c5e86a31. Ask another question, and I will do my best to answer it.
            `,
        }, true);

        const helpButton = document.querySelector(`.${styles["chat-header_icon"]}`) as HTMLElement;
        helpButton.style.display = "none";
    };

    return (
        <div className={styles["chat-header"]}>
            <h1>Connected to {model_name}</h1>
            <IoMdHelpCircle className={styles["chat-header_icon"]} onClick={showHelp} />
            <IoIosCloseCircle className={styles["chat-header_icon"]} onClick={() => setShowed(false)}/>
        </div>
    );
};

interface IChatHeader {
    addMessage: (messages: IMessage, local?: boolean) => void;
    setShowed: (is: boolean) => void;
    model_name: string;
}