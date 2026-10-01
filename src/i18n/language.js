import { createContext, useContext } from 'react'

export const LanguageContext = createContext({ lang: 'en', setLang: () => {} })

export const useLanguage = () => useContext(LanguageContext)
