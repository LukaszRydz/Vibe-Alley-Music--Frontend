// Hooks
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Cover } from "./Cover";
import { SoldOutBadge } from "./SoldOutBadge";
import { fetchProductsDetails } from "../../services/shop/products";

import { IProductInfo } from "../../interfaces/interfaces";
import { UserContext } from "../../context/User/User";
import { loadLocalTranslations } from "../../translations/config";
import { discountCalc } from "../../utils/helpers";
import { DiscountBadge } from "./DiscountBadge";

// Styles
import styles from "./ProductCard.module.scss";

export const ProductCard = ({ product, customClass }: { product: IProductInfo; customClass?: string }) => {
    const { addAlbumToCart, user } = useContext(UserContext)!;
    const [fetching, setFetching] = useState(false);
    const [adding, setAdding] = useState(false);
    const navigate = useNavigate();

    const card = useRef<HTMLDivElement>(null);
    const t = loadLocalTranslations("ProductCard")();

    const discountPrice = discountCalc(product.discount, product.price);

    const userFavAlbums = user?.spotify?.favAlbums?.titles;
    if (user && userFavAlbums) {
        product.fav = userFavAlbums.includes(product.title);
    }

    const handleCardClick = () => {
        setFetching(true);
        const sessionProduct = sessionStorage.getItem(`product_${product._id}`);

        if (sessionProduct) {
            setFetching(false);
            navigate(`/product/${product._id}`);
            return;
        }

        fetchProductsDetails([product._id!]).then((response) => {
            if (response.error) {
                console.error(response.error);
            } else {
                const image = new Image();
                image.src = response[0].images.large.url;

                image.onload = () => {
                    setFetching(false);
                    sessionStorage.setItem(`product_${product._id}`, JSON.stringify(response[0]));
                    navigate(`/product/${product._id}`);
                };

                image.onerror = () => {
                    setFetching(false);
                    console.error("Error loading image");
                };
            }
        });
    };

    const handleAddClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setAdding(true);
        await addAlbumToCart({ id: product._id, quantity: 1 })
        setAdding(false);
    };

    return (
        <div
            className={`${styles["product-card"]} ${fetching && styles.fetching} ${styles[customClass || ""]}`}
            id={product._id}
            key={product._id}
            ref={card}
            onClick={handleCardClick}
        >
            <Cover card={card} src={product.images.medium.url} fav={product.fav} releaseDate={product.releaseDate}/>

            <div className={styles.info}>
                <h1 className={`${styles.title} shadow-anim`} title={product.title}>
                    {product.title}
                </h1>
                <h2 className={`${styles.price} shadow-anim`}>
                    {discountPrice || product.price}
                    {discountPrice && <span className={styles.discount}>/{product.price}</span>}
                    {' PLN'}
                </h2>
            </div>

            <button
                className={`${styles["btn-add-to-cart"]} shadow-anim`}
                disabled={product.quantity === 0 || adding}
                onClick={handleAddClick}
            >
                {product.quantity ? t("addToCart") : t("soldOut")}
            </button>


            <SoldOutBadge t={t} quantity={product.quantity} />
            <DiscountBadge discount={product.discount} />
        </div>
    );
};
