'use client'

import { TNews } from '@/types'
import Image from 'next/image'
import styles from './styles.module.css'
import ShareSns from './ShareSns'
import Link from 'next/link'

const News = ({ _id, postTitle, post, imageUrl, updatedAt }: TNews) => {
  const dateObject = new Date(updatedAt)
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }
  const formattedDate = dateObject.toLocaleDateString('fr-FR', options)

  return (
    <div className="w-full h-auto py-10">
      <div className="xl:flex gap-12">
        <div
          style={{ position: 'relative' }}
          className="xl:w-2/3 md:w-full md:mb-10 aspect-video relative"
        >
          {imageUrl && (
            <Link href={`${process.env.NEXTAUTH_URL}/films/news/${_id}`}>
              <div style={{ position: 'relative', height: '100%' }}>
                <Image
                  src={imageUrl}
                  alt={postTitle}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </Link>
          )}
        </div>
        <div className="md:w-full md:mb-10 flex flex-col justify-between">
          <div>
            {postTitle && (
              <div className="text-2xl">
                <strong>{postTitle}</strong>
              </div>
            )}
            {post && (
              <div className="text-sm font-light line-clamp-2 textp">
                {post}
              </div>
            )}
            <Link
              href={`${process.env.NEXTAUTH_URL}/films/news/${_id}`}
              className="text-sm text-gray-400"
            >
              Voir plus
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {updatedAt && (
              <div className="text-xs pb-2">
                <span className="">updated @ </span>
                {formattedDate}
              </div>
            )}
            <ShareSns _id={_id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
