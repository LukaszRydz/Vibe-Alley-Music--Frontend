import { useContext } from "react"
import { UserContext } from "../../context/User/User"

import styles from './Navbar.module.scss'

export const CartCounter = () => {
    const { cart } = useContext(UserContext)!

    const counter = () => {
        if (!cart || cart.length === 0) {
            return 0
        } else {
            return cart.reduce((acc, item) => acc + item.quantity, 0)
        }
    }

    return <div className={styles["cart-counter"]}>{counter()}</div>
}