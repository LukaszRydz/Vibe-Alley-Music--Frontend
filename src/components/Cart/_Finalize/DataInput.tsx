import { useState } from 'react';
import styles from './Finalize.module.scss'

export const DataInput = ({ label, setValue, validator } : { label: string, setValue: React.Dispatch<React.SetStateAction<{val: string; err: string}>>, validator: (value: string) => string }) => {
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setError(validator(value));
        setValue({ val: value, err: validator(value) });
    }
    
    return (
        <div className={styles['input-wrapper']}>
            <label className={styles.label}>{label}</label>
            {error && error.length > 0 && <span className={styles.error}>{error}</span>}
            <input className={styles.input} type='text' onChange={handleChange} />
        </div>
    )
}