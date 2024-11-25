import React, { useEffect, useState } from 'react';

const Form = () => {
  const [iframeSrc, setIframeSrc] = useState('/contact8.html');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const utmCampaign = queryParams.get('campaignid');
    const gclid = queryParams.get('gclid');
    if (utmCampaign) {
      setIframeSrc(`/contact8.html?utm_campaign=${utmCampaign}&gclid=${gclid}`);
    }
  }, []);
  return (
    <iframe
      id='contact5-iframe'
      title='contact5-iframe'
      src={iframeSrc}
      className='h-screen max-h-[15rem] w-screen max-w-sm'
      loading='lazy'
    ></iframe>
  );
};

export default Form;
