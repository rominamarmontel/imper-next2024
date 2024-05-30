import AboutPage from '@/components/AboutPage'
import styles from './../styles.module.css'

const About = () => {
  return (
    <div
      className={`${styles.Fade} md:flex flex-wrap justify-center gap-auto w-11/12`}
    >
      <AboutPage />
    </div>
  )
}

export default About
