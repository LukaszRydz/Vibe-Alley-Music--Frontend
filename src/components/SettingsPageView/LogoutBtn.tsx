import { useNavigate } from "react-router-dom"

import styles from './SettingsPageView.module.scss'

export const LogoutBtn = ({logOut} : {logOut: () => void}) => {
    const navigate = useNavigate()
    
    const logOutBtn = () => {
        logOut()
        navigate('/')
    }

    return <button onClick={logOutBtn} className={`${styles['logout-btn']}`}>Log Out</button>
}