import { useContext, useState } from 'react'
import { UserContext } from '../../context/User/User'
import { useNavigate } from 'react-router-dom'

import { LogoutBtn } from './LogoutBtn'
import { SpotifyBtn } from './SpotifyBtn'
import { ChangePasswordBtn } from './ChangePasswordBtn'

import styles from './SettingsPageView.module.scss'
import { ChangePasswordForm } from './ChangePasswordForm'

export const SettingsPageView = () => {
    const { user, logOut } = useContext(UserContext)!
    const navigate = useNavigate();

    const [changePassOpened, setChangePassOpened] = useState(false)

    if (!user) {
        navigate('/auth')
        return null
    }

    const render = () => {
        if (changePassOpened) {
            return <ChangePasswordForm setChangePassOpened={setChangePassOpened}/>
        } else {
            return (
                <>
                    <span className='todo'>Add the ability to check order history.</span>
                    <ChangePasswordBtn setChangePassOpened={setChangePassOpened}/>
                    <SpotifyBtn />
                    <LogoutBtn logOut={logOut} />
                </>
            )
        }
    }

    return (
        <div className={styles['settings-page']}>
            {render()}
        </div>
    )
}