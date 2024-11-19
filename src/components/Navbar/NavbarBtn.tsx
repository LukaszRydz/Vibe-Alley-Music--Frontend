// Hooks
import { useRef } from "react"
import { useGSAP } from '@gsap/react';

// Animations
import { navbarBtnAnimation } from "../../animations/Navbar";

// Styles
import styles from './Navbar.module.scss'

export const NavbarBtn: React.FC<INavbarBtnProps> = ({ icon, text, clickEvent, isSearchOpen, children }) => {
    const btn = useRef<HTMLLIElement>(null);

    useGSAP(() => {
        if (btn.current) {
            const cleanup = navbarBtnAnimation(btn.current)
            return () => cleanup && cleanup()
        }
    }, [])

    return (
        <li ref={btn} className={`${styles['nav-btn']} ${isSearchOpen ? styles['search-opened'] : ''}`} onClick={clickEvent}>
            {icon}
            {children}
            <span className={styles['nav-btn-text']}>{text}</span>
        </li>
    )
}


interface INavbarBtnProps {
    icon: JSX.Element;
    text: string;
    clickEvent?: () => void;
    isSearchOpen?: boolean;
    children?: React.ReactNode;
}