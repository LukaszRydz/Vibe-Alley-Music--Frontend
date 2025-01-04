import { IOrder } from "./Orders";

import { ProductList } from "./ProductsList";
import styles from './Orders.module.scss'
import { loadLocalTranslations } from "../../translations/config";

const generateStatus = (status: string) => {
    let params = {
        text: 'Unknown',
        color: 'orange',
    }
    switch (status.toLowerCase()) {
        case 'payment_pending':
            params = {
                text: 'Payment pending',
                color: 'purple'
            }
            break;
        case 'completed':
            params = {
                text: 'Completed',
                color: 'green'
            }
            break;
        case 'returned':
            params = {
                text: 'Returned',
                color: 'red'
            }
            break;
    }

    return <span className={styles.status} style={{backgroundColor: params.color}}>{params.text}</span>
}

export const OrderElement = ({ order }: { order: IOrder }) => {
    const t = loadLocalTranslations('Orders')()    

    const { _id, deliveryMethod, paymentMethod, status, totalAmount, products, createdAt } = order;
    return (
        <li className={styles.order}>
            <div className={styles.header}>
                <h3>{t('id')}: {_id}</h3>
                <p className={styles.status}>{generateStatus(status)}</p>
            </div>
            <hr />
            <div className={styles.info}>
                <p>{t('delivery')}: {deliveryMethod.toUpperCase()}</p>
                <p>{t('payment')}: {paymentMethod.toUpperCase()}</p>
                <p>{t('createdDate')}: {createdAt.split('T')[0]}</p>
                <ProductList products={products} />
                <p><strong>{t('total')}: {totalAmount} PLN</strong></p>
            </div>
            <hr />
            <p className={styles["return-info"]}>
                {t('returnInfo')}
            </p>
        </li>
    )
}