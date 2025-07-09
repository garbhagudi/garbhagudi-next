import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1751352018/GG_New-Hori_Logo_ziwur1.svg'
      id='svg'
      width='400'
      height='84'
      className='h-full w-44 dark:fill-white dark:brightness-0 dark:grayscale dark:invert xl:w-56'
      alt='logo'
      priority={false}
      loading='lazy'
    />
  );
};

export default Logo;
