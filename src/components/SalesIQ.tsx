import Script from 'next/script';

const SALESIQ_WIDGET_SRC =
  'https://salesiq.zohopublic.com/widget?wc=siq972f5d7b03057cc80029ab10323f5bbf044b7286b067ba3d6c1e851505d4c958';

const SalesIQ = () => (
  <>
    <Script
      id='zoho-salesiq-bootstrap'
      strategy='lazyOnload'
      dangerouslySetInnerHTML={{
        __html: 'window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}',
      }}
    />
    <Script id='zsiqscript' src={SALESIQ_WIDGET_SRC} strategy='lazyOnload' defer />
  </>
);

export default SalesIQ;
