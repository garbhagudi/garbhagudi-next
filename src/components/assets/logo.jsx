import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      quality={85}
      src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms76155yh1on07pnqpdnqyzk'
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
