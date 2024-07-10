import Image from 'next/image';

const ImageBannerSection = () => {
  return (
    <figure>
      <Image
        width={100}
        height={100}
        className='rounded-lg mt-10 mb-5 w-full'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx6F0SNFxv_4zpxvFrfddu7i8E86C3O2DNA&s'
        alt='Campaign Banner'
      />
    </figure>
  );
};

export default ImageBannerSection;
