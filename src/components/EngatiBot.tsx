import { useEffect } from 'react';

const EngatiBot = ({ isBlogAndTreatmentPage }) => {
  useEffect(() => {
    const toggleWrapperDisplay = () => {
      const elem = document.getElementById('engtWrapper');
      if (elem instanceof HTMLElement && elem.style) {
        elem.style.display = isBlogAndTreatmentPage ? 'block' : 'none';
      }
    };

    toggleWrapperDisplay();

    if (!isBlogAndTreatmentPage || document.getElementById('engati-bot-script')) return;

    const loadBot = () => {
      const script = document.createElement('script');
      script.id = 'engati-bot-script';
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';
      script.src =
        'https://app.engati.com/static/js/widget.js?config=' +
        encodeURIComponent(
          JSON.stringify({
            bot_key: 'ce000a8e2dc64673',
            welcome_msg: true,
            branding_key: 'default',
            server: 'https://app.engati.com',
            e: 'p',
          })
        );
      document.head.appendChild(script);
    };

    // Defer with requestIdleCallback if available
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadBot);
    } else {
      setTimeout(loadBot, 2000); // fallback
    }

    // Clean up on unmount
    return () => {
      const existingScript = document.getElementById('engati-bot-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [isBlogAndTreatmentPage]);

  return null;
};

export default EngatiBot;
