(() => {
  const force = new URLSearchParams(location.search).get('boot') === '1';
  if (!force && sessionStorage.getItem('columbiaLaunchSeen') === '1') return;
  sessionStorage.setItem('columbiaLaunchSeen','1');
  const root=document.createElement('div'); root.className='columbia-boot'; root.setAttribute('role','dialog'); root.setAttribute('aria-label','Columbia AI launch sequence');
  root.innerHTML=`
    <div class="columbia-boot-grid"></div><div class="columbia-boot-scan"></div>
    <div class="boot-brand">COLUMBIA <span>AI</span><span class="boot-mode">Enterprise intelligence concept</span></div>
    <div class="boot-center">
      <div class="boot-building">${'<i class="boot-floor"></i>'.repeat(6)}</div>
      <div class="boot-core">CHIEF</div>
      <div class="boot-node bn1"><b><i></i>PROJECT INTELLIGENCE</b><span>Approved project context online</span></div>
      <div class="boot-node bn2"><b><i></i>FINANCIAL INTELLIGENCE</b><span>Forecast relationships online</span></div>
      <div class="boot-node bn3"><b><i></i>PEOPLE + KNOWLEDGE</b><span>Role-aware context online</span></div>
      <div class="boot-node bn4"><b><i></i>GOVERNANCE</b><span>Identity • policy • evidence active</span></div>
      <div class="boot-copy"><div class="boot-eyebrow">Paul's AI Vision • Columbia Construction</div><h1>Connecting the company to <em>what matters next.</em></h1><div class="boot-status" id="boot-status">Initializing governed intelligence layer…</div><div class="boot-progress"><i></i></div></div>
    </div>
    <div class="boot-ready">Concept environment • human authority preserved</div><button class="boot-skip" type="button">Enter experience →</button>`;
  document.body.appendChild(root);
  const status=root.querySelector('#boot-status');
  const states=[
    [800,'Resolving <strong>identity + role</strong>…'],
    [1550,'Connecting <strong>approved enterprise sources</strong>…'],
    [2350,'Mapping <strong>evidence + relationships</strong>…'],
    [3200,'Activating <strong>role-aware intelligence</strong>…'],
    [4050,'Governance active. <strong>Columbia AI ready.</strong>']
  ];
  const timers=states.map(([ms,html])=>setTimeout(()=>{if(status)status.innerHTML=html},ms));
  let gone=false;
  const exit=()=>{if(gone)return;gone=true;timers.forEach(clearTimeout);root.classList.add('is-leaving');setTimeout(()=>root.remove(),760)};
  root.querySelector('.boot-skip').addEventListener('click',exit);
  root.addEventListener('click',e=>{if(e.target===root||e.target.classList.contains('columbia-boot-grid')) exit()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'||e.key==='Enter'||e.key===' ')exit()},{once:true});
  setTimeout(exit,5600);
})();
