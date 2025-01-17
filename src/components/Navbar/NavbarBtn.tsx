// Hooks
import { useContext, useRef } from "react"
import { useGSAP } from '@gsap/react';
import { AppContext } from "../../context/App";

// Animations
import { navbarBtnAnimation } from "../../animations/Navbar";

// Styles
import styles from './Navbar.module.scss'
import { UserContext } from "../../context/User/User";

export const NavbarBtn: React.FC<INavbarBtnProps> = ({ icon, text, clickEvent, isSearchOpen, children }) => {
    const { language } = useContext(AppContext)!
    const { user } = useContext(UserContext)!

    const btn = useRef<HTMLLIElement>(null);

    useGSAP(() => {
        if (btn.current) {
            const cleanup = navbarBtnAnimation(btn.current)
            return () => cleanup && cleanup()
        }
    }, [language, user])

    return (
        <li ref={btn} className={`${styles['nav-btn']} ${isSearchOpen ? styles['search-opened'] : ''}`} onClick={clickEvent}>
            {icon}
            {children}
            {text && <span className={styles['nav-btn-text']}>{text}</span>}
        </li>
    )
}


interface INavbarBtnProps {
    icon: JSX.Element;
    text?: string;
    clickEvent?: () => void;
    isSearchOpen?: boolean;
    children?: React.ReactNode;
}