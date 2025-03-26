import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const closeLightBox = () => {
    setSelectedImage(null);
  };

  const images = [
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973573/Events/1_shz9cp.webp',
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973573/Events/3_zu4h7b.webp',
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973573/Events/6_m6u9hz.webp',
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973574/Events/8_fj2i1t.webp',
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973573/Events/9_n7zlqe.webp',
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973573/Events/10_ovuzma.webp',
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973575/Events/13_olf4js.webp',
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973573/Events/15_amskll.webp',
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742973573/Events/17_kfbprg.webp',
  ];
  return (
    <div>
      <div className='py-3 lg:py-6'>
        <h1 className='mb-3 pb-6 font-lexend text-3xl font-semibold'>Gallery</h1>
        <ImageGallery images={images} onClick={handleImageClick} />
        {selectedImage && <LightBox imageUrl={selectedImage} onClose={closeLightBox} />}
      </div>
    </div>
  );
};

export default Gallery;

const ImageGallery: React.FC<{
  images: string[];
  onClick: (imageUrl: string) => void;
}> = ({ images, onClick }) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {images.map((imageUrl, index) => (
        <div key={index} className='relative' onClick={() => onClick(imageUrl)}>
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className='h-56 w-full cursor-pointer rounded-md object-cover object-center'
            width={500}
            height={500}
            loading='lazy'
          />
        </div>
      ))}
    </div>
  );
};

const LightBox: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  return (
    <div>
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
        <div className='w-full max-w-2xl p-4'>
          <div className='relative'>
            <button
              onClick={onClose}
              className='absolute right-2 top-2 z-10 text-4xl text-white focus:outline-none'
            >
              &times;
            </button>
            <Image
              src={imageUrl}
              alt='Full-screen'
              className='h-auto w-full md:scale-125'
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
