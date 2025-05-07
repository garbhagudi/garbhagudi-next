import { useEffect } from 'react';
import SalesIQ from './SalesIQ';

const SalesIQWrapper = ({ widgetCode, domain }) => {
  useEffect(() => {
    return () => {
      // Cleanup the SalesIQ widget (Zoho)
      const zohoScript = document.querySelector('script[src*="salesiq.zoho.com"]');
      if (zohoScript) zohoScript.remove();

      const zohoContainer = document.getElementById('zsiqwidget');
      if (zohoContainer) zohoContainer.remove();
    };
  }, []);

  return <SalesIQ widgetCode={widgetCode} domain={domain} />;
};

export default SalesIQWrapper;
