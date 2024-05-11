import React from 'react'
import './ProductCard.css'

const ProductCard = ({ cards }) => {
  return (
    <div className='ProductCard w-[15rem] m-3 transition-all cursor-pointer' >
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={cards.imageUrl} alt={cards.title} />
      </div>

      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{cards.brand}</p>
          <p>{cards.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>{cards.discountedPrice}</p>
          <p className='line-through opacity-50'>{cards.price}</p>
          <p className='text-green-600 font-semibold'>{cards.discountPersent}% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard