(() => {
  const HOME = '../index.html';
  function makeLink(extra=''){
    const a=document.createElement('a');
    a.href=HOME; a.className=('main-intro-return '+extra).trim();
    a.innerHTML='<span aria-hidden="true">←</span><span>Main Columbia Intro</span>';
    a.title='Return to the original Columbia introduction';
    return a;
  }
  function install(){
    if(document.querySelector('.main-intro-return')) return;
    const nav=document.querySelector('.rail .nav, aside.rail nav.nav');
    if(nav){ nav.appendChild(makeLink()); return; }
    const demoTools=document.querySelector('.top-right');
    if(demoTools){
      const a=makeLink();
      a.style.cssText='padding:10px 14px;border:1px solid rgba(75,208,255,.42);border-radius:999px;color:#dff8ff;background:rgba(3,17,28,.72);font-size:12px;';
      demoTools.insertBefore(a,demoTools.firstChild); return;
    }
    document.body.appendChild(makeLink('main-intro-float'));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
})();
