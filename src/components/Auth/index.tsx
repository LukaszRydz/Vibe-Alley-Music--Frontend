import { useState } from "react";

import { loadLocalTranslations } from "../../translations/config";

import { SignInForm } from "./SignInForm";
import { RegisterForm } from "./RegisterForm";

import styles from "./index.module.scss";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

export const Auth = () => {
    const t = loadLocalTranslations("Auth")();
    const [currentForm, setCurrentForm] = useState("signIn");

    const activeTab = () => {
        switch (currentForm) {
            case "signIn":
                return <SignInForm />;
            case "register":
                return <RegisterForm setCurrentForm={setCurrentForm}/>;
            case "forgotPassword":
                return <ForgotPasswordForm />;
            default:
                return <SignInForm />;
        }
    }

    return (
        <div className={styles.auth}>
            {activeTab()}
            <a
                className={styles["auth-link"]}
                onClick={() => {
                    setCurrentForm(currentForm === "signIn" ? "register" : "signIn");
                }}
            >
                {currentForm === "signIn" ? t("signUp") : t("signIn")}
            </a>
            {currentForm !== 'forgotPassword' && <a className={styles["auth-link"]} onClick={() => setCurrentForm("forgotPassword")}>
                {t("forgotPassword")}
            </a>}
        </div>
    );
};
