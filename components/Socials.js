import Link from 'next/link'
import {
  RiYoutubeLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiWhatsappLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-8 text-lg">
      <Link href={'https://www.youtube.com/channel/UCpYooNlhh_b7WCsQNt4tTZA'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.instagram.com/amrtymln/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/amartya-maulana/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://wa.me/+6282148626889'} className='hover:text-accent transition-all duration-300'>
        <RiWhatsappLine />
      </Link>
    </div>
  )
};

export default Socials;
