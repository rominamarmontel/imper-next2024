import AboutPage from '@/components/AboutPage'
import styles from './../styles.module.css'

export const metadata = {
  title: 'About',
  description:
    'Basée à Paris depuis 2011, Impermanence Films est une structure œuvrant pour la production, la diffusion et la programmation du cinéma documentaire, privilégiant les regards à hauteur humaine et les films produits dans un contexte de liberté formelle. En soutien aux œuvres indépendantes, Impermanence Films mutualise et met à disposition des outils de production et de diffusion.',
}

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
