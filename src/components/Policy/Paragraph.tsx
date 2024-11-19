import styles from './Policy.module.scss'

export const Paragraph = ({ heading, children } : { heading: string, children: React.ReactNode }) => {
    return (
        <div className={styles.paragraph}>
            <h2 className={styles.heading}>
                <span className={styles['paragraph-symbol']}>§</span>
                {' '}
                {heading}
            </h2>
            <div className={styles.content}>
                {children}
            </div>

            <hr className={styles.separator}/>
        </div>
    )
}