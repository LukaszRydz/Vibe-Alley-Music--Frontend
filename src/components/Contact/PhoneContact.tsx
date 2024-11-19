import styles from './Contact.module.scss';

export const PhoneContact = () => {
    return (
        <div className={styles['phone-container']}>
            <a href="tel:+48123456789">+48 123 456 789</a>
            <a href="tel:+48123456789">+48 123 456 789</a>
        </div>
    );
};