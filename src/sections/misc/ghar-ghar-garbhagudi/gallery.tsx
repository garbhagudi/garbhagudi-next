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
        <h1 className='text-3xl font-semibold mb-3 font-lexend pb-6'>
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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {images.map((imageUrl, index) => (
        <div key={index} className='relative' onClick={() => onClick(imageUrl)}>
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className='w-full h-56 object-cover object-center cursor-pointer rounded-md'
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
      <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50'>
        <div className='max-w-2xl w-full p-4'>
          <div className='relative'>
            <button
              onClick={onClose}
              className='absolute top-2 right-2 text-white text-4xl focus:outline-none z-10 '
            >
              &times;
            </button>
            <img
              src={imageUrl}
              alt='Full-screen'
              className='w-full h-auto md:scale-125'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
