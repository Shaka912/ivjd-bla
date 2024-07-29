'use client'
import React from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { HomeCollectionProp } from '@/sanity/api/type'
import { urlForImage } from '@/sanity/lib/image'
import useMousePosition from '@/hooks/useMousePosition'
import ListViewHoverImages from '@/components/animation/ListViewHoverImages'
import LocaleLink from '@/components/ui/locale-link'

const article2 = '/homeImg1.png'
const FramerImage = motion(Image)
interface Props {
  data: HomeCollectionProp
  lang: string
}

const MovingImg = ({ img, title, link }: { img: any; title: any; link: any }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = React.useRef<HTMLImageElement | null>(null)

  function handleMouse(event: React.MouseEvent) {
    console.log('Mouse enter') // Debug log
    if (imgRef.current) {
      imgRef.current.className = 'block'
    }
  }

  function handleMouseLeave(event: React.MouseEvent) {
    console.log('Mouse leave') // Debug log
    if (imgRef.current) {
      imgRef.current.className = 'hidden'
      x.set(0)
      y.set(0)
    }
  }

  return (
    <>
      <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
        <FramerImage
          style={{ x: x, y: y, borderRadius: '10px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          ref={imgRef}
          src={img}
          alt={title}
          width={100}
          height={100}
          className='w-28 h-auto hidden  md:!hidden'
        />

        <h2 className={'capitalize text-base  hover:underline dark:text-light'}>{title}</h2>
      </Link>
    </>
  )
}

const Article = ({
  img,
  title,
  date,
  link,
  subTitle,
}: {
  img: any
  title: any
  date: any
  link: any
  subTitle: any
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
      }}
      viewport={{ once: true }}
      // className="dark:bg-dark relative w-full p-4 py-4 my-2 space-x-10 flex flex-row items-center justify-between bg-light border-b  border-black text-dark "
      className='dark:bg-dark relative w-full p-4 py-4 my-2 -space-x-5  items-center grid grid-cols-3 bg-light border-b  border-black text-dark '
    >
      <MovingImg img={img} title={title} link={link} />

      <h2 className={'capitalize text-base  hover:underline dark:text-light hidden md:block'}>
        {subTitle}
      </h2>
      <Link href={link}>
        <span className='text-base hover:underline  pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>
          {date}
        </span>
      </Link>
    </motion.li>
  )
}

function CollectionItemss({
  title,

  subTitle,
  lang,
}: {
  title: any
  subTitle: any
  lang: string
}) {
  return (
    <>
      {/* <div className="dark:bg-dark relative w-full p-4 py-4 my-2  flex flex-row items-center justify-between bg-light border-b  border-black text-dark "> */}
      <div className='dark:bg-dark relative w-full p-4 py-4 my-2    items-center grid md:grid-cols-3 grid-cols-2 bg-light border-b  border-black text-dark '>
        <h2> {title}</h2>
        <h2 className={'capitalize text-base  hover:underline dark:text-light hidden md:block'}>
          {' '}
          {subTitle}
        </h2>
        <span className='text-base hover:underline  flex justify-end pl-4 dark:text-primaryDark  sm:pl-0 xs:text-sm'>
          {lang === 'es' ? 'Ver' : 'View'}
        </span>
      </div>
    </>
  )
}

const CardCollectionItems = ({ src, title }: any) => {
  return (
    <div className='flex relative flex-col pt-20  w-full aspect-[1.54]'>
      <Image
        loading='lazy'
        src={src}
        className='object-cover absolute inset-0 w-full h-full'
        alt={title}
        width={350}
        height={228}
      />
      <h1 className='relative font-normal text-[18px] text-[#ffffff] px-2 py-5 mt-20'>{title}</h1>
    </div>
  )
}

function HomeCollections({ data, lang }: Props) {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null)
  const [hoverKey, setHoverKey] = React.useState<number>(0)
  const mousePosition = useMousePosition()

  const onMouseEnterRow = (idx: number) => {
    setHoveredIdx(idx)
    setHoverKey((prevKey) => prevKey + 1)
  }

  console.log('data.collections[hoveredIdx].featuredImage', data?.collections)

  const onMouseLeaveRow = () => {
    setHoveredIdx(null)
  }
  return (
    <>
      <main className='w-full mb-16 flex flex-col px-4   dark:text-light' id='collection'>
        <h2 className='font-medium text-xl w-full ml-4   mt-32'>{data.title}</h2>
        <ul>
          <AnimatePresence>
            {hoveredIdx !== null && (
              <ListViewHoverImages
                key={`hovered-img-${hoveredIdx}-${hoverKey}`}
                mousePosition={mousePosition}
                currentImg={{
                  src: urlForImage(data.collections[hoveredIdx].featuredImage),
                  alt: 'hover Image',
                }}
              />
            )}
          </AnimatePresence>
          <div className='sm:block hidden'>
            {data?.collections?.map((item, index) => {
              return (
                <LocaleLink
                  onMouseEnter={() => onMouseEnterRow(index)}
                  onMouseLeave={onMouseLeaveRow}
                  lang={'es'}
                  key={`locale-link-${index}`}
                  href={'/collections/' + item.slug.current || ''}
                >
                  <CollectionItemss
                    key={index}
                    title={item.title || ''}
                    subTitle={item.shortDescription || ''}
                    lang={lang}
                  />
                </LocaleLink>
              )
            })}
          </div>
          <div className='flex flex-col gap-2 sm:hidden mx-auto  whitespace-nowrap max-w-[350px]'>
            {data?.collections?.map((item, index) => {
              return (
                <>
                  <LocaleLink
                    lang={'es'}
                    key={`locale-link-${index}`}
                    href={'/collections/' + item.slug.current || ''}
                  >
                    <CardCollectionItems
                      key={index}
                      src={urlForImage(item?.featuredImage)}
                      title={item?.title}
                    />
                  </LocaleLink>
                </>
              )
            })}
          </div>
        </ul>
      </main>
    </>
  )
}

export default HomeCollections
