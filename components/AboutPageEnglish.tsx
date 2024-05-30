'use client'
import Image from 'next/image'
import styles from './styles.module.css'
import { useState } from 'react'

const AboutPage = () => {
  const [isEnglish, setIsEnglish] = useState(true)
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }
  const imageUrl =
    'https://res.cloudinary.com/dyu65fpse/image/upload/v1699955860/nextImpermanence_images/ucj4ftamymb1towotolo.jpg'
  return (
    <div className="md:w-[50%]">
      <p className={styles.AboutText}>
        Based in Paris since 2011, Impermanence Films works for the production
        and distribution and programming of documentary cinema, favoring human
        perspective and films produced in a context of formal freedom.Essential
        support for independent works, Impermanence Films pools and provides
        production and distribution tools.
      </p>
      <div
        style={{ position: 'relative' }}
        className="w-full aspect-video my-10"
      >
        <Image
          src={imageUrl}
          alt="aboutImage"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  )
}

export default AboutPage
