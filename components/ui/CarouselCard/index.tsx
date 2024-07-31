import Image from 'next/image'
import React from 'react'
interface props {
  img: string
}
function CarouselCard({ img }: props) {
  return (
    <>
      <>
        {/* Image Container */}
        <div
          className={[
            'relative w-[291px] md:w-[30vw] lg:w-[23vw] h-[294px] md:h-[30vw] lg:h-[23vw]',
          ].join(' ')}
        >
          <Image
            // src={"/images/shop.png"}
            src={img || ''}
            alt='News card'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Text Container */}
        <div className='mt-16 flex items-center justify-between'>
          {/* Left Container */}
          <div className='flex flex-col gap-4'>
            {/* Title */}
            {/* <Text tag='h6' variant='cardTitle'>
              {shopCard?.title}
            </Text> */}
            {/* Subtitle */}
            {/* <Text tag='p' variant='cardSubtitle' color='mid' className='uppercase'>
              {shopCard?.priceRange?.maxVariantPrice.amount + '€'}
            </Text> */}
          </div>
        </div>
      </>
    </>
  )
}

export default CarouselCard
