import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import styles from './Navbar.module.scss'

export const QueryInput: React.FC = () => {
    const [query, setQuery] = useState('')
    const location = useLocation()  
    const navigate = useNavigate()

    const search = () => {
        if (query.trim()) {
            navigate(`/catalog?inputQuery=${encodeURIComponent(query)}`)
        }
    }

    if (location.pathname.includes('catalog')) return null

    return (
        <div className={styles['query-input']}>
            <FaSearch className={styles.icon} onClick={search} />
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && search()}
                value={query}
            />
        </div>
    )
}
