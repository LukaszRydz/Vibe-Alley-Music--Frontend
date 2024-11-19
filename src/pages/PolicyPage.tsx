import { Policy } from '../components/Policy/Policy';
import styles from './Pages.module.scss';

export const PolicyPage = () => {
    return (
        <div className={styles.page}>
            <Policy />
        </div>
    )
}

export default PolicyPage