import { Home } from "../components/Home/Home";

import styles from './Pages.module.scss'

export const HomePage = () => {    
    return (
        <div className={`${styles.page} ${styles.home}`}>
            <Home />
        </div>
    )
}