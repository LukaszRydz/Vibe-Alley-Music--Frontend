import { useTranslation } from "react-i18next";

import styles from "./index.module.scss";

export const InputSearch = ({
    setInputQuery,
    inputQuery,
    applyFilters,
}: {
    setInputQuery: (value: string) => void;
    applyFilters: () => void;
    inputQuery: string;
}) => {
    const { t } = useTranslation();
    const ref = (key: string) => t(`Catalog.Filter.InputSearch.${key}`);

    return (
        <div className={styles["input-search-wrapper"]}>
            <h1 className="search-header">{t(ref("searchHeader"))}</h1>
            <input
                className={styles["input-search"]}
                type="text"
                placeholder={t(ref("searchPlaceholder"))}
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyUp={(e) => {
                    e.key === "Enter" && applyFilters();
                }}
            />
        </div>
    );
};
