'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import styles from './styles.module.css'
// import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import CategoriesList from './CategoriesList'
// import imageAccount from '@/public/images/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg'
import HambergerMenu from './HambergerMenu'
import './Navbar.css'
import { FaVimeo, FaLinkedinIn } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '@/app/LanguageContext'

const Navbar = () => {
  const { status, data: session } = useSession()
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const popupRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
    setIsActive(!isActive)
  }
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)

  const closeHambergerMenu = () => {
    setOpen(false)
    setIsActive(!isActive)
  }

  const router = useRouter()
  const pathname = usePathname()
  const { isEnglish, toggleLanguage } = useLanguage()

  const handleLanguageChange = async () => {
    toggleLanguage()

    const currentPath = pathname
    const newPath = isEnglish
      ? `/films/en${currentPath}`
      : currentPath.replace('/films/en', '')
    await router.replace(newPath)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupVisible(false)
      }
    }
    document.addEventListener('click', handleClickOutside)

    if (!isPopupVisible) {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isPopupVisible])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {windowWidth !== undefined && windowWidth <= 992 ? (
        <div className={styles.HeaderMenu}>
          <Link href={isEnglish ? '/films/en' : '/films'}>
            <h1 className={styles.NavbarTitleSmall}>
              impermanence
              <br />
              films
            </h1>
          </Link>

          <header className={`${styles.header}`}>
            <div
              className={`openbtn1 ${isActive ? 'active' : ''}`}
              onClick={toggleFunction}
            >
              <span></span>
              <span></span>
            </div>
            <HambergerMenu
              id="navigation"
              open={open}
              close={closeHambergerMenu}
            />
          </header>
        </div>
      ) : (
        <div
          className={`${styles.Navbar} ${scrolled ? `${styles.bgblack}` : ''}`}
        >
          <div className="flex justify-between items-center">
            <Link href={isEnglish ? '/films/en' : '/films'}>
              {scrolled ? (
                <h1 className={styles.scrollNavbarTitle}>
                  impermanence
                  <br />
                  films
                </h1>
              ) : (
                <h1 className={styles.NavbarTitle}>
                  impermanence
                  <br />
                  films
                </h1>
              )}
            </Link>

            {/* {status === 'authenticated' ? (
              <>
                <div
                  ref={popupRef}
                  className={`absolute z-30 right-0 top-20 bg-white p-6 shadow-lg rounded-md flex flex-col gap-2 text-right min-w-[160px] ${
                    isPopupVisible ? 'flex' : 'hidden'
                  }`}
                >
                  <div className="font-bold">{session?.user?.name}</div>
                  <div>{session?.user?.email}</div>
                  <Link
                    onClick={() => setIsPopupVisible(false)}
                    className="hover:underline"
                    href={'/dashboard'}
                  >
                    Dashboard
                  </Link>
                  <Link
                    onClick={() => setIsPopupVisible(false)}
                    className="hover:underline"
                    href={'/dashboard/create-film'}
                  >
                    Create Film
                  </Link>
                  <Link
                    onClick={() => setIsPopupVisible(false)}
                    className="hover:underline"
                    href={'/dashboard/create-news'}
                  >
                    Create News
                  </Link>
                  <button onClick={() => signOut()} className="btn">
                    Sign Out
                  </button>
                </div>

                <div className="flex gap-2 items-center">
                  <Link
                    className="hidden md:flex gap-2 items-center mr-6"
                    href="/dashboard/create-film"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span>Create New</span>
                  </Link>
                  <Image
                    src={imageAccount}
                    width={36}
                    alt="Profile Image"
                    className="rounded-full cursor-pointer"
                    onClick={() => setIsPopupVisible((prev) => !prev)}
                  />
                </div>
              </>
            ) : ( */}
            <>
              <div className="flex flex-col">
                <div className="mt-0 grid place-content-center">
                  <CategoriesList />
                </div>
                <div className="flex justify-end items-center gap-5">
                  <ul className="flex gap-5 items-center">
                    <li>
                      <Link
                        className={`${styles.About} ${
                          scrolled ? styles.scrolledText : ''
                        }`}
                        href={isEnglish ? '/films/en/news' : '/films/news'}
                      >
                        {isEnglish ? 'news' : 'actualités'}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${styles.About} ${
                          scrolled ? styles.scrolledText : ''
                        }`}
                        href={isEnglish ? '/films/en/about' : '/films/about'}
                      >
                        {isEnglish ? 'about' : 'à propos'}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${styles.About} ${
                          scrolled ? styles.scrolledText : ''
                        }`}
                        href={`mailto:contact@impermanencefilms.org`}
                      >
                        contact
                      </Link>
                    </li>
                  </ul>
                  <ul className="flex gap-2 items-center">
                    <li className="text-red-700">
                      <Link
                        href="https://vimeo.com/user9555000"
                        target="_blank"
                      >
                        <FaVimeo />
                      </Link>
                    </li>
                    <li className="text-red-700">
                      <Link
                        href="https://www.linkedin.com/company/impermanence-films/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLanguageChange}
                        className="second-btn"
                      >
                        {isEnglish ? 'FR' : 'EN'}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
            {/* )} */}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
