import { useNavigate } from "react-router-dom";
import styles from "./FooterMenu.module.scss";

export const FooterMenu = ({location} : {location: string}) => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <div className={`${styles["footer-menu"]} ${location.includes('/product') && styles["product-card-footer"]}`}>
            <ul className={styles["footer-menu__list"]}>
                <li className={styles["footer-menu__item"]}>
                    <a href="#" onClick={() => handleNavigate("/")}>
                        Strona główna
                    </a>
                </li>
                <li className={styles["footer-menu__item"]}>
                    <a href="#" onClick={() => handleNavigate("/catalog")}>Produkty</a>
                </li>
                <li className={styles["footer-menu__item"]}>
                    <a href="#" onClick={() => handleNavigate("/contact")}>Kontakt</a>
                </li>
                <li className={styles["footer-menu__item"]}>
                    <a href="#" onClick={() => handleNavigate("/policy")}>
                        Polityka
                    </a>
                </li>
            </ul>
        </div>
    );
};
