import { useEffect, useState } from "react";
import { passwordValidator } from "../Auth/validators";
import styles from "./SettingsPageView.module.scss";
import { changePassword } from "../../services/auth/auth";

export const ChangePasswordForm = ({ setChangePassOpened }: { setChangePassOpened: (val: boolean) => void }) => {
    const [error, setError] = useState("");
    const [newPassword, setNewPassword] = useState({
        value: "",
        error: "",
    });
    const [confirmPassword, setConfirmPassword] = useState(
        {
            value: "",
            error: "",
        }
    );


    useEffect(() => {
        const error = passwordValidator(newPassword.value);
        if (error) {
            setNewPassword({ ...newPassword, error });
        } else {
            setNewPassword({ ...newPassword, error: "" });
        }

        if (newPassword.value !== confirmPassword.value) {
            setConfirmPassword({ ...confirmPassword, error: "Passwords do not match" });
        } else {
            setConfirmPassword({ ...confirmPassword, error: "" });
        }
    }, [newPassword.value, confirmPassword.value]);

    const onSend = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await changePassword(newPassword.value, confirmPassword.value);
        if (res.error) {
            setError(res.error);
        } else {
            setError("");
            setChangePassOpened(false);
        }
    }

    return (
        <>
            <form className={styles["change-password-from"]} onSubmit={onSend}>
                <h2>Change Password</h2>
                {error.length > 0 && <span className={styles.error}>{error}</span>}
                <div className={styles["input-wrapper"]}>
                    <label htmlFor="new-password">New Password</label>
                    {newPassword.value.length > 0 && <span className={styles.error}>{newPassword.error}</span>}
                    <input type="password" id="new-password" onChange={(e) => setNewPassword({ value: e.target.value, error: "" })} />
                </div>

                <div className={styles["input-wrapper"]}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    {confirmPassword.value.length > 0 && <span className={styles.error}>{confirmPassword.error}</span>}
                    <input type="password" id="confirm-password" onChange={(e) => setConfirmPassword({ value: e.target.value, error: "" })} />
                </div>

                <button className={styles.button} disabled={newPassword.error.length > 0 || confirmPassword.error.length > 0}>
                    Change Password
                </button>
            </form>

            <a className={styles["back-link"]} onClick={() => setChangePassOpened(false)}>
                Back
            </a>
        </>
    );
};
