(() => {
  const page = document.body.dataset.page || location.pathname.split('/').pop().replace('.html','') || 'enterprise';
  const cfg = {
    enterprise:{label:"Enterprise Nervous System",title:"Paul's Enterprise AI Nervous System",desc:"Watch one project signal become role-specific intelligence across Columbia — without replacing the systems people already trust."},
    executive:{label:"Decision Theater",title:"Paul's Executive Decision Theater",desc:"A portfolio-level view where AI compresses hundreds of signals into the few decisions leadership should actually care about."},
    project:{label:"Tomorrow's Jobsite",title:"Paul's Living Jobsite",desc:"Plans, schedule, RFIs, field reality and constraints collapse into one forward-looking view of tomorrow's work."},
    preconstruction:{label:"Scope X-Ray",title:"Paul's Preconstruction Scope X-Ray",desc:"Drawings, specifications, estimates, bids and lessons learned separate into layers so gaps become visible before they become field problems."},
    finance:{label:"Margin Time Machine",title:"Paul's Margin Time Machine",desc:"Finance can move assumptions and watch project-level risk propagate into margin, cash and portfolio outcomes in real time."},
    people:{label:"Workforce Constellation",title:"Paul's Workforce Constellation",desc:"Columbia's people become a living capability map — experience, availability, project demand and internal expertise connected together."},
    it:{label:"Governance Flight Deck",title:"Paul's AI Governance Flight Deck",desc:"Every AI interaction visibly passes through identity, permissions, approved sources, policy and traceability before intelligence reaches a role."},
    studio:{label:"Idea Forge",title:"Paul's AI Idea Forge",desc:"Turn an employee idea into a governed prototype, pilot, measurement plan and scalable capability — without losing the human who understood the problem."},
    journey:{label:"Transformation Tunnel",title:"Paul's Transformation Journey",desc:"Discovery becomes structure, structure becomes pilots, pilots become measured proof, and proof becomes a durable internal AI capability."},
    'business-case':{label:"Value Engine",title:"Paul's AI Value Engine",desc:"Connect adoption, time saved, risk reduction and margin protection to an illustrative economic model instead of treating AI as a technology expense."}
  };
  if (!cfg[page]) return;
  const c = cfg[page];

  function stageMarkup(){
    const common = `<button class="pv-close" aria-label="Close">×</button><div class="pv-stagehead"><div class="eyebrow">EXPLORE PAUL'S AI VISION • ${c.label}</div><h2>${c.title}</h2><p>${c.desc}</p></div><div class="pv-demo-badge">CONCEPT EXPERIENCE • ILLUSTRATIVE DATA • HUMAN REVIEW REQUIRED</div>`;
    const scenes = {
      enterprise:`<div class="pv-scene pv-enterprise pv-enterprise-v21">
  <div class="pv-v21-grid"></div>
  <div class="pv-v21-signal">
    <div class="pv-v21-kicker"><i></i> LIVE PROJECT SIGNAL</div>
    <div class="pv-v21-project">PROJECT 318 <span>Electrical</span></div>
    <h3>Long-lead switchgear<br><b>+3 week exposure</b></h3>
    <div class="pv-v21-facts"><span>Milestone</span><b>Electrical energization</b><span>Confidence</span><b class="good">High · 4 sources</b></div>
    <div class="pv-v21-source"><span>PROCORE</span><span>SUBMITTAL</span><span>SCHEDULE</span><span>FIELD</span></div>
  </div>
  <div class="pv-v21-travel"><i></i><i></i><i></i></div>
  <div class="pv-v21-brain">
    <div class="pv-v21-orbit o1"></div><div class="pv-v21-orbit o2"></div><div class="pv-v21-orbit o3"></div>
    <div class="pv-v21-core"><b>CHIEF</b><span>ENTERPRISE INTELLIGENCE</span></div>
    <div class="pv-v21-state s1"><small>01</small><b>DETECT</b><span>Project risk recognized</span></div>
    <div class="pv-v21-state s2"><small>02</small><b>VERIFY</b><span>Evidence + permissions checked</span></div>
    <div class="pv-v21-state s3"><small>03</small><b>CONNECT</b><span>Related company context found</span></div>
    <div class="pv-v21-state s4"><small>04</small><b>INTERPRET</b><span>Impact translated by role</span></div>
    <div class="pv-v21-state s5"><small>05</small><b>RECOMMEND</b><span>Human action prepared</span></div>
  </div>
  <div class="pv-v21-roles">
    <div class="pv-v21-role r1"><em>PROJECT</em><b>Protect energization milestone</b><span>Expedite submittal + procurement review</span><small>SCHEDULE · FIELD</small></div>
    <div class="pv-v21-role r2"><em>PRECON</em><b>Historical pattern found</b><span>3 similar procurement delays identified</span><small>LESSONS · BUYOUT</small></div>
    <div class="pv-v21-role r3"><em>FINANCE</em><b>Margin exposure quantified</b><span>Potential cost / cash impact now visible</span><small>COST · CASH · FORECAST</small></div>
    <div class="pv-v21-role r4"><em>PEOPLE</em><b>Leadership capacity checked</b><span>Electrical expertise + availability matched</span><small>EXPERIENCE · CAPACITY</small></div>
    <div class="pv-v21-role r5"><em>IT + KNOWLEDGE</em><b>Evidence trail verified</b><span>Identity, policy and approved sources passed</span><small>GOVERNANCE · SOURCES</small></div>
    <div class="pv-v21-role r6"><em>EXECUTIVE</em><b>No escalation yet</b><span>Monitor until recovery window closes</span><small>PORTFOLIO · DECISION</small></div>
  </div>
  <div class="pv-v21-response">
    <div><small>RECOMMENDED ENTERPRISE RESPONSE</small><b>Accelerate procurement review now.</b><span>Potential recovery: <strong>2–3 weeks</strong></span></div>
    <div class="pv-v21-authority"><small>HUMAN AUTHORITY</small><b>Required</b><span>AI prepares · Columbia decides</span></div>
  </div>
</div>`,
      executive:`<div class="pv-scene pv-executive"><div class="horizon"></div><div class="pv-decision-stack"><i></i><i></i><i></i></div><div class="risk-orb r1"></div><div class="risk-orb r2"></div><div class="risk-orb r3"></div><div class="pv-hud" style="left:4%;top:8%;width:250px"><h4>Portfolio compression</h4><div class="pv-big">14 → 2</div><div class="pv-dim">projects requiring executive attention</div></div><div class="pv-hud" style="right:4%;bottom:9%;width:290px"><h4>Chief's executive interpretation</h4><div class="pv-kpi"><span>Project 214</span><b class="pv-risk">Watch now</b></div><div class="pv-kpi"><span>Project 318</span><b class="pv-amber">Management action</b></div><div class="pv-kpi"><span>Remaining portfolio</span><b class="pv-good">No escalation</b></div></div><div class="pv-hud" style="left:18%;bottom:8%;width:230px"><h4>Decision horizon</h4><div class="pv-kpi"><span>30 days</span><b>Operational</b></div><div class="pv-kpi"><span>90 days</span><b>Financial</b></div><div class="pv-kpi"><span>12 months</span><b>Strategic</b></div></div></div>`,
      project:`<div class="pv-scene pv-project"><div class="plan"><i class="zone z1"></i><i class="zone z2"></i><i class="zone z3"></i></div><div class="pv-rfi">RFI-142 • Electrical room clearance conflict</div><div class="pv-hud" style="left:4%;top:8%;width:250px"><h4>Tomorrow readiness</h4><div class="pv-kpi"><span>Crews ready</span><b class="pv-good">8 / 9</b></div><div class="pv-kpi"><span>Constraints</span><b class="pv-risk">1 critical</b></div><div class="pv-kpi"><span>Submittals</span><b class="pv-good">Clear</b></div></div><div class="pv-hud" style="right:4%;top:8%;width:280px"><h4>AI checks</h4><div class="pv-kpi"><span>Drawing</span><b>Compared</b></div><div class="pv-kpi"><span>Specification</span><b>Matched</b></div><div class="pv-kpi"><span>Schedule</span><b class="pv-risk">2-day exposure</b></div><div class="pv-kpi"><span>Field photo</span><b>Located</b></div></div><div class="pv-hud" style="right:4%;bottom:7%;width:300px"><h4>Recommended superintendent action</h4><div class="pv-kpi"><span>Resolve RFI-142 before mobilization</span><b class="pv-amber">Today</b></div></div></div>`,
      preconstruction:`<div class="pv-scene pv-preconstruction"><div class="sheet s1"></div><div class="sheet s2"></div><div class="sheet s3"></div><div class="gap"></div><div class="pv-hud" style="left:4%;top:10%;width:255px"><h4>Layers separated</h4><div class="pv-kpi"><span>Architectural</span><b>Rev 06</b></div><div class="pv-kpi"><span>MEP</span><b>Rev 05</b></div><div class="pv-kpi"><span>Specifications</span><b>Issued</b></div><div class="pv-kpi"><span>Bid scope</span><b>Mapped</b></div></div><div class="pv-hud" style="right:4%;bottom:9%;width:300px"><h4>Scope intelligence</h4><div class="pv-kpi"><span>Missing controls responsibility</span><b class="pv-risk">Gap</b></div><div class="pv-kpi"><span>Historical projects</span><b>4 matches</b></div><div class="pv-kpi"><span>Suggested next step</span><b class="pv-amber">Clarify bid</b></div></div></div>`,
      finance:`<div class="pv-scene pv-finance"><div class="finance-grid"></div><div class="curve"><svg viewBox="0 0 1000 300" preserveAspectRatio="none"><path d="M0 160 C120 120 190 145 280 110 S430 125 520 95 S650 105 720 120"/><path class="forecast" d="M720 120 C790 145 850 185 1000 225"/></svg></div><div class="pv-hud" style="left:5%;top:8%;width:260px"><h4>Scenario inputs</h4><div class="pv-kpi"><span>Labor productivity</span><b id="pvProd">−4%</b></div><div class="pv-kpi"><span>Procurement delay</span><b>3 weeks</b></div><div class="pv-kpi"><span>Pending COs</span><b>$1.2M</b></div></div><div class="pv-hud" style="right:5%;top:8%;width:260px"><h4>Portfolio effect</h4><div class="pv-kpi"><span>Projected margin</span><b id="pvMargin" class="pv-risk">8.4%</b></div><div class="pv-kpi"><span>At-risk value</span><b id="pvRiskValue">$23M</b></div><div class="pv-kpi"><span>Cash timing</span><b class="pv-amber">+18 days</b></div></div><div class="pv-scenario-control"><label><span>Move labor productivity assumption</span><b id="pvSliderLabel">−4%</b></label><input id="pvSlider" type="range" min="-10" max="5" value="-4"><div class="pv-scenario-output" id="pvScenarioText">Projected margin: 8.4%</div></div></div>`,
      people:`<div class="pv-scene pv-people"><div class="constellation">${peopleNodes()}${peopleLines()}</div><div class="pv-hud" style="left:4%;top:8%;width:255px"><h4>Project demand</h4><div class="pv-kpi"><span>Project 214</span><b>Senior Superintendent</b></div><div class="pv-kpi"><span>Need date</span><b class="pv-amber">6 weeks</b></div><div class="pv-kpi"><span>Critical skills</span><b>Healthcare / MEP</b></div></div><div class="pv-hud match-card"><h4>Best internal match</h4><div class="pv-big">92%</div><div class="pv-dim">experience + availability + project fit</div><div class="pv-kpi"><span>Healthcare experience</span><b class="pv-good">Strong</b></div><div class="pv-kpi"><span>Availability</span><b class="pv-good">5 weeks</b></div><div class="pv-kpi"><span>Mentorship fit</span><b>High</b></div></div></div>`,
      it:`<div class="pv-scene pv-it"><div class="security-ring"></div><div class="pipeline"><div class="pv-gate">PROCORE<br><span class="pv-dim">Project data</span></div><div class="pv-gate">IDENTITY<br><span class="pv-dim">User + role</span></div><div class="pv-gate">POLICY<br><span class="pv-dim">Permission check</span></div><div class="pv-gate">COLUMBIA AI<br><span class="pv-dim">Reasoning</span></div><div class="pv-gate">EVIDENCE<br><span class="pv-dim">Source trace</span></div><div class="pv-gate">ROLE VIEW<br><span class="pv-dim">Action</span></div><div class="pv-packet"></div></div><div class="pv-hud" style="left:4%;top:8%;width:270px"><h4>Governance in motion</h4><div class="pv-kpi"><span>Identity</span><b class="pv-good">Verified</b></div><div class="pv-kpi"><span>Permissions</span><b class="pv-good">Allowed</b></div><div class="pv-kpi"><span>Approved sources</span><b>4 queried</b></div><div class="pv-kpi"><span>Audit trace</span><b class="pv-good">Written</b></div></div><div class="pv-hud" style="right:4%;top:8%;width:280px"><h4>What AI never bypasses</h4><div class="pv-kpi"><span>System of record</span><b>Preserved</b></div><div class="pv-kpi"><span>Human approval</span><b>Required</b></div><div class="pv-kpi"><span>Access controls</span><b>Inherited</b></div></div></div>`,
      studio:`<div class="pv-scene pv-studio"><div class="pv-forge-beam"></div><div class="forge"></div><div class="pv-idea i1"><b>FIELD IDEA</b>“Can AI compare tomorrow's work to open constraints?”</div><div class="pv-idea i2"><b>PROTOTYPE</b>Connect schedule + RFIs + submittals + manpower.</div><div class="pv-idea i3"><b>PILOT</b>Run on one project for 30 days. Measure time saved and misses prevented.</div><div class="pv-idea i4"><b>SCALE</b>Only promote if adoption, safety and value thresholds are met.</div><div class="pv-hud" style="left:50%;bottom:5%;width:360px;transform:translateX(-50%)"><h4>Idea-to-impact pipeline</h4><div class="pv-kpi"><span>Owner</span><b>Operations</b></div><div class="pv-kpi"><span>Risk tier</span><b class="pv-good">Low</b></div><div class="pv-kpi"><span>Pilot metric</span><b>Time back + misses caught</b></div></div></div>`,
      journey:`<div class="pv-scene pv-journey"><div class="tunnel"><i class="pv-ring"></i><i class="pv-ring"></i><i class="pv-ring"></i><i class="pv-ring"></i><i class="pv-ring"></i><div class="traveler"></div></div><span class="pv-phase p1">DISCOVER</span><span class="pv-phase p2">CONNECT</span><span class="pv-phase p3">PILOT</span><span class="pv-phase p4">PROVE</span><span class="pv-phase p5">SCALE</span><div class="pv-hud" style="left:4%;top:8%;width:250px"><h4>Start with reality</h4><div class="pv-kpi"><span>Systems</span><b>Mapped</b></div><div class="pv-kpi"><span>Data ownership</span><b>Known</b></div><div class="pv-kpi"><span>Manual bridges</span><b>Found</b></div></div><div class="pv-hud" style="right:4%;bottom:8%;width:280px"><h4>End with capability</h4><div class="pv-kpi"><span>Measured pilots</span><b class="pv-good">Scaled</b></div><div class="pv-kpi"><span>Governance</span><b>Embedded</b></div><div class="pv-kpi"><span>AI ownership</span><b>Internal</b></div></div></div>`,
      'business-case':`<div class="pv-scene pv-business-case"><div class="engine"><div class="engine-value"><span class="pv-dim">ILLUSTRATIVE ANNUAL VALUE</span><b id="pvValue">$8.4M</b><span class="pv-good" id="pvRoi">412% 3-YR ROI</span></div></div><div class="driver d1"><b>TIME BACK</b><br><span class="pv-dim">Hours returned to project teams</span></div><div class="driver d2"><b>RISK AVOIDED</b><br><span class="pv-dim">Earlier issue detection and fewer misses</span></div><div class="driver d3"><b>MARGIN PROTECTED</b><br><span class="pv-dim">Better forecasting and faster intervention</span></div><div class="driver d4"><b>KNOWLEDGE REUSED</b><br><span class="pv-dim">Past project intelligence available at decision time</span></div><div class="pv-scenario-control"><label><span>Illustrative adoption assumption</span><b id="pvAdoptLabel">55%</b></label><input id="pvAdopt" type="range" min="20" max="90" value="55"><div class="pv-scenario-output" id="pvBizText">Payback modeled at 8 months</div></div></div>`
    };
    return common + scenes[page];
  }
  function links(items){return items.map((x,i)=>`<i class="pv-link" style="left:${x[0]}%;top:${x[1]}%;width:${x[2]}%;transform:rotate(${x[3]}deg);animation-delay:${i*.2}s"></i>`).join('')}
  function peopleNodes(){
    const pts=[[12,25,'J. Cruz','match'],[28,18,'M. Patel',''],[42,34,'A. Reed',''],[18,62,'S. Kim',''],[37,72,'D. Ortiz',''],[58,18,'K. Lane',''],[70,36,'R. Shaw','need'],[61,68,'T. Brooks',''],[80,68,'L. Chen','']];
    return pts.map((p,i)=>`<div class="pv-person ${p[3]}" style="left:${p[0]}%;top:${p[1]}%;animation-delay:${i*.25}s">${p[2]}</div>`).join('')
  }
  function peopleLines(){return `<i class="pv-skill-line" style="left:18%;top:32%;width:54%;transform:rotate(8deg)"></i><i class="pv-skill-line" style="left:31%;top:29%;width:41%;transform:rotate(17deg)"></i><i class="pv-skill-line" style="left:22%;top:65%;width:48%;transform:rotate(-22deg)"></i>`}

  const stage=document.createElement('div'); stage.className='pv-stage'; stage.innerHTML=stageMarkup(); document.body.appendChild(stage);
  stage.querySelector('.pv-close').onclick=closeStage;
  stage.addEventListener('click',e=>{if(e.target===stage)closeStage()});
  function openStage(){stage.classList.add('open');document.body.style.overflow='hidden';setupControls();}
  function closeStage(){stage.classList.remove('open');document.body.style.overflow='';}

  // Put a consistent, unmistakable page-specific Explore button in the hero.
  const heroActions=document.querySelector('.hero .actions') || document.querySelector('.actions');
  if(heroActions){
    const b=document.createElement('span');
    b.className='btn primary pv-explore';
    b.setAttribute('role','button'); b.tabIndex=0;
    b.innerHTML=`✦ <b>EXPLORE PAUL'S AI VISION</b> <em>• ${c.label}</em>`;
    b.onclick=openStage; b.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')openStage()};
    heroActions.prepend(b);
  }

  // Persistent presentation controls. Paul's Vision is always visible; Demo is a real destination.
  const top=document.querySelector('.topbar');
  if(top){
    const wrap=document.createElement('div'); wrap.className='pv-top-actions';
    wrap.innerHTML=`<button class="pv-mini pv-mini-vision" data-pv="vision">Paul's AI Vision</button><button class="pv-mini pv-mini-demo" data-pv="demo">Live Demo</button><button class="pv-mini pv-mini-xray" data-pv="xray">System X-Ray</button>`;
    top.appendChild(wrap);
    wrap.querySelector('[data-pv=vision]').onclick=openStage;
    wrap.querySelector('[data-pv=demo]').onclick=()=>location.href=`demo.html?from=${encodeURIComponent(page)}`;
    wrap.querySelector('[data-pv=xray]').onclick=()=>document.body.classList.toggle('pv-xray-on');
  }

  // Controls live inside every role world so the experience is never a dead end.
  const stageActions=document.createElement('div');
  stageActions.className='pv-stage-actions';
  stageActions.innerHTML=`<a class="primary" href="pauls-vision.html">Vision Hub</a><a class="secondary" href="demo.html?from=${encodeURIComponent(page)}">Run Full Demo</a><button class="secondary" type="button">Back to Dashboard</button>`;
  stage.appendChild(stageActions);
  stageActions.querySelector('button').onclick=closeStage;
  const worldId=document.createElement('div'); worldId.className='pv-world-id'; worldId.innerHTML=`<i></i> ${c.label} • Paul's role-specific AI experience`; stage.appendChild(worldId);

  // Double click major sections or press V to jump directly into the role world.
  document.querySelectorAll('.hero,.intel,.panel,.metric-card').forEach(el=>el.addEventListener('dblclick',openStage));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeStage();if(e.key.toLowerCase()==='v' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName))openStage()});

  // Deep-link support from the Vision Hub.
  const params=new URLSearchParams(location.search);
  if(params.get('vision')==='1') setTimeout(openStage,180);
  if(params.get('xray')==='1') document.body.classList.add('pv-xray-on');

  function setupControls(){
    if(page==='finance'){
      const s=stage.querySelector('#pvSlider'); if(s && !s.dataset.ready){s.dataset.ready='1';s.oninput=()=>{const v=+s.value;const margin=(8.8+v*.1).toFixed(1);const risk=(19+Math.abs(Math.min(v,0))*1.0).toFixed(0);stage.querySelector('#pvSliderLabel').textContent=`${v>0?'+':''}${v}%`;stage.querySelector('#pvProd').textContent=`${v>0?'+':''}${v}%`;stage.querySelector('#pvMargin').textContent=`${margin}%`;stage.querySelector('#pvRiskValue').textContent=`$${risk}M`;stage.querySelector('#pvScenarioText').textContent=`Projected margin: ${margin}% • At-risk value: $${risk}M`;}}
    }
    if(page==='business-case'){
      const s=stage.querySelector('#pvAdopt'); if(s && !s.dataset.ready){s.dataset.ready='1';s.oninput=()=>{const a=+s.value;const val=(8.4*(a/55)).toFixed(1);const roi=Math.round(412*(a/55));const months=Math.max(5,Math.round(12-a/14));stage.querySelector('#pvAdoptLabel').textContent=`${a}%`;stage.querySelector('#pvValue').textContent=`$${val}M`;stage.querySelector('#pvRoi').textContent=`${roi}% 3-YR ROI`;stage.querySelector('#pvBizText').textContent=`Illustrative payback modeled at ${months} months`;}}
    }
  }
})();
