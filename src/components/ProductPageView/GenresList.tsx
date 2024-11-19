import { useNavigate } from 'react-router-dom';
import styles from './GenresList.module.scss'

export const GenresList = ({ genres }: { genres: string[] }) => {
    const navigate = useNavigate();
    
    const click = (genre: string) => navigate(`/catalog?1&genres%5B%5D=${genre}`)

    return (
        <div className={styles["genres-list"]}>
            <h1 className={styles.header}>Lista gatunków:</h1>
            <div className={styles["button-container"]}>
                {genres.map((genre) => (
                    <button key={genre} className={styles["genre-button"]} onClick={() => click(genre)}>
                        {genre}
                    </button>
                ))}
            </div>
        </div>
    );
};