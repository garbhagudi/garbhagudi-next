import React, { useEffect , useState } from 'react';

const Form = () => {
  const [iframeSrc, setIframeSrc] = useState('/contact5.html');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const utmCampaign = queryParams.get('campaign');
    if (utmCampaign) {
      setIframeSrc(`/contact5.html?utm_campaign=${utmCampaign}`);
    }
  }, []);
  return (
    <>
      <iframe
        id = 'contact5-iframe'
        src={iframeSrc}
        className='h-screen max-h-[350px] w-screen max-w-sm'
        loading='lazy'
      ></iframe>
    </>
  );
};

export default Form;
