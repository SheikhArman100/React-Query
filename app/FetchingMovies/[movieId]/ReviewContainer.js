import React from 'react'

const ReviewContainer = ({review}) => {
  return (
    <div className='flex items-start gap-x-2'>
      <div className='h-8 md:h-12 aspect-square rounded-full bg-gray-600'/>
      <div>
        <h5 className='text-xs md:text-sm font-bold'>Sheikh Arman</h5>
        <p className='text-xs md:text-sm text-gray-300'>{review}</p>
      </div>
    </div>
  )
}

export default ReviewContainer