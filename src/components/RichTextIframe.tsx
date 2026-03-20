/** YouTube rejects embeds when the iframe sends no Referer (Hygraph default). Use privacy-enhanced host + explicit policy. */
function normalizeEmbedSrc(url: string): string {
  const u = url.trim();
  if (/^https?:\/\/(www\.)?youtube\.com\/embed\//i.test(u)) {
    return u.replace(/^https?:\/\/(www\.)?youtube\.com\//i, 'https://www.youtube-nocookie.com/');
  }
  return u;
}

type RichTextIframeProps = {
  url?: string;
  width?: number;
};

/**
 * Rich text iframe renderer replacement for @graphcms/rich-text-react-renderer.
 * The library default sets referrerPolicy="no-referrer", which breaks YouTube (Error 153).
 */
export default function RichTextIframe({ url }: RichTextIframeProps) {
  const src = url ? normalizeEmbedSrc(url) : '';
  return (
    <div className='relative w-full overflow-hidden rounded-md' style={{ paddingTop: '56.25%' }}>
      <iframe
        className='absolute left-0 top-0 h-full w-full border-0'
        src={src}
        title='Embedded video'
        loading='lazy'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        referrerPolicy='strict-origin-when-cross-origin'
      />
    </div>
  );
}
