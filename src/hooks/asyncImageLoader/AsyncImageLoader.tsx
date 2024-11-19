import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import style from "./index.module.scss";

export const AsyncImageLoader: React.FC<AsyncImageLoaderProps> = ({ src, className, alt = "Product" }) => {
    const [loading, setLoading] = useState(true);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoading(false);
        img.onerror = () => setLoading(false);

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src]);

    useGSAP(() => {
        if (loading && placeholderRef.current) {
            const tl = gsap.timeline({ repeat: -1, yoyo: true });
            tl.fromTo(placeholderRef.current, { opacity: 0.5 }, { opacity: 1, duration: 0.5 });

            return () => tl.kill();
            
        }
    }, [loading]);

    if (loading) {
        return (
            <div ref={placeholderRef} className={style.placeholder}>
                <span style={{ color: "var(--text-color)" }}>Loading...</span>
            </div>
        );
    }

    return <img src={src} className={className} alt={alt} loading="lazy" />;
};

interface AsyncImageLoaderProps {
    src: string;
    className: string;
    alt?: string;
}