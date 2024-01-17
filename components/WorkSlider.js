// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/job-2.png',
          link: 'https://job-hunt-cyan.vercel.app/'
        },
        {
          title: 'title',
          path: '/q_learn.png',
          link: 'https://play.google.com/store/search?q=qonnectiq%20learning&c=apps&hl=id&gl=US'
        },
        {
          title: 'title',
          path: '/job-1.png',
          link: 'https://dashboard-job-hunt.vercel.app/'
        },
        {
          title: 'title',
          path: '/q_project.png',
          link: 'https://play.google.com/store/apps/details?id=com.qonnectiq.app&hl=id&gl=id'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/cuynime1.png',
          link: 'https://github.com/L200180196/cuyAnime'
        },
        {
          title: 'title',
          path: '/skripsi2.png',
          link: 'https://github.com/L200180196/skripsi'
        },
        {
          title: 'title',
          path: '/empty.jpg',
          link: 'https://job-hunt-cyan.vercel.app/'
        },
        {
          title: 'title',
          path: '/empty.jpg',
          link: 'https://job-hunt-cyan.vercel.app/'
        },
      ],
    },
  ],
};

// Import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'
// import styles swiper
import 'swiper/swiper.css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from 'swiper'
import Link from 'next/link'

// Icons
import { BsArrowRight } from 'react-icons/bs'

import Image from 'next/image'

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ 
        clickable: true,
       }}
      modules={[Pagination]}
      className='xl:h-[600px] sm:h-[480px] h-[350px] lg:h-[550px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return <Link key={index} href={image.link}>
                  <div className='relative rounded-lg overflow-hidden flex
                 items-center justify-center group'>
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    {/* Image */}
                    <Image src={image.path} alt={image.path} width={500} height={300} className='h-max' />
                    {/* Overlay Gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent
                     via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80
                     transition-all duration-700'></div>
                    {/* Title */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-12
                     group-hover:xl:-translate-y-20 transition-all duration-300 group-hover:lg:-translate-y-20
                     group-hover:md:-translate-y-16'>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* Title Part 1 */}
                        <div className='delay-100'>LIVE</div>
                        {/* Title Part 2 */}
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all
                        duration-300 delay-150'>Project</div>
                        {/* Icon */}
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 
                        transition-all duration-300 delay-200'><BsArrowRight /></div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default WorkSlider;
