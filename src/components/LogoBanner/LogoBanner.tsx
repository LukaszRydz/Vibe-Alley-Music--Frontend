import styles from './LogoBanner.module.scss';

export const LogoBanner = () => {

    return (
        <div className={styles["logo-banner"]}>
            <span className={styles["logo-banner__text"]}>Vibe Alley Music, the best music in town!</span>
            <span className={styles["logo-banner__text"]}>Vibe Alley Music, the best music in town!</span>
            <span className={styles["logo-banner__text"]}>Vibe Alley Music, the best music in town!</span>
            <span className={styles["logo-banner__text"]}>Vibe Alley Music, the best music in town!</span>
        </div>
    );
}