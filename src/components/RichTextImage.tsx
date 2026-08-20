import Image from 'next/image';
import type { ImageProps } from '@graphcms/rich-text-types';

/** The renderer hands every field through as optional, including `src`. */
type RichTextImageProps = Partial<ImageProps>;

/** Body content is capped around this width across the site's prose containers. */
const CONTENT_WIDTH = 768;
const SIZES = `(max-width: ${CONTENT_WIDTH}px) 100vw, ${CONTENT_WIDTH}px`;

/**
 * Rich text image renderer replacement for @graphcms/rich-text-react-renderer.
 * The library default emits a bare <img loading="lazy">, which bypasses image
 * optimization entirely. Routing through next/image gives CMS-embedded images
 * the same resizing and WebP/AVIF treatment as the rest of the site.
 *
 * Props are spelled out rather than spread so that `jsx-a11y/alt-text` and the
 * `quality` guard in .eslintrc.json can still see them.
 */
export default function RichTextImage({ src, title, width, height, altText }: RichTextImageProps) {
  if (!src) return null;

  const alt = altText || title || '';

  // Hygraph assets usually carry intrinsic dimensions, but not always.
  // Without them next/image needs `fill`, which needs a sized parent.
  if (!width || !height) {
    return (
      <span className='relative my-4 block aspect-video w-full overflow-hidden rounded-md'>
        <Image
          src={src}
          alt={alt}
          title={title}
          fill
          quality={85}
          sizes={SIZES}
          className='object-contain'
        />
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      quality={85}
      sizes={SIZES}
      className='my-4 h-auto w-full rounded-md'
    />
  );
}
