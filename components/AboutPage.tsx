'use client'

import styles from './styles.module.css'
import { useState } from 'react'

const AboutPage = () => {
  const [isEnglish, setIsEnglish] = useState(true)
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <div className="md:w-[50%]">
      <p className={styles.AboutTitle}>impermanence films</p>
      <p className={styles.AboutText}>
        Basée à Paris depuis 2011, Impermanence Films est une structure œuvrant
        pour la production, la diffusion et la programmation du cinéma
        indépendant, privilégiant les films produits dans un contexte de liberté
        formelle. En soutien aux oeuvres indépendantes, Impermanence Films
        mutualise et met à disposition des outils de production et de diffusion.
        Impermanence Films soutient essentiellement des documentaires et des
        films essais, autoproductions, films d’artistes, oeuvres collectives…
        Son apport à la production permet à l’auteur de garder le plein contrôle
        éditorial, et son soutien à la distribution aide la visibilité du film
        grâce au réseau et aux plateformes d’Impermanence.
      </p>
      <p className={styles.AboutText}>
        Les oeuvres accompagnées par Impermanence Films, tant à la production
        qu’à la distribution, ont été diffusées et primées dans les festivals
        internationaux, diffusées en salle et à la télévision. En 2022-2023, les
        activités de production ont pris de l’essor avec plusieurs projets en
        cours. Dans chaque domaine, le soutien proposé s’adapte aux besoins de
        chaque film.
      </p>
      <p className={styles.AboutText}>
        À l’origine du projet Impermanence, Les Rencontres Siréales ont réuni
        annuellement, entre 2005 et 2008, des plasticiennes et réalisatrices
        autour de créations collectives avec un esprit revendicateur, pour plus
        de place des femmes dans la création visuelle et une production
        indépendante. Dans la continuité des Rencontres Siréales, un travail
        associatif de programmation a été accueilli en résidence dans une friche
        culturelle de la région parisienne, Anis Gras le lieu de l’autre.
        Plusieurs collectifs se sont associés au projet, pour des propositions
        mêlant art contemporain et cinéma. Aujourd’hui, l’esprit de collectif et
        d’entraide perdure parmi les auteur.rices-réalisateur.rices gravitant
        autour d’Impermanence Films. Des projets collaboratifs autour d’artistes
        sont actuellement en production et une reprise des Rencontres Siréales
        est prévue pour 2024.
      </p>
      {/* <div
            style={{ position: 'relative' }}
            className="w-full aspect-video my-10"
          > */}
      {/* <Image
              src={imageUrl}
              alt="aboutImage"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
              className="object-cover object-center"
              priority
            /> */}
      {/* </div> */}
    </div>
  )
}

export default AboutPage
