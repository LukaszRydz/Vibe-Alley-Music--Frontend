import { useNavigate } from "react-router-dom";
import { IProductInfo } from "../../../interfaces/interfaces";

import styles from "./Banner.module.scss";

export const BannerElement = ({ product }: { product: IProductInfo }) => {
    const navigate = useNavigate()

    return (
        <div className={styles["banner-element"]} style={{ backgroundImage: `url(${product.images.medium.url})` }}>
            <div className={styles["cover-wrapper"]}>
                <button className={styles['go-to__btn']} onClick={() => navigate(`/product/${product._id}`)}>
                    Go to product {'>'}
                    <span className={styles.price}>9.99 PLN</span>
                </button>
                <img src={product.images.medium.url} alt="album cover" className={styles.cover} />
                <span className={styles.released}>// Released: {product.releaseDate.split('T')[0]}</span>
            </div>
            <h1 className={styles.title}>{product.title}</h1>
        </div>
    );
};