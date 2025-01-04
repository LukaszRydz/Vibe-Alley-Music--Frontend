import { useNavigate } from 'react-router-dom';
import styles from './ProductList.module.scss'

export const ShowMoreBtn = ({ genre } : { genre: string }) => {
    const navigate = useNavigate();


    const handleClick = () => navigate(`/catalog?1&genres%5B%5D=${genre}`)
    
    return (
        <button className={styles["show-more-btn"]} onClick={handleClick}>Show more {'>'}</button>
    );
}