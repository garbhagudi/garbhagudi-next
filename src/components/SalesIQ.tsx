import { useEffect } from 'react';

const SalesIQ = ({ widgetCode, domain, isBlogAndTreatmentPage }) => {
  useEffect(() => {
    const elem = document.getElementsByClassName('zsiq_floatmain')?.[0];
    const cont = document.getElementsByClassName('zls-sptwndw ')?.[0];
    if (elem instanceof HTMLElement && elem?.style) {
      elem.style.display = isBlogAndTreatmentPage ? 'none' : 'block';
      if (cont instanceof HTMLElement && cont?.style) {
        cont.style.display = isBlogAndTreatmentPage ? 'none' : 'block';
      }
    }
    if (isBlogAndTreatmentPage) return;
    if (document.getElementById('zsiqchat')) return;
    const script = document.createElement('script');
    script.id = 'zsiqchat';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    script.innerHTML = `
          var $zoho=$zoho || {};
          $zoho.salesiq = $zoho.salesiq || {
            widgetcode: "${widgetCode}",
            values: {},
            ready: function() {}
          };
          var d = document, s = d.createElement("script");
          s.type = "text/javascript";
          s.id = "zsiqscript";
          s.defer = true;
          s.src = "${domain}";
          var t = d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(s, t);
        `;
    document.body.appendChild(script);
  }, [isBlogAndTreatmentPage]);
  // if (!isBlogAndTreatmentPage) return null;
  return null;
};

export default SalesIQ;
