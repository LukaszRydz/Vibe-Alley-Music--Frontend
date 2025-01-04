import { useEffect, useState } from "react";
import { IFilters, IProductInfo } from "../../../interfaces/interfaces";
import { fetchProductsInfo } from "../../../services/shop/products";
import { Slider } from "./Slider";
import { BannerElement } from "./BannerElement";

import { SwiperSlide } from "swiper/react";
import { LogoBanner } from "../../LogoBanner/LogoBanner";

import { FaSpotify } from "react-icons/fa";

import styles from "./Banner.module.scss";

export const Banner = ({ filters, elements, header, sessionPrefix, specialType }: { filters: IFilters; elements?: 4 | number, header: string, sessionPrefix: string, specialType?: 'spotify' }) => {
    const [products, setProducts] = useState<IProductInfo[]>([]);
    useEffect(() => {
        const sessionProducts = sessionStorage.getItem(`${sessionPrefix}_banner_products`);
        if (sessionProducts && JSON.parse(sessionProducts).length > 0) setProducts(JSON.parse(sessionProducts));
        else {
            fetchProductsInfo(filters, 1, elements)
                .then((res) => {
                    sessionStorage.setItem(`${sessionPrefix}banner_products`, JSON.stringify(res.products || []));
                    setProducts(res.products);
                })
                .catch((err) => console.error(err));
        }
    }, []);

    if (!products || products.length === 0) return null

    return (
        <section className={styles.banner}>
            <h1 className={styles.header}>
                {specialType === 'spotify' && <FaSpotify className={styles.icon} />}
                {header}
            </h1>
            <Slider>
                {products &&
                    products.map((product) => (
                        <SwiperSlide key={product._id}>
                            <BannerElement product={product} />
                        </SwiperSlide>
                    ))}
            </Slider>
            <LogoBanner />
        </section>
    );
};
