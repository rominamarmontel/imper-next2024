import Link from 'next/link'
import styles from './styles.module.css'
import { TCategory } from '@/types'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'

const CategoriesList = () => {
  const [categories, setCategories] = useState<TCategory[] | null>(null)
  const { isEnglish } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`)
        if (res.ok) {
          const data = await res.json()
          setCategories(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchCategories()
  }, [])

  const getCategoryDisplayName = (catName: string) => {
    return isEnglish && catName === 'en cours' ? 'in progress' : catName
  }

  return (
    <div className={styles.CategoriesList}>
      {categories &&
        categories.map((category) => (
          <div
            key={category._id}
            className={`${styles.CategoriesList_CategoryName} ${
              scrolled ? styles.scrolledText : ''
            }`}
          >
            <Link
              href={
                isEnglish
                  ? `/films/en/categories/${category.catName}`
                  : `/films/categories/${category.catName}`
              }
            >
              {getCategoryDisplayName(category.catName)}
            </Link>
          </div>
        ))}
    </div>
  )
}

export default CategoriesList
