import { ICartProductInfo } from "../../../interfaces/interfaces";
import { ProductItem } from "./ProductItem";

import styles from "./ProductList.module.scss";

export const ProductList = ({ products, additionalClass }: { products: ICartProductInfo[], additionalClass?: string }) => {
    const renderProducts = () => {
        return products.map((product) => {
            return <ProductItem key={product._id} product={product} />;
        });
    }
    
    if (products.length === 0) return <div className={`${styles.empty} ${styles[`${additionalClass}`]}`}>Cart is empty</div>

    return <div className={styles.products}>{renderProducts()}</div>;
};
