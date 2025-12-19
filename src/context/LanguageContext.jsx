import React, { createContext, useContext, useState, useMemo } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const value = useMemo(() => {
    const t = (key) => {
      const langPack = translations[language] || translations.en;
      return langPack[key] || translations.en[key] || key;
    };

    return {
      language,
      setLanguage,
      t,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;


