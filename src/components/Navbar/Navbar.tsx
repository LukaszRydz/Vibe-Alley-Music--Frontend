
import { Logo } from './Logo'
import { NavbarBtn } from './NavbarBtn'

// Translations
import { loadLocalTranslations } from '../../translations/config';

// Icons
import { FaShoppingCart, FaUser, FaUserCog, FaSearch } from 'react-icons/fa';

import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/User/User';
import { CartCounter } from './CartCounter';
import { Searcher } from './Searcher';

// Styles
import styles from './Navbar.module.scss'

export const Navbar: React.FC = () => {
    const { user } = useContext(UserContext)!
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const t = loadLocalTranslations('Navbar')()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

    const renderSearcher = () => {
        if (pathname.includes('catalog')) {
            return null;
        }
        
        if (isSearchOpen) {
            return <Searcher toggleSearch={toggleSearch}/>
        } else {
            return <NavbarBtn icon={<FaSearch className={styles.icon}/>} text={t('btnSearch')} clickEvent={toggleSearch}/>
        }
    }

    return (
        <div className={`${styles.navbar} ${pathname.includes('product') && styles['navbar-product-page']}`}>
            <Logo />

            <ul className={styles['nav-btn-wrapper']}>
                {renderSearcher()}
                
                <NavbarBtn icon={<FaShoppingCart className={styles.icon}/>} text={t('btnCart')} isSearchOpen={isSearchOpen} children={<CartCounter />} clickEvent={() => navigate('/cart')}/>
                {
                    user ? <NavbarBtn icon={<FaUserCog className={styles.icon}/>} isSearchOpen={isSearchOpen} clickEvent={() => navigate('/settings')}/> 
                    : 
                    !user && <NavbarBtn icon={<FaUser className={styles.icon}/>} text={t('btnLogin')} isSearchOpen={isSearchOpen} clickEvent={() => navigate('/auth')}/>
                }
            </ul>

            {!window.location.href.includes('catalog') && <button className={styles['catalog-btn']} onClick={() => navigate('/catalog')}>{t('btnCatalog')} {'>'}</button>}
        </div>
    )
}