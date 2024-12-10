import { fr } from './locales/fr';
import { en } from './locales/en';

type Locale = 'fr' | 'en';
type Messages = typeof fr;

const messages = {
  fr,
  en,
};

let currentLocale: Locale = 'fr';

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function t(key: keyof Messages | string): string {
  const keys = key.split('.');
  let value: any = messages[currentLocale];
  
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  
  return value;
}