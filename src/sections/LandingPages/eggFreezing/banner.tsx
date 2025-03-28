import Image from 'next/image';

export default function Banner() {
  return (
    <div>
      <Image
        src={
          'https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--03_g0czqu.webp'
        }
        alt={'Egg Freezing info Web Banner'}
        width={1920}
        height={180}
        className='h-full w-full object-cover'
        priority={true}
      />
    </div>
  );
}
