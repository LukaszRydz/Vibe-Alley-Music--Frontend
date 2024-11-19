import { useEffect, useState } from "react";
import styles from "./Contact.module.scss";
import { emailValidator } from "../Auth/validators";
import { sendContactMessage } from "../../services/shop/message";

export const EmailForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        if (name && email && message) {
            if (emailValidator(email) && message.length > 10 && message.length < 500 && name.length > 2) {
                setCanSubmit(true);
            } else {
                setCanSubmit(false);
            }

        } else {
            setCanSubmit(false);
        }
    }, [name, email, message]);

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        
        sendContactMessage(email, name, message).then(res => {
            if (!('error' in res)) {
                setName('');
                setEmail('');
                setMessage('');
            }
        })
    }

    return (
        <div className={styles['email-form']}>
			<h1 className={styles.header}>Wyślij do nas wiadomość:</h1>
            <form className={styles.form} onSubmit={submitForm}>
                <div className={styles["contact-info"]}>
                    <div className={styles["contact-info-item"]}>
                        <h2>Imię:</h2>
                        <input type="text" placeholder="Imię" required={true} value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={styles["contact-info-item"]}>
                        <h2>Email:</h2>
                        <input type="email" placeholder="E-mail" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <textarea className={styles.message} placeholder="Wiadomość" value={message} required={true} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button disabled={!canSubmit} type="submit">Wyślij</button>
            </form>
        </div>
    );
};
