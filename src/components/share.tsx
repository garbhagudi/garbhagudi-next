import React from "react";
import { useRouter } from "next/router";
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
} from "next-share";

type Props = {
  pinmedia: string;
};

const Share: React.FC<Props> = ({ pinmedia }) => {
  const router = useRouter();
  return (
    <div className="space-x-2 mx-auto text-center mt-16">
      <h1 className="text-center font-content font-semibold text-xl mb-5">
        Share this page
      </h1>
      <FacebookShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <FacebookIcon size={44} round />
      </FacebookShareButton>
      <WhatsappShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <WhatsappIcon size={44} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <LinkedinIcon size={44} round />
      </LinkedinShareButton>
      <TwitterShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <TwitterIcon size={44} round />
      </TwitterShareButton>
      <TelegramShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <TelegramIcon size={44} round />
      </TelegramShareButton>
      <PinterestShareButton
        url={`https://garbhagudi.com${router.asPath}`}
        media={pinmedia}
      >
        <PinterestIcon size={44} round />
      </PinterestShareButton>
      <RedditShareButton url={`https://garbhagudi.com${router.asPath}`}>
        <RedditIcon size={44} round />
      </RedditShareButton>
    </div>
  );
};

export default Share;
