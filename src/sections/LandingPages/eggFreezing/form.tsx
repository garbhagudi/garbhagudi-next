import { useEffect, useState } from 'react';

const Form = () => {
  const [iframeSrc, setIframeSrc] = useState('/contact11.html');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const utmCampaign = queryParams.get('campaignid');
    const gclid = queryParams.get('gclid');
    if (utmCampaign) {
      setIframeSrc(`/contact11.html?utm_campaign=${utmCampaign}&gclid=${gclid}`);
    }
  }, []);
  return (
    <div
      className='relative flex w-[90%] max-w-md items-center justify-center rounded-lg bg-white p-8 shadow-lg'
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        id='contact5-iframe'
        title='contact5-iframe'
        src={iframeSrc}
        className='h-screen max-h-[20rem] max-w-sm'
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Form;
