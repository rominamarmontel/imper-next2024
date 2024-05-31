'use client'

import { TNews } from '@/types'
import Image from 'next/image'
import React from 'react'
import ShareSns from './ShareSns'
import styles from './styles.module.css'

const OneNewsEnglish = ({
  _id,
  postTitle,
  post,
  imageUrl,
  updatedAt,
}: TNews) => {
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
    <>
      <div className="w-full h-full px-10">
        <div className="xl:flex-col">
          <div
            style={{ position: 'relative' }}
            className="xl:w-2/3 md:w-full relative text-2xl"
          >
            <strong>{postTitle}</strong>
          </div>
          <div className="text-xs textp flex items-baseline gap-5 textp">
            <div>
              <span>posted @ </span>
              {formattedDate}
            </div>
            <ShareSns _id={_id} />
          </div>
          <div
            style={{ position: 'relative' }}
            className="xl:w-2/3 aspect-video my-10"
          >
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={postTitle}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                className="object-cover object-center"
                priority
              />
            )}
          </div>
          <div className="text-sm post-content">{post}</div>
        </div>
      </div>
    </>
  )
}

export default OneNewsEnglish
