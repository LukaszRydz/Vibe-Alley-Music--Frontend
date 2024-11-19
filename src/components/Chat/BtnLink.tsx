// BtnLink.tsx
import { useNavigate } from "react-router-dom";

import styles from "./BtnLink.module.scss";

export const BtnLink = ({ link } : { link: string}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const loc = window.location.host;
        if (!link) return;
        link.includes(loc) ? navigate(link.split(loc)[1], { replace: true }) : window.open(link, "_blank");
    };

    return (
        <a className={styles.link} onClick={handleClick}>
            <span className={styles.hidden}>Link</span>
            <span className={styles.hovered}>{link}</span>
        </a>
    );
};
