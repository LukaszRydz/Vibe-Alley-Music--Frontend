import styles from './ProductList.module.scss';

export const CartButton = ({ event, child }: ICartButtonProps) => {
    return (
        <button className={styles['delete-btn']} onClick={event}>
            {child}
        </button>
    )
}

interface ICartButtonProps {
    event: () => void,
    child: JSX.Element
}