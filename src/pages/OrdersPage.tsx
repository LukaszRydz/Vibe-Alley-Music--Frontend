import { Orders } from "../components/Orders/Orders"

import styles from './Pages.module.scss'

export const OrdersPage = () => {
    return (
        <div className={styles.page}>
            <Orders />
        </div>
    )
}

export default OrdersPage