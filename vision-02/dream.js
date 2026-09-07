(() => {
  const page=document.body.dataset.page||'enterprise';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  let running=false;
  const profile={
    enterprise:{title:'Portfolio pulse',events:[['Now','Portfolio synchronized','14 active projects • 2 need attention'],['+1s','Risk concentration detected','Project 214 + Project 318'],['+2s','Margin signal changed','Labor productivity + unresolved changes'],['+3s','Action prepared','Leadership review ready']]},
    executive:{title:'Decision pulse',events:[['Now','Decision threshold crossed','Project 214 recovery plan'],['+1s','Noise suppressed','Routine operations held back'],['+2s','Scenario available','Procurement intervention modeled'],['+3s','Brief ready','Three decisions require leadership']]},
    project:{title:'Tomorrow readiness',events:[['Now','Tomorrow scanned','Schedule + RFIs + inspections'],['+1s','Constraint found','2 prerequisite inspections open'],['+2s','Drawing context linked','RFI-142 affects work area'],['+3s','Action ready','Foreman briefing prepared']]},
    preconstruction:{title:'Scope scan',events:[['Now','Bid set indexed','Drawings + specs + addenda'],['+1s','Scope gap detected','Firestopping detail incomplete'],['+2s','Conflict linked','Section 07 84 00'],['+3s','Estimator review ready','3 issues prioritized']]},
    finance:{title:'Margin pulse',events:[['Now','WIP synchronized','Current cost + forecast signals'],['+1s','Variance concentrated','81% in three projects'],['+2s','Driver explained','Labor + changes + procurement'],['+3s','Scenario ready','Intervention impact modeled']]},
    people:{title:'Workforce pulse',events:[['Now','Pipeline matched','Projects + staffing + availability'],['+1s','Future gap detected','Senior superintendent • 6 weeks'],['+2s','Experience searched','Healthcare + complex renovation'],['+3s','Matches ready','3 internal candidates surfaced']]},
    it:{title:'Governance pulse',events:[['Now','Identity checked','Role-scoped access active'],['+1s','Sources verified','12 approved connections'],['+2s','Agent activity reviewed','8 scoped • 2 live'],['+3s','Audit clean','0 critical issues']]},
    studio:{title:'Innovation pulse',events:[['Now','Opportunity backlog scored','Value × feasibility × risk'],['+1s','Workflow selected','Closeout risk radar'],['+2s','Pilot guardrails set','Human review + source evidence'],['+3s','Prototype ready','Measure before scale']]},
    journey:{title:'Roadmap pulse',events:[['Now','Discovery mapped','High-value workflows'],['+1s','Owners assigned','Business + IT + governance'],['+2s','Pilot evidence defined','Time, risk, quality, adoption'],['+3s','Scale gate ready','Expand only what proves value']]},
    'business-case':{title:'Value pulse',events:[['Now','Value model opened','Illustrative assumptions only'],['+1s','Time-return modeled','Search + assembly + admin'],['+2s','Risk value modeled','Earlier intervention'],['+3s','Evidence gate active','Replace assumptions with Columbia data']]},
    index:{title:'Enterprise pulse',events:[['Now','Columbia AI online','Concept environment ready'],['+1s','Approved sources connected','Governed enterprise context'],['+2s','Role intelligence active','Purpose-built experiences'],['+3s','Human judgment retained','AI recommends • people decide']]}
  }[page]||null;

  function pulsePosition(){document.addEventListener('pointermove',e=>{document.body.style.setProperty('--pulse-x',(e.clientX/innerWidth*100).toFixed(1)+'%');document.body.style.setProperty('--pulse-y',(e.clientY/innerHeight*100).toFixed(1)+'%');},{passive:true});}

  function addPulse(){
    const b=document.createElement('button');b.className='dream-pulse';b.innerHTML='<i></i><span>Run live pulse</span>';document.body.appendChild(b);b.addEventListener('click',()=>runPulse(b));
  }
  function addStream(){
    if(!profile)return;const s=document.createElement('aside');s.className='intel-stream';s.innerHTML='<div class="intel-stream-head"><i></i>'+profile.title+' • live concept</div>'+profile.events.map(e=>`<div class="intel-event"><div class="time">${e[0]}</div><div><b>${e[1]}</b><span>${e[2]}</span></div></div>`).join('');document.body.appendChild(s);
  }
  async function showStream(){const s=$('.intel-stream');if(!s)return;s.classList.add('show');const ev=$$('.intel-event',s);ev.forEach(x=>x.classList.remove('show'));for(const x of ev){x.classList.add('show');await wait(520);} }
  function clearFocus(){ $$('.dream-highlight,.dream-risk,.dream-dim,.dream-row').forEach(x=>x.classList.remove('dream-highlight','dream-risk','dream-dim','dream-row'));}
  async function runPulse(btn){
    if(running)return;running=true;btn.classList.add('running');btn.querySelector('span').textContent='Reading Columbia…';clearFocus();await showStream();
    const metrics=$$('.metric-card');const intel=$('.intel');if(intel){intel.classList.add('dream-highlight');await wait(550)}
    if(metrics.length){metrics.forEach((m,i)=>{if(i>2)m.classList.add('dream-dim')});metrics[0]?.classList.add('dream-highlight');await wait(650)}
    await pageSequence();
    await wait(700);clearFocus();$('.intel-stream')?.classList.remove('show');btn.classList.remove('running');btn.querySelector('span').textContent='Run live pulse';running=false;
  }
  async function pageSequence(){
    if(page==='enterprise'||page==='executive'){
      const rows=$$('.table tr:not(:first-child)');if(rows[0])rows[0].classList.add('dream-row');if(rows[1])rows[1].classList.add('dream-row');await wait(650);const chart=$('.chart-panel');chart?.classList.add('dream-highlight');replayCharts();
    } else if(page==='project'){
      await targetHero('RFI-142','Constraint linked to tomorrow’s work',68,46);const rows=$$('.table tr:not(:first-child)');rows[0]?.classList.add('dream-row');
    } else if(page==='preconstruction'){
      await targetHero('Scope conflict','Section 07 84 00 needs estimator review',57,42);$$('.panel').slice(0,2).forEach(x=>x.classList.add('dream-highlight'));
    } else if(page==='finance'){
      $('.chart-panel')?.classList.add('dream-highlight');replayCharts();scenarioMorph();
    } else if(page==='people'){
      await targetHero('Match found','Healthcare superintendent • available in 5–7 weeks',62,39);$$('.panel').slice(0,2).forEach(x=>x.classList.add('dream-highlight'));
    } else if(page==='it'){
      await topologyDemo();
    } else if(page==='studio'){
      const cards=$$('.panel,.feature');for(const c of cards.slice(0,3)){c.classList.add('dream-highlight');await wait(320)}
    } else if(page==='journey'){
      const cards=$$('.panel,.feature,.metric-card');for(const c of cards.slice(0,4)){c.classList.add('dream-highlight');await wait(350)}
    } else if(page==='business-case'){
      scenarioMorph();$$('.metric-card').slice(0,3).forEach(x=>x.classList.add('dream-highlight'));
    }
  }
  function replayCharts(){ $$('.chart-actual,.chart-forecast').forEach(el=>{el.style.animation='none';void el.getBoundingClientRect();el.style.animation='';}); }
  async function targetHero(title,text,x,y){
    const hero=$('.hero');if(!hero)return;hero.style.position='relative';let o=$('.dream-overlay',hero);if(!o){o=document.createElement('div');o.className='dream-overlay';hero.appendChild(o)}o.innerHTML=`<div class="dream-crosshair" style="left:${x}%;top:${y}%"></div><div class="dream-label" style="left:${Math.min(x+5,70)}%;top:${Math.max(y-4,12)}%"><b>${title}</b>${text}</div>`;$('.dream-crosshair',o).classList.add('show');$('.dream-label',o).classList.add('show');await wait(1900);
  }
  async function topologyDemo(){
    const target=$('.hero')||$('.content');if(!target)return;target.style.position='relative';let f=document.createElement('div');f.className='dream-flow show';f.innerHTML='<div class="flow-node" style="left:12%;top:58%"><b>Approved sources</b>ERP • Projects • Docs</div><div class="flow-node" style="left:38%;top:30%"><b>Governance</b>Identity • Permissions</div><div class="flow-node" style="left:61%;top:58%"><b>Columbia AI</b>Reason • Evidence</div><div class="flow-node" style="left:79%;top:26%"><b>Role experience</b>Human judgment</div><div class="flow-line" style="left:23%;top:61%;width:18%;transform:rotate(-19deg)"></div><div class="flow-line" style="left:48%;top:39%;width:20%;transform:rotate(18deg)"></div><div class="flow-line" style="left:70%;top:55%;width:15%;transform:rotate(-25deg)"></div>';target.appendChild(f);await wait(2400);f.remove();
  }
  function scenarioMorph(){
    const b=$('.scenario-banner')||(()=>{const x=document.createElement('div');x.className='scenario-banner';x.textContent='Illustrative scenario mode • assumptions changed, not actual Columbia results';document.body.appendChild(x);return x})();b.classList.add('show');document.body.classList.add('scenario-mode');const strong=$$('.metric-card strong');strong.forEach((s,i)=>{const d=document.createElement('span');d.className='scenario-delta';d.textContent=i%2?'→ modeled':'∆';s.insertAdjacentElement('afterend',d);requestAnimationFrame(()=>d.classList.add('show'));s.classList.add('dream-number')});setTimeout(()=>{b.classList.remove('show');document.body.classList.remove('scenario-mode');$$('.scenario-delta').forEach(x=>x.remove());strong.forEach(x=>x.classList.remove('dream-number'));},3500);
  }

  function addChief(){
    const dock=document.createElement('div');dock.className='chief-dock';dock.innerHTML='<span class="chief-hint">Ask Chief</span><div class="chief-orb" aria-label="Open Chief"></div>';document.body.appendChild(dock);
    const panel=document.createElement('section');panel.className='chief-panel';panel.innerHTML=`<div class="chief-panel-head"><div class="chief-orb" style="width:28px;height:28px"></div><div><b>Chief</b><small>${profile?.title||'Columbia intelligence'} • concept assistant</small></div><button aria-label="Close">×</button></div><div class="chief-feed"><div class="chief-msg"><b>Chief</b><br>${chiefOpening()}</div></div><div class="chief-input"><input placeholder="Ask about this Columbia view…"><button>Ask</button></div>`;document.body.appendChild(panel);
    const toggle=()=>panel.classList.toggle('open');dock.addEventListener('click',toggle);$('.chief-panel-head button',panel).addEventListener('click',()=>panel.classList.remove('open'));
    const input=$('input',panel),ask=$('.chief-input button',panel),feed=$('.chief-feed',panel);const go=()=>{const q=input.value.trim();if(!q)return;feed.insertAdjacentHTML('beforeend',`<div class="chief-msg user">${esc(q)}</div>`);input.value='';setTimeout(()=>{feed.insertAdjacentHTML('beforeend',`<div class="chief-msg"><b>Chief</b><br>${chiefAnswer(q)}</div>`);feed.scrollTop=feed.scrollHeight;},420)};ask.addEventListener('click',go);input.addEventListener('keydown',e=>{if(e.key==='Enter')go()});
  }
  function chiefOpening(){const x={enterprise:'I’m watching the portfolio. Two projects currently deserve leadership attention; the rest are within the illustrative operating range.',executive:'I’ve suppressed routine noise and surfaced only modeled decisions that require executive judgment.',project:'I’m focused on tomorrow readiness: constraints, RFIs, inspections, material and field evidence.',preconstruction:'I’m comparing scope across drawings, specifications and bid coverage before commitment.',finance:'I’m tracing forecast movement to the few project drivers that explain it.',people:'I’m matching project demand to Columbia experience, availability and development opportunities.',it:'I’m showing how enterprise AI could remain source-governed, permission-aware and auditable.',studio:'I’m ranking ideas by measurable value, feasibility and governance—not novelty.',journey:'I’m keeping the roadmap staged: discover, pilot, prove, then scale.','business-case':'I’m keeping value claims illustrative until Columbia data can replace assumptions.'};return x[page]||'I’m here to explain what this concept is designed to do for Columbia.'}
  function chiefAnswer(q){const s=q.toLowerCase();if(/why|risk|attention|problem/.test(s))return page==='project'?'The leading modeled constraint is tomorrow readiness: two prerequisites remain open and RFI-142 touches the planned work area. I would show the evidence before recommending action.':'I would first isolate what materially changed, trace it to source evidence, and then recommend the smallest useful human decision.';if(/source|evidence|trust|proof/.test(s))return 'Every recommendation in the intended design carries source context: the originating system, relevant document or record, timestamp, and permission boundary. The person remains the decision-maker.';if(/do|action|next/.test(s))return 'The intended next step is not automatic execution. Chief prepares the action, evidence and likely impact; the accountable Columbia user reviews and approves it.';return 'In the intended Columbia experience, I would reason across only approved information for this role, show what changed, explain why it matters, and keep the supporting evidence one click away.'}
  function esc(x){return x.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

  function tilt(){if(matchMedia('(pointer:fine)').matches===false)return;$$('.metric-card,.panel').forEach(el=>{el.dataset.dreamTilt='1';el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(700px) rotateX(${(-y*1.4).toFixed(2)}deg) rotateY(${(x*1.6).toFixed(2)}deg) translateY(-1px)`});el.addEventListener('pointerleave',()=>el.style.transform='')})}

  function enhanceButtons(){
    document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const t=b.textContent.toLowerCase();if(/run a scenario|run scenario|forecast|margin analysis/.test(t)){setTimeout(()=>scenarioMorph(),140)}if(/portfolio update|key risks|today.s plan|field capture|analyze drawings|check scope|compare bids|team needs|find expertise|governance|pilot|prototype|roi/.test(t)){setTimeout(()=>{const p=$('.dream-pulse');if(p&&!running)runPulse(p)},180)}},false);
  }

  addChief();tilt();enhanceButtons();
})();
