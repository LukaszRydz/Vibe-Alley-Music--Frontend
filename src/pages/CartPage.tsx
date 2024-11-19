import { Cart } from '../components/Cart/Cart'

import styles from './Pages.module.scss'

const CartPage = () => {
    return (
        <div className={styles.page}>
            <Cart />
        </div>
    )
}

export default CartPage