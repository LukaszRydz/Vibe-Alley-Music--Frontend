import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { ICartProductInfo } from "../../../interfaces/interfaces";

import styles from './Finalize.module.scss';
import '../../../styles/global/buttons.scss';
import { payment } from "../../../services/payment/payment";
import { ICheckoutData } from "./Finalize";

export const Checkout = ({ products, isValid, deliveryCost, getCheckoutData } : { products: ICartProductInfo[], isValid: boolean, deliveryCost: number, getCheckoutData: ICheckoutData }) => {
    const total = products.reduce((acc, product) => {
        const quantityInCart = Number(product.quantityInCart);
        const realPrice = product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price.toFixed(2);

        return acc + quantityInCart * Number(realPrice);
    }, 0);
    
    return (
        <div className={styles.total}>
            <p className={styles.cost}>
                <span>{(total + deliveryCost).toFixed(2)} PLN</span>
                <span className={styles.delivery}>{`${total.toFixed(2)} PLN + delivery: ${deliveryCost.toFixed(2)} PLN`}</span>
            </p>
            <button className='btn-1' disabled={products && products.length === 0 || !isValid} onClick={() => payment(products, getCheckoutData)}>
                <span>Checkout</span>
                <FaShoppingCart />
            </button>
        </div>
    )
}