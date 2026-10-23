/* The banner tamil.garbhagudi.com's homepage carousel shows. It lives in the Tamil site's own
 * Hygraph project, which this repo's ENDPOINT can't query, so the assets are pinned here.
 * There's only one slide, so no carousel; and no link, so visitors stay on the LP. */
const DESKTOP = {
  url: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmv0ldlnp71zz06ph6fapolya',
  width: 4816,
  height: 1586,
};
const MOBILE = {
  url: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmv0le1au723006phpdi3zylh',
  width: 3113,
  height: 4357,
};

// Hygraph resizes from the URL; next.config.mjs sets `images.unoptimized: true`.
const webp = (url: string, width: number) =>
  url.replace(/\/([^/]+)$/, `/output=format:webp/resize=width:${width}/$1`);

export default function Banner() {
  return (
    <div className='border-0 shadow-2xl drop-shadow-2xl'>
      <picture>
        <source
          media='(min-width: 768px)'
          srcSet={webp(DESKTOP.url, 1920)}
          width={DESKTOP.width}
          height={DESKTOP.height}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={webp(MOBILE.url, 1080)}
          alt='GarbhaGudi IVF Centre Hosur'
          width={MOBILE.width}
          height={MOBILE.height}
          fetchPriority='high'
          className='h-full w-full object-cover'
        />
      </picture>
    </div>
  );
}
