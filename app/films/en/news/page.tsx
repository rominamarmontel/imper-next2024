import NewsEnglish from '@/components/NewsEnglish'
import { TNews } from '@/types'
import styles from '../../styles.module.css'

const getAllNews = async (): Promise<TNews[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/news`, {
      cache: 'no-store',
    })
    if (res.ok) {
      const news = res.json()
      return news
    }
  } catch (error) {
    console.log(error)
  }
  return null
}

export default async function getNews() {
  const posts = await getAllNews()

  return (
    <>
      <div
        className={`${styles.Fade} md:flex flex-wrap justify-between gap-auto w-11/12`}
      >
        <h1 className={styles.NewsTitle}>Infomation</h1>
        <div className="md:flex flex-wrap gap-auto">
          {posts && posts.length > 0 ? (
            posts.map((post: TNews) => (
              <NewsEnglish
                key={post._id}
                _id={post._id}
                postTitle={post.postTitle}
                post={post.post}
                imageUrl={post.imageUrl}
                publicId={post.publicId}
                updatedAt={post.updatedAt}
              />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  )
}
