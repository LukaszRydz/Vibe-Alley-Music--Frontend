import styles from './SettingsPageView.module.scss'

export const ChangePasswordBtn = ({ setChangePassOpened }: { setChangePassOpened: (value: boolean) => void }) => {
    return (
        <button className={styles.button} onClick={() => setChangePassOpened(true)}>Change Password</button>
    )
}