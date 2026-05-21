'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import en from '@/translations/en';
import hi from '@/translations/hi';
import gu from '@/translations/gu';
import kn from '@/translations/kn';
import te from '@/translations/te';
import ta from '@/translations/ta';

export type Language = 'en' | 'hi' | 'gu' | 'kn' | 'te' | 'ta';

const translations: Record<Language, Record<string, string>> = { en, hi, gu, kn, te, ta };

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export function useLanguageState() {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('mdra-lang') as Language | null;
    if (stored && translations[stored]) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mdra-lang', lang);
  };

  const t = (key: string): string => {
    const dict = translations[language];
    return dict[key] ?? translations['en'][key] ?? key;
  };

  return { language, setLanguage, t };
}

export function useLanguage() {
  return useContext(LanguageContext);
}
