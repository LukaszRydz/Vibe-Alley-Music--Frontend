import { ICartProductInfo } from "../../../interfaces/interfaces";
import { ProductInfo } from "./ProductInfo";

import { Controls } from "./Controls";

import styles from './ProductList.module.scss';

export const ProductItem = ({ product } : { product: ICartProductInfo }) => {
    return (
        <div className={styles['product-item']}>
            <ProductInfo img={product.images.small.url} info={product} />
            <Controls product={product} />
        </div>
    )
}