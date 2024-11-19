import { useContext, useState } from 'react'

import { loadLocalTranslations } from '../../translations/config'
import { emailValidator, passwordValidator } from './validators'

import styles from './index.module.scss'
import { signIn } from '../../services/auth/auth'
import { UserContext } from '../../context/User/User'
import { CartOperations } from '../../context/User/cartOperations'

export const SignInForm = () => {
    const { setUser, setCart } = useContext(UserContext)!

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const t = loadLocalTranslations('Auth.SignInForm')()
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        signIn(email, password).then((response) => {
            if (response.error) {
                setError(response.error)
            } else {
                setUser(response)
                CartOperations.mergeCarts(CartOperations.getLocalStorage(), response.cart).then(merged => setCart(merged))
            }
        })
    }


    return (
        <form className={styles['auth-form']} onSubmit={handleSubmit}>
            <h2 className={styles.header}>{t('header')}</h2>

            {error.length > 0 && <div className={styles['error-message']}>{error}</div>}

            <div className={styles['input-group']}>
                <label htmlFor="email">{t('email')}:</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                {email.length > 0 && !emailValidator(email) && <div className={styles['error-message']}>{t('emailError')}</div>}
            </div>

            <div className={styles['input-group']}>
                <label htmlFor="password">{t('password')}:</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                {password.length > 0 && <div className={styles['error-message']}>{passwordValidator(password)}</div>}
            </div>

            <button type="submit" className={styles['submit-button']}>{t('btnSubmit')}</button>
        </form>
    )
}