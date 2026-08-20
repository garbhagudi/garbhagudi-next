import RichTextImage from 'components/RichTextImage';

/**
 * Shared renderer overrides for @graphcms/rich-text-react-renderer.
 *
 * These were previously copy-pasted at each <RichText> call site, which let
 * copies drift — one had lost its `href`, rendering CMS links as unclickable
 * text. Spread this object instead, and add per-site overrides after it:
 *
 *   renderers={{ ...baseRichTextRenderers, iframe: (p) => <RichTextIframe {...p} /> }}
 *
 * `img` matters most: without it the library emits a bare <img>, bypassing
 * next/image entirely.
 */
export const baseRichTextRenderers = {
  img: (props) => <RichTextImage {...props} />,
  p: ({ children }) => <p className='text-justify'>{children}</p>,
  a: ({ children, href }) => (
    <a href={href} className='text-gg-500 underline'>
      {children}
    </a>
  ),
};

export default baseRichTextRenderers;
