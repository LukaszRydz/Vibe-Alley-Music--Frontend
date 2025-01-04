import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import { fetchProductsInfo } from "../../services/shop/products";
import { IProductInfo } from "../../interfaces/interfaces";

import { ProductCard } from "../ProductCard/ProductCard";

import styles from "./ProductPageView.module.scss";
import "./SimilarProducts.scss";

export const SimilarProducts = ({ genres }: { genres: string[] }) => {
    const [products, setProducts] = useState<IProductInfo[]>([]);

    useEffect(() => {
        fetchProductsInfo({ genres: genres }, 1).then((response) => {
            if (response.error) {
                console.error(response.error);
                return;
            }

            const currProductId = window.location.pathname.split("/").pop();
            response.products = response.products.filter((product: IProductInfo) => product._id !== currProductId);

            setProducts(response.products);
        });
    }, [genres]);

    return (
        <div className="similar-wrapper">
            <h1 className={styles.header}>Similar:</h1>
            <Swiper
                spaceBetween={15}
                scrollbar={{ draggable: true }}
                modules={
                    [
                        Scrollbar, 
                        // Mousewheel
                    ]
                }
                // mousewheel={true}
                className="mySwiper"
                // loop={true}
                initialSlide={1}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 3,
                    },
                    660: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1140: {
                        slidesPerView: 4,
                    },
                    1512: {
                        slidesPerView: 5,
                    },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product._id}>
                        <ProductCard product={product} key={product._id} customClass="similar-product-style" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
