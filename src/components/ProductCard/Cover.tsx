import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import { AsyncImageLoader } from '../../hooks/asyncImageLoader/AsyncImageLoader'

import { coverBackgroundAnimation } from '../../animations/ProductCard/ProductCard';
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";

import styles from './ProductCard.module.scss';
import { loadLocalTranslations } from '../../translations/config';

export const Cover = ({ card, src, fav }: { card: React.MutableRefObject<HTMLDivElement | null>, src: string, fav?: boolean }) => {
    const image = AsyncImageLoader({ src: src, className: styles.cover })
    const coverWrapperRef = useRef<HTMLDivElement>(null);
    const t = loadLocalTranslations('ProductCard')()

    useGSAP(() => {
        if (card.current && coverWrapperRef.current && coverWrapperRef.current.querySelector('img')) {
            coverWrapperRef.current.style.setProperty(
                '--background-image',
                `url(${src})`,
            )

            const cleanup = coverBackgroundAnimation(coverWrapperRef.current!, card.current!)
            return () => cleanup && cleanup()
        }
    }, [image])
    
    return (
        <div ref={coverWrapperRef} className={styles['cover-wrapper']}>
            {image}
            {fav && <div className={`${styles.fav} badges_anim_bottom`}><FaSpotify className={styles.icon}/>{t('fav')}</div>}
        </div>
    )
}