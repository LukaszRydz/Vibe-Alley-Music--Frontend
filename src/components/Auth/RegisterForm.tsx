import { useState } from "react";

import { loadLocalTranslations } from "../../translations/config";
import { emailValidator, passwordValidator } from "./validators";

import { register } from "../../services/auth/auth";

import styles from "./index.module.scss";

export const RegisterForm = ({ setCurrentForm } : { setCurrentForm: (x: string) => void}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const t = loadLocalTranslations("Auth.RegisterForm")();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register(email, password, confirmPassword).then((response) => {
            if (response.error) {
                setError(response.error);
                console.log(response.error);
            } else setCurrentForm("signIn");
        });
    };

    return (
        <form className={styles["auth-form"]} onSubmit={handleSubmit}>
            <h2 className={styles.header}>{t("header")}</h2>

            {error.length > 0 && <div className={styles["error-message"]}>{error}</div>}

            <div className={styles["input-group"]}>
                <label htmlFor="email">{t("email")}:</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                {email.length > 0 && !emailValidator(email) && <div className={styles["error-message"]}>{t("emailError")}</div>}
            </div>

            <div className={styles["input-group"]}>
                <label htmlFor="password">{t("password")}:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                />
                {password.length > 0 && <div className={styles["error-message"]}>{`${passwordValidator(password)}`}</div>}
            </div>

            <div className={styles["input-group"]}>
                <label htmlFor="confirm-password">{t("confirmPassword")}:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                />
                {confirmPassword.length > 0 && confirmPassword !== password && (
                    <div className={styles["error-message"]}>{t("confirmPasswordError")}</div>
                )}
            </div>

            <button type="submit" className={styles["submit-button"]}>
                {t("btnSubmit")}
            </button>
        </form>
    );
};
