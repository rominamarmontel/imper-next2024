import React from 'react'
import AboutPageEnglish from '@/components/AboutPageEnglish'
import styles from './../../styles.module.css'

const About = () => {
  return (
    <div
      className={`${styles.Fade} md:flex flex-wrap justify-center gap-auto w-11/12`}
    >
      <AboutPageEnglish />
    </div>
  )
}

export default About
