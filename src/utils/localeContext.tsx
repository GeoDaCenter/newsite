import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from '@docusaurus/router';

interface LocaleContextType {
  currentLocale: string;
  setCurrentLocale: (locale: string) => void;
  locales: Array<{ code: string; label: string }>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const location = useLocation();
  const [currentLocale, setCurrentLocaleState] = useState('en');

  const locales = [
    { code: 'en', label: 'English' },
    { code: 'zh-Hans', label: '中文' },
    { code: 'es', label: 'Español' }
  ];

  // Update locale based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/zh-Hans/')) {
      setCurrentLocaleState('zh-Hans');
    } else if (path.includes('/es/')) {
      setCurrentLocaleState('es');
    } else {
      setCurrentLocaleState('en');
    }
  }, [location.pathname]);

  // Listen for language change events from the standalone switcher
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLocaleState(event.detail.locale);
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, []);

  const setCurrentLocale = (locale: string) => {
    setCurrentLocaleState(locale);
  };

  return (
    <LocaleContext.Provider value={{ currentLocale, setCurrentLocale, locales }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}; 