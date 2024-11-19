import styles from './index.module.scss';

export const Price = ({ price, setPrice }: { price: { min: number; max: number }; setPrice: (price: { min: number; max: number }) => void }) => {
    return (
        <div className={styles["price-filter"]}>
            <h1 className={styles['price-header']}>Price:</h1>
            <div className={styles["inputs-wrapper"]}>
                <input
                    type="number"
                    placeholder="From"
                    min={0}
                    max={1000}
                    defaultValue={price.min || 0}
                    onChange={(e) => setPrice({ ...price, min: Number(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder="To"
                    min={0}
                    max={1000}
                    defaultValue={price.max || 0}
                    onChange={(e) => setPrice({ ...price, max: Number(e.target.value) })}
                />
            </div>
        </div>
    );
}