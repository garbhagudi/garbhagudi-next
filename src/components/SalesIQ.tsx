import Script from 'next/script';

const SALESIQ_WIDGET_SRC =
  'https://salesiq.zohopublic.com/widget?wc=siq972f5d7b03057cc80029ab10323f5bbf044b7286b067ba3d6c1e851505d4c958';

/* Zoho auto-opens the chat window on load, which on mobile covers the whole screen.
 * On mobile (<768px) we hide the window from the start (before Zoho renders anything, so
 * there is no flash), quietly close Zoho's internal "open" state, and reveal it again on
 * the visitor's first tap of the chat bubble. Desktop is left as Zoho has it. */
const SALESIQ_BOOTSTRAP = `
window.$zoho=window.$zoho||{};
$zoho.salesiq=$zoho.salesiq||{ready:function(){}};
(function(){
  if(!window.matchMedia('(max-width: 767px)').matches) return;
  var root=document.documentElement;
  var style=document.createElement('style');
  style.textContent='html.siq-hold #zsiq_chat_wrap{visibility:hidden!important;opacity:0!important;pointer-events:none!important;transition:none!important}';
  document.head.appendChild(style);
  root.classList.add('siq-hold');
  var released=false, timer;
  function closeIfOpen(){
    var wrap=document.getElementById('zsiq_chat_wrap');
    var fw=window.$zoho&&$zoho.salesiq&&$zoho.salesiq.floatwindow;
    if(wrap&&wrap.className.indexOf('chat-iframe-open')>-1&&fw&&typeof fw.close==='function') fw.close();
  }
  function onTap(e){
    if(!(e.target&&e.target.closest&&e.target.closest('#zsiq_float'))) return;
    closeIfOpen();
    released=true;
    root.classList.remove('siq-hold');
    clearInterval(timer);
    document.removeEventListener('pointerdown',onTap,true);
    document.removeEventListener('touchstart',onTap,true);
  }
  document.addEventListener('pointerdown',onTap,true);
  document.addEventListener('touchstart',onTap,true);
  var tries=0;
  timer=setInterval(function(){ tries+=1; if(!released) closeIfOpen(); if(released||tries>100) clearInterval(timer); },300);
})();
`;

const SalesIQ = () => (
  <>
    <Script
      id='zoho-salesiq-bootstrap'
      strategy='lazyOnload'
      dangerouslySetInnerHTML={{ __html: SALESIQ_BOOTSTRAP }}
    />
    <Script id='zsiqscript' src={SALESIQ_WIDGET_SRC} strategy='lazyOnload' defer />
  </>
);

export default SalesIQ;
