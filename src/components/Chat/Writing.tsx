import { FaRobot } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

import styles from './Chat.module.scss';

export const Writing = () => {
    const writingRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const dots = writingRef.current?.querySelectorAll(`.${styles.dot}`);

        if (dots) {
            const tl = gsap.timeline({repeat: -1});

            tl.to(dots, {
                marginBottom: '8px',
                duration: 0.4,
                stagger: 0.2,
            }).to(dots, {
                marginBottom: '0px',
                duration: 0.5,
                stagger: 0.2,
            }, 0.4)
        }

    })
    
    return (
        <div className={`${styles['message-wrapper']} ${styles.bot}`}>
            <FaRobot className={styles.avatar}/>
            <div className={`${styles.message} ${styles['message_bot']} ${styles['message_writing']}`}>
                <div className={styles['writing']} ref={writingRef}>
                    <span className={styles['dot']}></span>
                    <span className={styles['dot']}></span>
                    <span className={styles['dot']}></span>
                </div>
            </div>
        </div>
    );
}