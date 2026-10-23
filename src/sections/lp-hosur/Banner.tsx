import Image from 'next/image';
const DESKTOP = {
  src: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmv0ldlnp71zz06ph6fapolya',
  width: 4816,
  height: 1586,
};
const MOBILE = {
  src: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmv0le1au723006phpdi3zylh',
  width: 3113,
  height: 4357,
};
export default function Banner() {
  return (
    <div className='border-0 shadow-2xl drop-shadow-2xl'>
      <Image
        {...MOBILE}
        alt='GarbhaGudi IVF Centre Hosur'
        sizes='100vw'
        quality={85}
        className='h-auto w-full md:hidden'
      />
      <Image
        {...DESKTOP}
        alt='GarbhaGudi IVF Centre Hosur'
        sizes='100vw'
        quality={85}
        className='hidden h-auto w-full md:block'
      />
    </div>
  );
}
