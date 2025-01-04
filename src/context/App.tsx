// Hooks
import { createContext, useState } from 'react';
import i18next from 'i18next';

export const AppContext = createContext<{
    language: string,
    setLanguage: (lang: string) => void 
} | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState(i18next.language)
    
    return (
        <AppContext.Provider value={{ language, setLanguage }}>
            {children}
        </AppContext.Provider>
    )
}

export interface IContextValues {
    language: string;
    setLanguage: (lang: string) => void;
}