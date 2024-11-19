import Contact from '../components/Contact/Contact'
import styles from './Pages.module.scss'

export const ContactPage = () => {
    return (
        <div className={styles.page}>
            <Contact />
        </div>
    )
}

export default ContactPage