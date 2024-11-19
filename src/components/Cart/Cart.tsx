import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/User/User"
import { ICartProductInfo } from "../../interfaces/interfaces";
import { getCartProductsInfo } from "../../services/shop/products";
import { ProductList } from "./_ProductList/ProductList";
import { Finalize } from "./_Finalize/Finalize";

import styles from './Cart.module.scss';

export const Cart = () => {
    const { cart } = useContext(UserContext)!;
    const [products, setProducts] = useState<ICartProductInfo[]>([]);

    useEffect(() => {
        cart && cart.length > 0 ? getCartProductsInfo(cart).then((data) => {
            data.error ? console.error(data.error) : setProducts(data);
        }) : setProducts([]);
    }, [cart]);
    
    return (
        <div className={styles.cart} >
            <ProductList products={products} additionalClass="full-width"/>
            {products.length > 0 && <Finalize products={products}/>}
        </div>
    )
}