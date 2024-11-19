
import { loadLocalTranslations } from '../../../translations/config';
import { Option } from './__Option';

import styles from './index.module.scss';

export const Options = ({ options, setOptions }: OptionsProps) => {
    const t = loadLocalTranslations('Catalog.Filter.Options')();

    const handleChange = (key: keyof typeof options) => {
        setOptions({ ...options, [key]: !options[key] });
    };

    return (
        <div className={styles.options}>
            <h1 className={styles["options-header"]}>{t('header')}:</h1>
            <div className={styles["options-wrapper"]}>
                <Option
                    id="available"
                    label={t('labelAvailable')}
                    checked={options.available}
                    onChange={() => handleChange("available")}
                />
                <Option
                    id="discount"
                    label={t('labelSale')}
                    checked={options.discount}
                    onChange={() => handleChange("discount")}
                />
            </div>
        </div>
    );
};

interface OptionsProps {
    options: { available : boolean; discount: boolean };
    setOptions: (options: { available: boolean; discount: boolean }) => void;
}