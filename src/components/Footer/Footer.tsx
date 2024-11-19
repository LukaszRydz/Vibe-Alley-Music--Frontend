import { useLocation } from 'react-router-dom'

import { Switchers } from './Switchers'
import { FooterMenu } from './FooterMenu'

import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
    const location = useLocation()
    
    return (
        <div className={`${styles['footer-container']} ${location.pathname.includes('/product') && styles["product-card-footer"]}`}>
            <hr className={styles.hr} />
            <FooterMenu location={location.pathname}/>
            <footer className={`${styles.footer} `}>
                <p>© {`${new Date().getFullYear()} Vibe Alley Music`}</p>
                <Switchers />
            </footer>
        </div>
    )
}