'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Zoom,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { FaVimeo, FaLinkedinIn } from 'react-icons/fa'

interface Slide {
  id: number
  image: string
}
interface DemoSliderProps {
  data: Slide[]
}

const SwiperComponent: React.FC<DemoSliderProps> = ({ data }) => {
  const [isEnglish, setIsEnglish] = useState(false)
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <section className="w-full">
      <div className="h-screen">
        <ul className="h-full w-full">
          <Swiper
            zoom={true}
            navigation={false}
            effect={'fade'}
            speed={2000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            modules={[Zoom, Navigation, Pagination, Autoplay, EffectFade]}
          >
            {data.map(({ id, image }) => (
              <SwiperSlide key={id}>
                <div
                  className="swiper-zoom-image"
                  style={{
                    background: `url(${image}) center center / cover no-repeat`,
                  }}
                ></div>
                <div className="HomePage-text-left">
                  <h1>
                    impermanence
                    <br />
                    films
                  </h1>
                  {isEnglish ? (
                    <p className="smartphone__area">
                      Based in Paris since 2011, Impermanence Films works for
                      the production and distribution and programming of
                      documentary cinema, favoring human perspective and films
                      produced in a context of formal freedom. Essential support
                      for independent works, Impermanence Films pools and
                      provides production and distribution tools.
                    </p>
                  ) : (
                    <p className="smartphone__area">
                      Basée à Paris depuis 2011, Impermanence Films est une
                      structure œuvrant pour la production, la diffusion et la
                      programmation du cinéma documentaire, privilégiant les
                      regards à hauteur humaine et les films produits dans un
                      contexte de liberté formelle. En soutien aux œuvres
                      indépendantes, Impermanence Films mutualise et met à
                      disposition des outils de production et de diffusion.
                    </p>
                  )}
                  <div className="sns-container">
                    <ul style={{ display: 'flex' }}>
                      <Link
                        href="https://vimeo.com/user9555000"
                        target="_blank"
                      >
                        <li className="smartphone__area">
                          <FaVimeo />
                        </li>
                      </Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Link
                        href="https://www.linkedin.com/company/impermanence-films/"
                        target="_blank"
                      >
                        <li className="smartphone__area">
                          <FaLinkedinIn />
                        </li>
                      </Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <li onClick={toggleLanguage} className="HomePage-lang">
                        {isEnglish ? 'FR' : 'EN'}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="HomePage-text-right">
                  {!isEnglish ? (
                    <>
                      <ul>
                        <li>
                          <Link rel="dns-prefetch" href="/films">
                            TOUS LES FILMS
                          </Link>
                        </li>
                        <li>
                          <Link rel="preconnect" href="/films/about">
                            À PROPOS D’IMPERMANENCE
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <ul>
                        <li>
                          <Link href={`${process.env.NEXTAUTH_URL}/films/en`}>
                            ALL FILMS
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`${process.env.NEXTAUTH_URL}/films/en/about`}
                          >
                            ABOUT MPERMANENCE
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  )
}

export default SwiperComponent
