import { useGSAP } from '@gsap/react';
import styles from './ResponseHandler.module.scss'
import gsap from "gsap";
import { useRef } from 'react';

export const Error = (props: ErrorProps) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(ref.current, {
            opacity: 0,
            y: -50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.out",
        })
        .to(ref.current, {
            opacity: 0,
            y: -50,
            duration: 0.5,
            ease: "power1.in",
            delay: 2,
        }).eventCallback('onComplete', () => {
            props.setError(null);
        });

        ref.current?.addEventListener('mouseover', () => {
            tl.pause();
        });

        ref.current?.addEventListener('mouseout', () => {
            tl.play();
        });

        return () => {
            ref.current?.removeEventListener('mouseover', () => {
                tl.pause();
            });
    
            ref.current?.removeEventListener('mouseout', () => {
                tl.play();
            });

            tl.kill();
        }
    })
    
    return (
        <div className={styles.error} ref={ref}>
            <h1 className={styles.code}>
                {props.code}
            </h1>
            
            {props.error && (
                <p className={styles.message}>
                    {`Message: ${props.error}`}
                </p>
            )}
        </div>
    )
}

export interface ErrorProps {
    code?: string;
    status?: number;
    error?: string;
    setError: React.Dispatch<React.SetStateAction<ErrorProps | null>>;
}