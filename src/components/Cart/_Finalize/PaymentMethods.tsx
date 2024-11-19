import styles from './Finalize.module.scss'

export const PaymentMethods = ({ payMethod, setPayMethod } : IPaymentMethodProps) => {
    return (
        <div className={styles['options-menu']}>
            <button className={`${styles.option} ${styles.visa}`} disabled={payMethod === 'card'} onClick={() => setPayMethod('card')}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png' draggable='false'/>
            </button>
            <button className={`${styles.option} ${styles.blik}`} disabled={payMethod === 'blik'} onClick={() => setPayMethod('blik')}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Blik_logo.jpg' draggable='false'/>
            </button>
        </div>
    )
}

interface IPaymentMethodProps {
    payMethod: string;
    setPayMethod: (x: string) => void;
}