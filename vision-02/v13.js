(() => {
  const page = document.body.dataset.page || '';
  const cfg = {
    enterprise:{label:'Enterprise Nervous System',prompt:'What needs enterprise attention right now?',answer:'Two project signals are worth attention. Project 214 is showing margin pressure tied to labor productivity and unresolved changes. Project 318 has a long-lead procurement exposure that could affect schedule. The rest of the portfolio remains below the management-action threshold.',source:'Concept evidence: project status + schedule + cost + approved enterprise sources.'},
    executive:{label:'Decision Theater',prompt:'What actually requires an executive decision?',answer:'The portfolio compresses to two management decisions: confirm the recovery path for Project 214 and decide whether to accelerate procurement on Project 318. Everything else can remain with operating teams.',source:'Concept evidence: portfolio thresholds + schedule exposure + forecast movement.'},
    project:{label:"Tomorrow's Jobsite",prompt:"What could stop tomorrow's work?",answer:'Electrical rough-in is the primary tomorrow-readiness risk. RFI-142 intersects planned work and two prerequisites remain open. Chief would surface the source trail, affected area and a human-reviewed recovery action.',source:'Concept evidence: schedule + RFIs + submittals + drawing context + field inputs.'},
    preconstruction:{label:'Scope X-Ray',prompt:'Where is the scope most likely to leak?',answer:'The strongest concept signal is a coordination gap between drawing intent, specification language and bid coverage. The AI experience is designed to separate those layers visually so the estimator can resolve ambiguity before buyout.',source:'Concept evidence: drawings + specifications + bid leveling + historical lessons.'},
    finance:{label:'Margin Time Machine',prompt:'What is moving projected margin?',answer:'Three projects drive most of the illustrative margin movement. Labor productivity, unresolved change exposure and procurement timing are the leading factors. The scenario tool lets Finance move assumptions without turning the model into an automatic decision.',source:'Concept evidence: cost + forecast + project risk + schedule + change exposure.'},
    people:{label:'Workforce Constellation',prompt:'Where will Columbia need people next?',answer:'The concept identifies a likely senior-superintendent demand in roughly six weeks and connects it to internal experience, current assignments and availability. The goal is to find capability before the staffing problem becomes urgent.',source:'Concept evidence: staffing + project pipeline + role history + internal expertise.'},
    it:{label:'Governance Flight Deck',prompt:'How do we know AI is using the right information?',answer:'Every interaction is shown passing through identity, role permissions, approved sources, policy and evidence before the result reaches the user. The AI layer does not become a second uncontrolled system of record.',source:'Concept evidence: source registry + access policy + identity + traceability.'},
    studio:{label:'Idea Forge',prompt:'How does an employee idea become something real?',answer:'The idea moves through problem definition, owner, risk tier, prototype, pilot metric, measurement and scale criteria. The person who understands the workflow stays connected to the build instead of handing the problem to a black box.',source:'Concept evidence: discovery intake + pilot scorecard + governed prototype workflow.'},
    journey:{label:'Transformation Tunnel',prompt:'What should Columbia do first?',answer:'Discover the environment, map authoritative sources and ownership, then pilot a few low-risk high-value workflows. Measure value, learn, and scale only what proves useful. The interface is downstream of that foundation.',source:'Concept evidence: discovery → foundation → pilot → proof → scale.'},
    'business-case':{label:'Value Engine',prompt:'Where could the economic value actually come from?',answer:'The concept ties value to operating outcomes: time returned to teams, avoided rework, earlier risk detection, schedule protection and better use of institutional knowledge. The dollar values remain illustrative until Columbia measures real pilots.',source:'Concept evidence: pilot metrics + adoption + time saved + avoided/reduced risk.'}
  };

  function openVision(){
    const direct=document.querySelector('.pv-mini-vision');
    if(direct){direct.click();return;}
    const hero=document.querySelector('.pv-explore');
    if(hero){hero.click();return;}
    if(page) location.href=`${page}.html?vision=1`;
  }

  // Dedicated page-specific Vision tool. It is supplemental to the hero button + nav, not a replacement.
  if(cfg[page]){
    const tool=document.createElement('div');
    tool.className='pv-role-tool';
    tool.innerHTML=`<button type="button" aria-label="Open Paul's AI Vision for this page"><div class="pvrt-kicker"><i class="pvrt-dot"></i> PAUL'S AI VISION • THIS PAGE</div><b>${cfg[page].label}</b><span>Open the role-specific concept experience for ${page==='business-case'?'the business case':page}.</span><i class="pvrt-go">↗</i></button>`;
    tool.querySelector('button').onclick=openVision;
    document.body.appendChild(tool);
  }

  // Restore the Chief orb as a docked, role-aware AI chat tool.
  if(cfg[page]){
    const orb=document.createElement('button');
    orb.className='chief-orb'; orb.type='button'; orb.setAttribute('aria-label','Ask Chief');
    orb.innerHTML=`C<small>Ask Chief about ${page==='business-case'?'this page':page}</small>`;
    const chat=document.createElement('section'); chat.className='chief-chat'; chat.setAttribute('aria-hidden','true');
    const suggestions = page==='finance' ? ['Explain margin movement','Run a downside thought experiment','Which project matters most?'] :
      page==='project' ? ["What's blocking tomorrow?",'Show the evidence trail','What action would you prepare?'] :
      page==='executive' ? ['What needs my decision?','What can stay delegated?','Show portfolio consequences'] :
      ['What matters most here?','Show the evidence','What would Chief do next?'];
    chat.innerHTML=`<div class="chief-chat-head"><div class="chief-chat-mark">C</div><div><b>Chief</b><span>Role-aware Columbia AI concept</span></div><button class="chief-chat-close" aria-label="Close Chief chat">×</button></div><div class="chief-chat-body"><div class="chief-bubble"><b>Chief:</b> ${cfg[page].answer}<div class="chief-evidence">${cfg[page].source}</div></div><div class="chief-suggestions">${suggestions.map(s=>`<button type="button">${s}</button>`).join('')}</div></div><div class="chief-entry"><input aria-label="Ask Chief" value="${cfg[page].prompt.replace(/"/g,'&quot;')}"><button type="button">Ask</button></div>`;
    const body=chat.querySelector('.chief-chat-body');
    const input=chat.querySelector('input');
    const add=(q)=>{
      const u=document.createElement('div');u.className='chief-bubble';u.innerHTML=`<b>You:</b> ${q.replace(/[<>&]/g,m=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[m]))}`;body.appendChild(u);
      const a=document.createElement('div');a.className='chief-bubble';a.innerHTML=`<b>Chief:</b> ${cfg[page].answer}<div class="chief-evidence">${cfg[page].source}</div>`;body.appendChild(a);body.scrollTop=body.scrollHeight;
    };
    const toggle=()=>{const open=!chat.classList.contains('open');chat.classList.toggle('open',open);chat.setAttribute('aria-hidden',String(!open));if(open)setTimeout(()=>input.focus(),50)};
    orb.onclick=toggle; chat.querySelector('.chief-chat-close').onclick=toggle;
    chat.querySelector('.chief-entry button').onclick=()=>{const q=input.value.trim();if(q)add(q)};
    input.addEventListener('keydown',e=>{if(e.key==='Enter'){const q=input.value.trim();if(q)add(q)}});
    chat.querySelectorAll('.chief-suggestions button').forEach(b=>b.onclick=()=>{input.value=b.textContent;add(b.textContent)});
    document.body.append(chat,orb);
  }
})();
