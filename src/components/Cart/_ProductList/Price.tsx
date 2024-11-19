import styles from './ProductList.module.scss'

export const Price = ({ price, discount, quantityInCart } : { price : number, discount: number, quantityInCart: number }) => {
    const realPrice = discount ? ((price * (1 - discount / 100)) * quantityInCart).toFixed(2) : (price * quantityInCart).toFixed(2);
    
    return (
        <div className={styles['price-wrapper']}>
            {discount > 0 && <p className={styles['original-price']}>{(price * quantityInCart).toFixed(2)}</p>}
            <p className={styles.price}>{realPrice} PLN</p>
        </div>
    )
}