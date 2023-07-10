import React from 'react'
import Link from 'next/link'

const TopicContainer = ({title,destination}) => {
  return (
    <Link href={destination} className='flex flex-col items-start px-8 py-[3rem] rounded-lg glassEffect'>
        <h6 className='mt-2 text-lg font-semibold'>{title}</h6>
    </Link>

  )
}

export default TopicContainer