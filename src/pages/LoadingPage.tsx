import { AiOutlineLoading } from 'react-icons/ai'

import styles from './Pages.module.scss'

export const LoadingPage = () => {
    return (
        <div className={styles["loading-page"]}>
            <AiOutlineLoading className={styles["loading-icon"]} />
        </div>
    )
}