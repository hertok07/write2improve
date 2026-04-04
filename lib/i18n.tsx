"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { CONTENT, type Lang } from "./content"

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof CONTENT.es
}

const LangContext = createContext<LangContextType>({
  lang: "es",
  setLang: () => {},
  t: CONTENT.es,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")
  return (
    <LangContext.Provider value={{ lang, setLang, t: CONTENT[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
