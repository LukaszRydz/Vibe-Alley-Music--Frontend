
import styles from './index.module.scss';

export const Genres = ({ setGenres, genres }: { setGenres: (value: string[]) => void, genres: string[] }) => {
    const genresList = [
        "rap",
        "trap",
        "hip-hop",
        "R&B",
        "pop",
        "soul",
        "rock",
        "jazz",
        "blues",
        "reggae",
        "swing",
        "country",
        "metal",
        "classical",
        "electronic",
        "funk",
        "disco",
        "latin",
        "techno",
        "indie",
        "dance",
        "alternative"
    ]

    const toggleGenre = (genre: string) => {
        if (genres.includes(genre)) {
            setGenres(genres.filter((g) => g !== genre.toLowerCase()));
        } else {
            setGenres([...genres, genre.toLowerCase()]);
        }
    }

    

    return (
        <div className={styles["genres-wrapper"]}>
            <h1 className={styles["genres-header"]}>Genres:</h1>
            <div className={styles.genres}>
                {genresList.map((genre, index) => (
                    <button key={index} className={styles.genre + ` ${genres.includes(genre.toLowerCase()) ? styles.active : ''}`} onClick={() => toggleGenre(genre)}>
                        <span>{genre}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}