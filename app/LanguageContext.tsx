'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'

type LanguageContextProps = {
  children: ReactNode
}

type LanguageContextType = {
  isEnglish: boolean
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export const LanguageProvider: React.FC<LanguageContextProps> = ({
  children,
}) => {
  const pathname = usePathname()
  const [isEnglish, setIsEnglish] = useState(pathname.startsWith('/en'))
  const [isToggled, setIsToggled] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const currentPath = pathname
    const isEnglishPath = currentPath.startsWith('/films/en')

    let newPath
    if (isEnglish) {
      if (!isEnglishPath) {
        newPath = currentPath.replace('/films', '/films/en')
      } else {
        newPath = currentPath
      }
    } else {
      if (isEnglishPath) {
        newPath = currentPath.replace('/films/en', '/films')
      } else {
        newPath = currentPath
      }
    }

    if (isToggled) {
      router.push(newPath)
      setIsToggled(false)
    }
  }, [isEnglish, isToggled, pathname, router])

  const toggleLanguage = () => {
    setIsActive(!isActive)
    setIsToggled(true)
    setIsEnglish((prevIsEnglish) => !prevIsEnglish)
  }

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
