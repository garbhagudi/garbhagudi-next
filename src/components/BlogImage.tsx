import { useState } from 'react';
import Image from 'next/image';

export default function BlogImage({ src, alt, width, height }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg`}
      style={{
        backgroundColor: '#f0f0f0',
        height: 'auto',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto w-full transition-opacity duration-500 ease-in-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        priority
        sizes='(max-width: 768px) 100vw, 700px'
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
