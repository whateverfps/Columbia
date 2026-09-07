(() => {
  const page = document.body.dataset.page || 'enterprise';
  const role = {
    enterprise:{name:'Enterprise Command',request:'What needs enterprise attention right now?',sources:['Project portfolio','Schedule intelligence','Cost / forecast','Approved knowledge'],role:'Executive / enterprise',classification:'Internal — governed'},
    executive:{name:'Executive Intelligence',request:'Which issues require an executive decision, and which can remain delegated?',sources:['Portfolio status','Forecast movement','Schedule exposure','Leadership thresholds'],role:'Executive',classification:'Internal — leadership'},
    project:{name:'Project Intelligence',request:"What could stop tomorrow’s planned work?",sources:['Schedule / look-ahead','RFIs','Submittals','Drawings + field inputs'],role:'PM / Superintendent',classification:'Project confidential'},
    preconstruction:{name:'Preconstruction Intelligence',request:'Where do drawings, specifications and bid coverage disagree?',sources:['Drawings','Specifications','Estimate / bid tabs','Historical lessons'],role:'Preconstruction',classification:'Project / bid confidential'},
    finance:{name:'Finance Intelligence',request:'What is moving projected margin, and what evidence explains the change?',sources:['Project cost','Forecast','Change exposure','Schedule / procurement'],role:'Finance',classification:'Financial — restricted'},
    people:{name:'People Intelligence',request:'Where will Columbia need capability next, and who may fit?',sources:['Staffing plan','Project pipeline','Role history','Skills / availability'],role:'People / leadership',classification:'HR — restricted'},
    it:{name:'IT & Knowledge',request:'Show exactly how this AI response was authorized, sourced and logged.',sources:['Identity provider','Source registry','Policy engine','Audit / telemetry'],role:'IT / AI governance',classification:'Security / system metadata'},
    studio:{name:'Columbia Studio',request:'Can this employee idea become a low-risk pilot with a measurable outcome?',sources:['Discovery intake','Workflow map','Risk tier','Pilot scorecard'],role:'AI Program / business owner',classification:'Internal — innovation'},
    journey:{name:'AI Journey',request:'What must be true before Columbia safely scales this capability?',sources:['System inventory','Data ownership','Pilot scorecards','Governance controls'],role:'Program leadership',classification:'Internal — program'},
    'business-case':{name:'Business Case',request:'Which measured outcomes would justify continued AI investment?',sources:['Pilot metrics','Time saved','Risk avoided','Adoption / value'],role:'Executive / finance',classification:'Illustrative until measured'}
  }[page];
  if(!role) return;

  // Fix role pages where CTA color inherited dark primary-button text.
  document.querySelectorAll('.pv-explore').forEach(el=>{el.style.color='#eaffff'; el.querySelectorAll('*').forEach(n=>n.style.color='#eaffff')});

  // Finance: make the Margin Time Machine graph actually respond to the slider.
  function wireFinance(){
    if(page!=='finance') return;
    const stage=document.querySelector('.pv-stage'); if(!stage) return;
    const svg=stage.querySelector('.pv-finance .curve svg');
    const paths=svg ? svg.querySelectorAll('path') : [];
    if(paths.length<2) return;
    paths[0].id='pvActualCurve'; paths[1].id='pvForecastCurve';
    let actual=stage.querySelector('#pvActualCurve'), forecast=stage.querySelector('#pvForecastCurve');
    const axis=document.createElementNS('http://www.w3.org/2000/svg','g'); axis.setAttribute('class','pv-fin-axis');
    axis.innerHTML='<line x1="0" y1="70" x2="1000" y2="70"/><line x1="0" y1="140" x2="1000" y2="140"/><line x1="0" y1="210" x2="1000" y2="210"/><text x="8" y="66">10%</text><text x="8" y="136">8%</text><text x="8" y="206">6%</text><text x="700" y="286">FORECAST →</text>';
    svg.insertBefore(axis,svg.firstChild);
    const style=document.createElement('style'); style.textContent='.pv-fin-axis line{stroke:rgba(72,181,221,.13);stroke-width:1}.pv-fin-axis text{fill:#6d9bb1;font-size:11px;letter-spacing:.08em}.pv-finance .curve path{transition:d .3s ease,filter .25s ease}.pv-finance .curve .scenario-dot{fill:#f4ffff;stroke:#39d5ff;stroke-width:4;filter:drop-shadow(0 0 8px #39d5ff)}'; document.head.appendChild(style);
    const dot=document.createElementNS('http://www.w3.org/2000/svg','circle'); dot.setAttribute('class','scenario-dot');dot.setAttribute('r','7');dot.setAttribute('cx','720');dot.setAttribute('cy','120');svg.appendChild(dot);
    const s=stage.querySelector('#pvSlider'); if(!s) return;
    const update=()=>{
      const v=+s.value;
      const margin=Math.max(5.8,Math.min(9.4,8.8+v*.10));
      const risk=Math.max(14,19+Math.abs(Math.min(v,0))*1.0-Math.max(v,0)*.55);
      const cash=Math.max(2,18+Math.abs(Math.min(v,0))*2-Math.max(v,0)*2);
      const startY=120;
      const endY=Math.max(70,Math.min(250,120 + (8.8-margin)*32));
      const mid1=startY+(endY-startY)*.35, mid2=startY+(endY-startY)*.72;
      forecast.setAttribute('d',`M720 ${startY} C790 ${mid1.toFixed(1)} 865 ${mid2.toFixed(1)} 1000 ${endY.toFixed(1)}`);
      dot.setAttribute('cy',String(startY));
      stage.querySelector('#pvSliderLabel').textContent=`${v>0?'+':''}${v}%`;
      stage.querySelector('#pvProd').textContent=`${v>0?'+':''}${v}%`;
      stage.querySelector('#pvMargin').textContent=`${margin.toFixed(1)}%`;
      stage.querySelector('#pvRiskValue').textContent=`$${risk.toFixed(0)}M`;
      const cashNode=[...stage.querySelectorAll('.pv-finance .pv-kpi')].find(x=>x.textContent.includes('Cash timing'))?.querySelector('b'); if(cashNode)cashNode.textContent=`+${cash.toFixed(0)} days`;
      stage.querySelector('#pvScenarioText').textContent=`Projected margin: ${margin.toFixed(1)}% • At-risk value: $${risk.toFixed(0)}M • Cash timing: +${cash.toFixed(0)} days`;
    };
    s.oninput=update; update();
  }
  setTimeout(wireFinance,50);

  // Build a useful, role-aware System X-Ray workspace instead of a decorative outline mode.
  const xray=document.createElement('section'); xray.className='xray-workspace'; xray.setAttribute('aria-hidden','true');
  const sourceRows=role.sources.map((s,i)=>`<div class="xray-source"><i>${i+1}</i><div><b>${s}</b><small>${i===0?'Authoritative / structured':i===1?'Approved role source':'Retrieved only when relevant'}</small></div><em>Allowed</em></div>`).join('');
  xray.innerHTML=`<div class="xray-shell">
    <header class="xray-head"><div><div class="xray-kicker">System X-Ray • ${role.name}</div><h1 class="xray-title">See what happened underneath the answer.</h1><div class="xray-sub">This is the useful side of governance: who asked, what they were allowed to see, which approved sources were queried, what evidence came back, what AI prepared, and where human authority still begins.</div></div><div class="xray-actions"><button class="xray-btn primary" data-xray-run>Run request trace</button><button class="xray-btn" data-xray-back>Back to dashboard</button><button class="xray-btn" data-xray-close>Close ×</button></div></header>
    <div class="xray-request"><div class="xray-card"><div class="xray-live">Concept trace ready</div><h3>Current role request</h3><div class="big">“${role.request}”</div><p>The X-Ray follows a safe processing trace. It does not expose private model reasoning; it shows authorization, retrieval, evidence, controls and the resulting action boundary.</p></div><div class="xray-card"><h3>Request context</h3><div class="xray-status"><div class="xray-stat"><small>User role</small><b>${role.role}</b></div><div class="xray-stat"><small>Data class</small><b>${role.classification}</b></div><div class="xray-stat"><small>Policy result</small><b class="xray-ok">Allowed</b></div></div></div></div>
    <div class="xray-pipeline"><div class="xray-node" data-node="0"><span>01</span><b>Identity</b><i>User + role</i></div><div class="xray-node" data-node="1"><span>02</span><b>Intent</b><i>Request classified</i></div><div class="xray-node" data-node="2"><span>03</span><b>Policy</b><i>Permissions checked</i></div><div class="xray-node" data-node="3"><span>04</span><b>Retrieve</b><i>Approved sources only</i></div><div class="xray-node" data-node="4"><span>05</span><b>Evidence</b><i>Records ranked</i></div><div class="xray-node" data-node="5"><span>06</span><b>Compose</b><i>Source-backed response</i></div><div class="xray-node" data-node="6"><span>07</span><b>Human action</b><i>Authority preserved</i></div></div>
    <div class="xray-grid">
      <div class="xray-card"><h3>Approved source access</h3><div class="xray-tabs"><button class="xray-tab active" data-tab="sources">Sources</button><button class="xray-tab" data-tab="matrix">Permission matrix</button></div><div class="xray-pane active" data-pane="sources">${sourceRows}</div><div class="xray-pane" data-pane="matrix"><table class="xray-matrix"><tr><th>Capability</th><th>Read</th><th>Write</th></tr><tr><td>Project / role data</td><td><span class="xray-pill yes">Allowed</span></td><td><span class="xray-pill review">Review</span></td></tr><tr><td>Cross-role restricted data</td><td><span class="xray-pill no">Blocked</span></td><td><span class="xray-pill no">Blocked</span></td></tr><tr><td>Create recommendation</td><td><span class="xray-pill yes">Allowed</span></td><td><span class="xray-pill yes">Draft only</span></td></tr><tr><td>Commit business action</td><td>—</td><td><span class="xray-pill review">Human approval</span></td></tr></table></div></div>
      <div class="xray-card"><h3>Safe processing trace</h3><div class="xray-trace"><div class="xray-step"><i>1</i><div><b>Identity verified</b><span>Role and session context resolved.</span></div><em>PASS</em></div><div class="xray-step"><i>2</i><div><b>Policy evaluated</b><span>Requested data compared to role permissions.</span></div><em>PASS</em></div><div class="xray-step"><i>3</i><div><b>Approved sources queried</b><span>${role.sources.length} source families available for this concept request.</span></div><em>TRACE</em></div><div class="xray-step"><i>4</i><div><b>Evidence assembled</b><span>Relevant records ranked and attached to the response.</span></div><em>TRACE</em></div><div class="xray-step"><i>5</i><div><b>Response prepared</b><span>Recommendation created without committing an action.</span></div><em>DRAFT</em></div><div class="xray-step"><i>6</i><div><b>Audit record written</b><span>Request, access decision and cited sources logged.</span></div><em>LOGGED</em></div></div></div>
      <div class="xray-card"><h3>Evidence returned</h3><div class="xray-evidence"><div class="xray-evidence-item"><b>${role.sources[0]}</b><p>Primary evidence record • authoritative concept source.</p><div class="xray-confidence"><i style="width:94%"></i></div></div><div class="xray-evidence-item"><b>${role.sources[1]}</b><p>Corroborating context • used to explain why the signal matters.</p><div class="xray-confidence"><i style="width:86%"></i></div></div><div class="xray-evidence-item"><b>${role.sources[2]}</b><p>Supporting context • retrieved only because it intersects the request.</p><div class="xray-confidence"><i style="width:78%"></i></div></div></div><div class="xray-action-boundary"><div><b>AI can prepare. People authorize.</b><span>Chief may summarize, compare, forecast and draft a next step. The actual business commitment stays with the accountable Columbia role.</span></div><button class="xray-btn" data-xray-evidence>View evidence detail</button></div></div>
    </div>
  </div>`;
  document.body.appendChild(xray);
  const open=()=>{xray.classList.add('open');xray.setAttribute('aria-hidden','false');document.querySelector('.main')?.scrollTo({top:0,behavior:'instant'});};
  const close=()=>{xray.classList.remove('open');xray.setAttribute('aria-hidden','true')};
  document.querySelectorAll('.pv-mini-xray').forEach(b=>b.onclick=open);
  xray.querySelector('[data-xray-close]').onclick=close; xray.querySelector('[data-xray-back]').onclick=close;
  xray.querySelectorAll('.xray-tab').forEach(btn=>btn.onclick=()=>{xray.querySelectorAll('.xray-tab').forEach(x=>x.classList.toggle('active',x===btn));xray.querySelectorAll('.xray-pane').forEach(p=>p.classList.toggle('active',p.dataset.pane===btn.dataset.tab));});
  xray.querySelector('[data-xray-run]').onclick=()=>{const nodes=[...xray.querySelectorAll('.xray-node')];nodes.forEach(n=>n.classList.remove('active','done'));nodes.forEach((n,i)=>setTimeout(()=>{nodes.forEach(x=>x.classList.remove('active'));n.classList.add('active');if(i>0)nodes[i-1].classList.add('done');if(i===nodes.length-1)setTimeout(()=>{n.classList.remove('active');n.classList.add('done')},550)},i*520));};
  xray.querySelector('[data-xray-evidence]').onclick=()=>{const first=xray.querySelector('.xray-evidence-item');first.style.boxShadow='0 0 0 1px #42d9ff,0 0 34px rgba(66,217,255,.15)';first.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>first.style.boxShadow='',1600)};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&xray.classList.contains('open'))close()});
})();
