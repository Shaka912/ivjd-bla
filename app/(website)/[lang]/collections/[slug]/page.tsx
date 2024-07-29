import React from 'react'
import Image from 'next/image'
import Text from '@/components/ui/typography/Typography'
import Link from 'next/link'
import NextProjectButton from '../_components/NextProjectButton'
import { projects } from '@/components/data/index'

import projectImages from '@/components/data/index'
import Footer from '@/components/shared/Footer'
import { getSingleCollection } from '@/sanity/api/sanity.queries'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import { protableTextSettingsComponents } from '@/app/settings/portableTextSettings'
import { Locale } from '@/i18n'

interface Props {
  params: {
    slug: string
    lang: Locale
  }
}

const ProjectDetail = async ({ params }: Props) => {
  const collection = await getSingleCollection(params.slug)
  const lang = params.lang
  // Fake data for demonstration. Replace this with your actual data fetching logic.
  const project = {
    backgroundColor: '#2D4138',
    textColor: '#000',
    country: 'Country Name',
    year: '2023',
    title: 'Project Title',
    description: 'Project description goes here.',
    images: [
      '/homeImg2.png', // Local image path
      '/homeImg1.png', // Local image path
      '/homeImg2.png', // Local image path
    ],
    nextProjectSlug: 'next-project',
  }

  const backgroundColor = collection.backgroundColor
  const textColor = collection.textColor

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      className={`pb-[103px]  min-w-full`}
    >
      <div className='fixed inset-0  -z-10 w-screen h-[80vh]'>
        <div className='relative w-full h-full'>
          <Image
            src={urlForImage(collection.featuredImage) || ''}
            alt='Hero image'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* <h1 className="text-7xl  fixed bottom-52 z-20">{collection.title}</h1> */}
      </div>
      {/* Content */}
      <h1 className='text-7xl  absolute bottom-56 md:bottom-56 left-5'>{collection.title}</h1>
      <div style={{ backgroundColor: backgroundColor }} className='z-10 relative mt-[80vh] w-fit'>
        {/* Top Text Section */}

        {/* insitiute description  */}
        <div className='py-20 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='text-xl text-[#B7B7B7] px-7 md:pr-48'>
            {lang === 'es' ? 'INFORMACIÓN' : 'IMFORMATION'}
          </div>
          <div className='px-7 md:pl-40'>
            <div
              className='text-base font-extralight leading-5 tracking-wide'
              style={{ color: textColor }}
            >
              <PortableText
                value={collection?.description}
                components={protableTextSettingsComponents}
              />
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className='px-8 md:px-30 mt-30 md:mt-4 flex flex-col md:gap-11'>
          {/* First Images Row */}

          <div className='grid md:grid-cols-3 grid-cols-1 items-baseline md:gap-x-24 md:mb-20 mb-5'>
            {collection.collection1R.length > 0 &&
              collection.collection1R.map((item, index) => (
                <div
                  key={index}
                  className='h-full col-span-1 flex flex-col justify-start items-start mb-6 md:mb-0'
                >
                  <div className='relative w-[400px] h-[550px] overflow-hidden'>
                    <img
                      src={urlForImage(item.image) || ''}
                      alt='Project Image'
                      className='object-contain'
                      style={{
                        width: '100%',
                        height: '100%',
                        objectPosition: 'left',
                      }}
                    />
                  </div>
                  <div className='pt-3 mb-11'>
                    {item.description.split('\n').map((line, lineIndex) => (
                      <p key={lineIndex} className='leading-relaxed'>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          {/* Second Image Column */}

          <div className='grid grid-cols-1'>
            <div className='flex flex-col items-center'>
              <div className='relative w-full md:w-[96vw] h-[50vw] md:h-auto'>
                <img
                  src={urlForImage(collection.featuredImage1.image) || ''}
                  alt='images gallery'
                  className='object-contain w-full h-full'
                />
              </div>
              {/* Image description */}
              <div className='mt-4 md:mt-10 xl:mt-16 w-full '>
                {collection.featuredImage1.description.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex} className='leading-relaxed'>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 pt-10'>
            {collection.collection2R.map((item, index) => (
              <>
                <div className='flex flex-col justify-center mt-5 md:mt-0'>
                  <div className=' w-full md:w-fit aspect-w-1 aspect-h-1 '>
                    <img
                      src={urlForImage(item.image) || ''}
                      alt='Jarra'
                      className='object-cover md:w-96 h-full'
                    />
                  </div>
                  <div className=' mt-4 '>
                    {item.description.split('\n').map((line, lineIndex) => (
                      <p key={lineIndex} className=' leading-relaxed'>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Next Project Section */}
        <NextProjectButton
          color={collection.textColor}
          nextProjectSlug={collection.nextProjectSlug}
        />
      </div>
    </div>
  )
}

export default ProjectDetail
