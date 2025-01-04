import { useState, useContext, useEffect } from 'react';

import { BsCircleSquare } from "react-icons/bs";

import i18n from 'i18next';

import styles from './Footer.module.scss';
import { AppContext } from '../../context/App';

export const Switchers = () => {
    // const [theme, setTheme] = useState<string | null>();
    const [animations, setAnimations] = useState<string>('');
    const [lang, setLang] = useState<string>(i18n.language);
    const { setLanguage } = useContext(AppContext)!

    useEffect(() => {
        setAnimations(localStorage.getItem('animations') || 'on');
    }, []);

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

    const changeLanguage = () => {
        const changed = lang === 'en' ? 'pl' : 'en';
        i18n.changeLanguage(changed)
        setLang(changed)
        setLanguage(changed)
    }

    return (
        <div className={styles["switcher-wrapper"]}>
            <button className={`${styles.switcher}`} onClick={changeAnimations} title='On/off animations'>
                <BsCircleSquare className={`${styles.icon} ${animations === 'off' ? styles['icon-off'] : ''}`} />
            </button>

            <button className={`${styles.switcher} ${styles.language}`} onClick={changeLanguage}>
                {lang.toUpperCase()}
            </button>
        </div>
    )
}