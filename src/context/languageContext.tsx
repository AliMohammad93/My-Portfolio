import React, {createContext, useState} from 'react';

interface GlobalProviderProps {
    children: React.ReactNode;
}

type Language = "en" | "de";

interface LanguageContextType {
    language: Language;
    setLanguage: (value: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {
    },
});

export const LanguageProvider: React.FC<GlobalProviderProps> = ({children}) => {
    const [language, setLanguage] = useState<Language>('en');

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};
