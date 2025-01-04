import i18n from 'i18next';

import { initReactI18next, useTranslation } from 'react-i18next';

// Languages packs
import plTranslation from './locales/pl/translation.json'
import enTranslation from './locales/en/translation.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            pl: { translation: plTranslation }
        },
        lng: navigator.language.split(/[-_]/)[0] === 'pl' ? 'pl' : 'en',
        interpolation: {
            escapeValue: false
        }
    })

export const loadLocalTranslations = (ref: string) => {
    return () => {
        const { t } = useTranslation();
        
        const prefixedT = (key: string) => t(`${ref}.${key}`);
    
        return prefixedT;
    };
};

export default i18n;