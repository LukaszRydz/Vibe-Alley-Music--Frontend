import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User/User";
import { discountCalc } from "../../utils/helpers";

import styles from "./ProductPageView.module.scss";

export const Landing = ({
    url,
    title,
    price,
    artists,
    discount,
    quantity,
    _id,
    releaseDate,
}: {
    url: string;
    title: string;
    price: number;
    artists: string[];
    discount: number;
    quantity: number;
    _id: string;
    releaseDate: string;
}) => {
    const [fetching, setFetching] = useState(false);
    const { addAlbumToCart } = useContext(UserContext)!;
    const discountPrice = discountCalc(discount, price);
    const navigate = useNavigate();

    const generateArtistElement = (artist: string, index: number) => {
        return (
            <span
                key={(Math.random() + 1).toString(36).substring(7)}
                className={styles.artist}
                onClick={() => navigate(`/catalog?page=1&inputQuery=${artist}`, { replace: true })}
            >
                {artist}
                {index !== artists.length - 1 && ", "}
            </span>
        );
    };

    const buyNow = async () => {
        setFetching(true);
        await addAlbumToCart({ id: _id, quantity: 1 });
        navigate("/cart");
    };

    return (
        <div className={styles["landing"]}>
            <div className={styles["cover-wrapper"]}>
                <img src={url} alt="Cover image" className={styles.cover} />
            </div>

            <div className={styles["info-wrapper"]}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.price}>
                    {discountPrice || price.toFixed(2)} PLN
                    {discount > 0 && <span className={styles.discount}>FROM {price.toFixed(2)} PLN</span>}
                </p>
                <p className={styles.artists}>{artists.map((artist, index) => generateArtistElement(artist, index))}</p>
                <p className={styles.released}>{`Released: ${releaseDate.split('T')[0]}`}</p>
                <div className={styles.controls}>
                    <button 
                    className={styles.button} 
                    disabled={quantity === 0|| fetching} 
                    onClick={buyNow}>
                        Buy Now
                    </button>

                    <button
                        className={styles.button}
                        disabled={quantity === 0 || fetching}
                        onClick={async () => {
                            setFetching(true);
                            await addAlbumToCart({ id: _id, quantity: 1 })
                            setFetching(false);
                        }}
                    >
                        To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
