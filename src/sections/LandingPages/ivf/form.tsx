import React, { useEffect } from 'react';

const Form = () => {
  useEffect(() => {
    const iframeElement = document.getElementById('contact5-iframe') as HTMLIFrameElement;
    if (iframeElement) {
      const queryParams = new URLSearchParams(window.location.search);
      const utmCampaign = queryParams.get('utm_campaign');
      iframeElement.onload = () => {
        iframeElement.contentWindow?.postMessage({ utm_campaign: utmCampaign }, '*');
      };
    }
  }, []);
  return (
    <>
      <iframe
        id = 'contact5-iframe'
        src='/contact5.html'
        className='h-screen max-h-[350px] w-screen max-w-sm'
        loading='lazy'
      ></iframe>
    </>
  );
};

export default Form;
