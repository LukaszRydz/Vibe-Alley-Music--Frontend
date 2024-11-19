import { Ordered } from "../components/Ordered/Ordered"

import styles from './Pages.module.scss'

export const OrderedPage = () => {
    return (
        <div className={styles.page}>
            <Ordered />
        </div>
    )
}

export default OrderedPage