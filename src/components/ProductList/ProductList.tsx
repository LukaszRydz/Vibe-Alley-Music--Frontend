import { useEffect, useState } from "react";

import { ProductCard } from "../ProductCard/ProductCard";

import { IProductInfo } from "../../interfaces/interfaces";
import { fetchProductsInfo } from "../../services/shop/products";
import { ShowMoreBtn } from "./ShowMoreBtn";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import styles from './ProductList.module.scss'

export const ProductList = ({ genre, title } : { genre: string, title: string}) => {
    const [products, setProducts] = useState<IProductInfo[]>([]);
    useEffect(() => {
        const sessionStorageAlbums = sessionStorage.getItem(`albums_homePage_${genre}`)
        if (sessionStorageAlbums && JSON.parse(sessionStorageAlbums).length > 0) setProducts(JSON.parse(sessionStorageAlbums))
        else {
            fetchProductList().then((products) => {
                if (products) {
                    sessionStorage.setItem(`albums_homePage_${genre}`, JSON.stringify(products))
                    setProducts(products)
                }
            });
        }
    }, [])

    const fetchProductList = async (): Promise<IProductInfo[]> => {
        try {
            const response = await fetchProductsInfo({ genres: [genre] }, 1, 5);
            if (response.error) {
                console.error(response.error);
                return [];
            }

            const currProductId = window.location.pathname.split("/").pop();
            return response.products.filter((product: IProductInfo) => product._id !== currProductId);
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    };

    if (!products.length) {
        return null;
    }

    return (
        <div className={styles["products-wrapper"]}>
            <div className={styles['upper-section']}>
                <h1 className={styles.header}>{title}:</h1>
                <ShowMoreBtn genre={genre}/>
            </div>
            
            
            <Swiper
                spaceBetween={0}
                modules={[Pagination]}
                className={styles.mySwiper}
                pagination={true}
                initialSlide={0}
                breakpoints={{
                    300: { slidesPerView: 2 },
                    480: { slidesPerView: 3 },
                    660: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },
                    1140: { slidesPerView: 4 },
                    1512: { slidesPerView: 5 },
                }}
            >
                {products && products.map((product) => (
                    <SwiperSlide key={product._id}>
                        <ProductCard product={product} key={product._id} customClass="products-list-style" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
