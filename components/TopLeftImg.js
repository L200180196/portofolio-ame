import Image from 'next/image'

const TopLeftImg = () => {
  return <>
    <div className='absolute left-0 mix-blend-color-dodge z-10 w-[100px] xl:w-[325px] lg:w-[275px] opacity-50'>
      <Image src='/top-left-img.png' width={400} height={400} alt='' />
    </div>
    <div className='absolute xl:-right-[10px] -right-[0px] mix-blend-color-dodge z-10 w-[100px] lg:w-[250px] xl:w-[275px] opacity-50'>
      <Image src='/top-left-img.png' width={400} height={400} alt='' className='-rotate-180 -scale-y-100' />
    </div>
  </>
};

export default TopLeftImg;
