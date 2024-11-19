import styles from './Finalize.module.scss';

export const DeliveryMethods = ({ deliveryMethod, setDeliveryMethod, setDeliveryCost }: IDeliveryMethods) => {
    const inpostCost = 9.99;
    const dpdCost = 14.99;
    
    const handleClick = (method: string, cost: number) => {
        setDeliveryMethod(method);
        setDeliveryCost(cost);
    }
    return (
        <div className={styles['delivery-methods']}>
            <h2 className={styles['delivery-methods__title']}>Delivery methods:</h2>
            <div className={styles['options-menu']}>
                <button className={`${styles.option} ${styles.inpost}`} disabled={deliveryMethod === 'inpost'} onClick={() => handleClick('inpost', inpostCost)}>
                    <span className={styles.cost}>{inpostCost} PLN</span>
                    <img src='https://inpost.pl/themes/custom/inpost/logo.svg?v3' draggable='false'/>
                </button>
                <button className={`${styles.option} ${styles.dpd}`} disabled={deliveryMethod === 'dpd'} onClick={() => handleClick('dpd', dpdCost)}>
                    <span className={styles.cost}>{dpdCost} PLN</span>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png' draggable='false'/>
                </button>
            </div>
        </div>
    )
}

interface IDeliveryMethods {
    deliveryMethod: string;
    setDeliveryMethod: (value: string) => void;
    setDeliveryCost: (value: number) => void;
}