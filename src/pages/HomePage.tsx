import { useEffect, useState } from "react";
import { Home } from "../components/Home/Home";

import styles from './Pages.module.scss'

export const HomePage = () => {    
    const [state, setState] = useState("")
    
    useEffect(() => {
        setInterval(() => {
            const cookies = document.cookie
            // setState as plain text
            setState(cookies)
        }, 1000)
    }, [])

    return (
        <div className={`${styles.page} ${styles.home}`}>
            <p>{state}</p>
            <Home />
        </div>
    )
}