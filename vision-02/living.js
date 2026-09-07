(() => {
  const page=document.body.dataset.page||'enterprise';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  function addScan(){ $$('.hero,.intel,.panel').forEach((el,i)=>{if(i<5){const s=document.createElement('div');s.className='live-scan';el.style.position='relative';el.appendChild(s);}}); }
  function addNetwork(){
    if(!['enterprise','executive','it','studio'].includes(page))return;
    const target=$('.hero'); if(!target)return;
    const n=document.createElement('div');n.className='live-network';
    n.innerHTML='<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M4 31 C20 4 32 35 49 17 S77 7 96 27"/><path d="M8 10 C27 27 43 4 60 24 S82 35 95 9"/><circle cx="18" cy="18" r="1.3"/><circle cx="49" cy="17" r="1.3"/><circle cx="75" cy="13" r="1.3"/><circle cx="90" cy="25" r="1.3"/></svg>';
    target.appendChild(n);
  }
  function boot(){
    if(page!=='enterprise'||sessionStorage.getItem('columbiaBooted'))return;
    const b=document.createElement('div');b.className='live-boot';b.innerHTML='<div class="boot-box"><div class="boot-brand">COLUMBIA <b>AI</b></div><div class="boot-line">Connecting approved enterprise sources <span class="ok">✓</span></div><div class="boot-line">Project Intelligence <span class="ok">✓</span></div><div class="boot-line">Financial Intelligence <span class="ok">✓</span></div><div class="boot-line">Knowledge + People <span class="ok">✓</span></div><div class="boot-line">Governance active <span class="ok">✓</span></div><div class="boot-progress"><i></i></div><div class="boot-final">Good morning. Two things need your attention.</div></div>';
    document.body.appendChild(b); const lines=$$('.boot-line',b),bar=$('.boot-progress i',b),fin=$('.boot-final',b);
    lines.forEach((l,i)=>setTimeout(()=>l.classList.add('show'),250+i*260));setTimeout(()=>bar.style.width='100%',300);setTimeout(()=>fin.classList.add('show'),1600);setTimeout(()=>{b.classList.add('done');sessionStorage.setItem('columbiaBooted','1');},2700);setTimeout(()=>b.remove(),3500);
  }
  function ambient(){
    const mode=document.createElement('div');mode.className='live-mode';mode.innerHTML='<i></i> Living intelligence • concept';document.body.appendChild(mode);
    const metrics=$$('.metric-card'),recs=$$('.recommend');let m=0,r=0;
    setInterval(()=>{if(document.hidden||!metrics.length)return;metrics.forEach(x=>x.classList.remove('live-flash'));metrics[m%metrics.length].classList.add('live-flash');m++;},5200);
    setInterval(()=>{if(document.hidden||!recs.length)return;recs.forEach(x=>x.classList.remove('live-focus'));recs[r%recs.length].classList.add('live-focus');r++;},4200);
  }
  function processingEnhance(){
    document.addEventListener('click',e=>{
      const btn=e.target.closest('.btn'); if(!btn)return; const text=btn.textContent.toLowerCase();
      if(/scenario|analy|forecast|capture|compare|brief|update|risk|scope|expert|govern|prototype|roi/.test(text)){
        btn.dataset.old=btn.textContent; btn.textContent='◌ Processing…'; btn.style.minWidth=btn.offsetWidth+'px';
        setTimeout(()=>{btn.textContent=btn.dataset.old||'View result';btn.style.minWidth='';},900);
      }
    },true);
  }
  function liveCharts(){
    // Re-trigger chart drawing when scenario/forecast controls are used.
    document.addEventListener('click',e=>{const t=e.target.closest('.btn');if(!t)return;if(!/scenario|forecast|analysis/i.test(t.textContent))return;$$('.chart-actual,.chart-forecast').forEach(el=>{el.style.animation='none';void el.getBoundingClientRect();el.style.animation='';});});
  }
  boot();addScan();addNetwork();ambient();processingEnhance();liveCharts();
})();
