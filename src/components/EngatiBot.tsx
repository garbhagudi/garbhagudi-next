import { useEffect } from 'react';

const EngatiBot = ({ isBlogAndTreatmentPage }) => {
  useEffect(() => {
    const elem = document.getElementById('engtWrapper');
    if (elem instanceof HTMLElement && elem.style) {
      elem.style.display = isBlogAndTreatmentPage ? 'block' : 'none';
    }
    if (!isBlogAndTreatmentPage) return;
    if (document.getElementById('engati-bot-script')) return;
    const script = document.createElement('script');
    script.id = 'engati-bot-script';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    script.innerHTML = `           (function(e,t,a){
              var c=e.head||e.getElementsByTagName("head")[0],
                  n=e.createElement("script");
              n.async=!0;
              n.defer=!0;
              n.type="text/javascript";
              n.src=t+"/static/js/widget.js?config="+JSON.stringify(a);
              c.appendChild(n);
            })(document,"https://app.engati.com",{
              bot_key:"ce000a8e2dc64673",
              welcome_msg:true,
              branding_key:"default",
              server:"https://app.engati.com",
              e:"p"
            }); `;
    document.body.appendChild(script);
  }, [isBlogAndTreatmentPage]);

  return null;
};

export default EngatiBot;
