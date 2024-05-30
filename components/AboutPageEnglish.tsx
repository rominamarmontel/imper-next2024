'use client'

import styles from './styles.module.css'
import { useState } from 'react'

const AboutPageEnglish = () => {
  const [isEnglish, setIsEnglish] = useState(true)
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <div className="md:w-[50%]">
      <p className={styles.AboutTitle}>impermanence films</p>
      <p className={styles.AboutText}>
        Based in Paris since 2011, Impermanence Films works for the production
        and distribution and programming of documentary cinema, favoring human
        perspective and films produced in a context of formal freedom.Essential
        support for independent works, Impermanence Films pools and provides
        production and distribution tools.
      </p>
    </div>
  )
}

export default AboutPageEnglish
