import { useEffect, useRef } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import "./CustomSwiper.scss";

export const Slider = ({ children }: { children: React.ReactNode }) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sliderRef = useRef<any>(null);

    const startInterval = () => {
        stopInterval();
        intervalRef.current = setInterval(() => {
            if (sliderRef.current.swiper.isEnd) {
                sliderRef.current.swiper.slideTo(0);
            } else {
                sliderRef.current.swiper.slideNext();
            }
        }, 4500);
    };

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.addEventListener('mouseenter', stopInterval);
            sliderRef.current.addEventListener('mouseleave', startInterval);

            // Uruchomienie interwału przy pierwszym renderze
            startInterval();

            return () => {
                stopInterval();
                sliderRef.current.removeEventListener('mouseenter', stopInterval);
                sliderRef.current.removeEventListener('mouseleave', startInterval);
            };
        }
    }, []);

    const customPagination = {
        clickable: true,
        renderBullet: (index: number, className: string) =>
            `<span class="${className}">${index + 1}</span>`,
    };

    return (
        <Swiper
            ref={sliderRef}
            centeredSlides={true}
            pagination={customPagination}
            navigation={true}
            modules={[Pagination]}
            grabCursor={true}
            className="bannerSwiper"
        >
            {children}
        </Swiper>
    );
};
