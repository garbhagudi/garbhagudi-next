import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const closeLightBox = () => {
    setSelectedImage(null);
  };

  const images = [
    '/assets/ggg/1.webp',
    '/assets/ggg/3.webp',
    '/assets/ggg/6.webp',
    '/assets/ggg/8.webp',
    '/assets/ggg/9.webp',
    '/assets/ggg/10.webp',
    '/assets/ggg/13.webp',
    '/assets/ggg/15.webp',
    '/assets/ggg/17.webp',
  ];
  return (
    <div>
      <div className='py-3 lg:py-6'>
        <h1 className='mb-3 pb-6 font-lexend text-3xl font-semibold'>
          Gallery
        </h1>
        <ImageGallery images={images} onClick={handleImageClick} />
        {selectedImage && (
          <LightBox imageUrl={selectedImage} onClose={closeLightBox} />
        )}
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
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className='h-56 w-full cursor-pointer rounded-md object-cover object-center'
          />
        </div>
      ))}
    </div>
  );
};

const LightBox: React.FC<{ imageUrl: string; onClose: () => void }> = ({
  imageUrl,
  onClose,
}) => {
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
            <img
              src={imageUrl}
              alt='Full-screen'
              className='h-auto w-full md:scale-125'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
