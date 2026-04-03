export const languages = ['en', 'tr'] as const;
export const defaultLanguage = 'en' as const;

export type Language = (typeof languages)[number];

export function isValidLanguage(lang: unknown): lang is Language {
  return typeof lang === 'string' && languages.includes(lang as Language);
}
