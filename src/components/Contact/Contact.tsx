import { EmailForm } from "./EmailForm";

import styles from "./Contact.module.scss";
import { PhoneContact } from "./PhoneContact";

export const Contact = () => {
    return (
        <div className={styles.contact}>
			<EmailForm />
			
			<h1 className={styles.header}>Lub zadzwoń:</h1>
			<PhoneContact />
        </div>
    );
};

export default Contact;
