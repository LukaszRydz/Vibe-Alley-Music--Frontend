import { useContext, useState } from 'react'

import { loadLocalTranslations } from '../../translations/config'
import { emailValidator, emailValidator_withError } from './validators'

import { getOneTimeLoginKey, oneTimeLogin } from '../../services/auth/auth'
import { CartOperations } from '../../context/User/cartOperations'

import { UserContext } from '../../context/User/User'

import styles from './index.module.scss'

export const ForgotPasswordForm = () => {
    const { setUser, setCart } = useContext(UserContext)!
    
    const [email, setEmail] = useState('')
    const [key, setKey] = useState('')
    const [keyInputOpened, setKeyInputOpened] = useState(false)
    const [fetching, setFetching] = useState(false)
    const [error, setError] = useState('')

    const t = loadLocalTranslations('Auth.ForgotPasswordForm')()
    
    const getKey = (e: React.FormEvent) => {
        e.preventDefault()
        setFetching(true)
        getOneTimeLoginKey(email).then((response) => {
            if (response.error) {
                setError(response.error)
                console.log(response.error)
            } else {
                setEmail('')
                setKeyInputOpened(true)
                error.length > 0 && setError('')
            }
            setFetching(false)
        })     
    }

    const login = (e: React.FormEvent) => {
        e.preventDefault()
        setFetching(true)
        oneTimeLogin(email, key).then((response) => {
            if (response.error) {
                setError(response.error)
            } else {
                setUser(response)
                CartOperations.mergeCarts(CartOperations.getLocalStorage(), response.cart).then(merged => setCart(merged))
            }
            setFetching(false)
        })
    }

    const keyInput = () => {
        return (
            <div className={styles['input-group']}>
                <label htmlFor="email">{t('key')}:</label>
                <input id="key" name="key" onChange={(e) => setKey(e.target.value)} />
                {key.length < 8 && <div className={styles['error-message']}>{t('keyError')}</div>}
            </div>
        )
    }

    return (
        <form className={styles['auth-form']} onSubmit={keyInputOpened ? login : getKey}>
            <h2 className={styles.header}>{t('header')}</h2>

            {error.length > 0 && <div className={styles['error-message']}>{error}</div>}

            <div className={styles['input-group']}>
                <label htmlFor="email">{t('email')}:</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                {email.length > 0 && !emailValidator(email) && <div className={styles['error-message']}>{t('emailError')}</div>}
                {
                    !keyInputOpened &&    
                    <a className={styles['shop-key-input__btn']} onClick={() => setKeyInputOpened(true)}>{t('iHaveKey')}</a>
                }
            </div>
            
            {keyInputOpened && keyInput()}

            <button type="submit" className={styles['submit-button']} disabled={emailValidator_withError(email).length !== 0 || (keyInputOpened && key.length < 8) || fetching}>
                {keyInputOpened ? t('loginBtn') : t('getKeyBtn')}
            </button>
        </form>
    )
}