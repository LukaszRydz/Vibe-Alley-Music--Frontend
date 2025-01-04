import { FaShoppingCart } from 'react-icons/fa';
import { ICartProductInfo } from "../../../interfaces/interfaces";

import styles from './Finalize.module.scss';
import '../../../styles/global/buttons.scss';
import { payment } from "../../../services/payment/payment";
import { ICheckoutData } from "./Finalize";
import { useContext } from "react";
import { UserContext } from "../../../context/User/User";

export const Checkout = ({ products, isValid, deliveryCost, getCheckoutData } : { products: ICartProductInfo[], isValid: boolean, deliveryCost: number, getCheckoutData: ICheckoutData }) => {
    const { clearCart } = useContext(UserContext)!;
    
    const total = products.reduce((acc, product) => {
        const quantityInCart = Number(product.quantityInCart);
        const realPrice = product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price.toFixed(2);

        return acc + quantityInCart * Number(realPrice);
    }, 0);

    const handleClick = () => {
        clearCart();
        sessionStorage.removeItem('orders');
        payment(products, getCheckoutData);
    }
    
    return (
        <div className={styles.total}>
            <p className={styles.cost}>
                <span>{(total + deliveryCost).toFixed(2)} PLN</span>
                <span className={styles.delivery}>{`${total.toFixed(2)} PLN + delivery: ${deliveryCost.toFixed(2)} PLN`}</span>
            </p>
            <button className='btn-1' disabled={products && products.length === 0 || !isValid} onClick={handleClick}>
                <span>Checkout</span>
                <FaShoppingCart />
            </button>
        </div>
    )
}