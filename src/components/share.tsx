import React from 'react';
import { useRouter } from 'next/router';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'next-share';

type Props = {
  pinmedia: string;
};

const Share: React.FC<Props> = ({ pinmedia }) => {
  const router = useRouter();
  return (
    <div className='mx-auto mt-16 space-x-0.5 text-center'>
      <h3 className='mb-5 text-center font-content text-xl font-semibold text-gray-800 dark:text-gray-200'>
        Share this page
      </h3>
      <FacebookShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <FacebookIcon size={44} />
      </FacebookShareButton>
      <WhatsappShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <WhatsappIcon size={44} />
      </WhatsappShareButton>
      <LinkedinShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <LinkedinIcon size={44} />
      </LinkedinShareButton>
      <TwitterShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <TwitterIcon size={44} />
      </TwitterShareButton>
      <TelegramShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <TelegramIcon size={44} />
      </TelegramShareButton>
      <PinterestShareButton
        url={`https://garbhagudi.com${router.asPath}`}
        media={pinmedia}
      >
        <PinterestIcon size={44} />
      </PinterestShareButton>
      <RedditShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <RedditIcon size={44} />
      </RedditShareButton>
    </div>
  );
};

export default Share;
