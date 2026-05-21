'use client';

import React from 'react';
import { LanguageContext, useLanguageState } from '@/lib/i18n';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const value = useLanguageState();
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
