import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const Logo = () => {
    const navigate = useNavigate()
    return <h1 className={styles.logo} onClick={() => navigate('/')}>VAM</h1>
}