import { Price } from './Price'

import { useNavigate } from 'react-router-dom'

import styles from './ProductList.module.scss'

export const ProductInfo = ({ img, info: {title, price, discount, _id, quantityInCart } }: { img: string, info: InfoParams }) => {
    const navigate = useNavigate();

    return (
        <div className={styles['product-info']}>
            <img className={styles.cover} src={img} alt={`"${title}" cover`} onClick={() => navigate(`/product/${_id}`)}/>
            <h1 className={styles.title}>{title}</h1>
            <Price price={price} discount={discount} quantityInCart={quantityInCart} />
        </div>
    )
}

interface InfoParams {
    title: string,
    price: number,
    discount: number,
    _id: string,
    quantityInCart: number
}