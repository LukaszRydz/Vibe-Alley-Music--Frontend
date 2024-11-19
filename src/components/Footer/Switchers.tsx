import { useEffect, useState } from 'react';

import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaSun } from '@react-icons/all-files/fa/FaSun';

import { BsCircleSquare } from "@react-icons/all-files/bs/BsCircleSquare";

import styles from './Footer.module.scss';

export const Switchers = () => {
    const [theme, setTheme] = useState<string | null>();
    const [animations, setAnimations] = useState<string>('');

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'light');
        setAnimations(localStorage.getItem('animations') || 'on');
    }, []);

    const changeTheme = () => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    }

    const changeAnimations = () => {
        if (animations === 'off') {
            document.documentElement.setAttribute('animations', 'on');
            localStorage.setItem('animations', 'on');
            setAnimations('on');
        } else {
            document.documentElement.setAttribute('animations', 'off');
            localStorage.setItem('animations', 'off');
            setAnimations('off');
        }
        window.location.reload();
    }

    return (
        <div className={styles["switcher-wrapper"]}>
            <button className={`${styles.switcher}`} onClick={changeAnimations}>
                <BsCircleSquare className={`${styles.icon} ${animations === 'off' ? styles['icon-off'] : ''}`} />
            </button>
            
            <button className={`${styles.switcher}`} onClick={changeTheme}>
                {/* {theme === 'light' ? <FaMoon className={styles.icon}/> : <FaSun className={styles.icon} />} */}
            </button>
        </div>
    )
}