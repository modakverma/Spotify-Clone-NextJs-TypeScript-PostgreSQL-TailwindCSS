"use client"

interface MediaItemProps{
    data: Song;
    onClick?: (id:string)=>void;
}

import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types'
import Image from 'next/image';
import React from 'react'

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {
    const imageUrl = useLoadImage(data);
    const handleClick=()=>{
        if(onClick){
            return onClick(data.id);
        }
    }
  return (
    <div onClick={handleClick}
    className='flex
    items-center
    p-2
    w-full
    gap-x-3
    hover:bg-neutral-800/40
    cursor-pointer
    roundex-md
    transition
    '
    >
     <div className='relative
     rounded-md
     min-h-[48px]
     min-w-[48px]
     overflow-hidden
     '>
      <Image
      fill
      src={imageUrl || '/images/liked.png'}
      alt='media item'
      className='object-cover'
      />
     </div>
     <div className='flex 
     flex-col 
     gap-y-1
     pverflow-hidden
     '>
      <p className='text-white truncate'>
          {data.title}
      </p>
      <p className='text-neutral-400 text-sm truncate'>
          {data.author}
      </p>
     </div>
    </div>
  )
}

export default MediaItem
