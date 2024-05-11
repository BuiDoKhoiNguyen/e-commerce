import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden w-[15rem] mx-3 border'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='w-full h-full object-cover object-top' src={product.imageUrl} alt="" />
        </div>

        <div className='p-4'>
            <h3 className='texg-lg font-medium text-gray-900'>NoFilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Man solid pure cotton straight kurta</p>  
        </div>
    </div>
  )

}

export default HomeSectionCard