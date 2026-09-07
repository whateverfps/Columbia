(() => {
  const page = document.body.dataset.page || location.pathname.split('/').pop().replace('.html','') || 'enterprise';
  const pageName = {
    enterprise:'Enterprise Command', executive:'Executive Intelligence', project:'Project Command', preconstruction:'Preconstruction Intelligence',
    finance:'Finance Intelligence', people:'People Intelligence', it:'IT & Knowledge', studio:'Columbia Studio', journey:'AI Journey', 'business-case':'Business Case', index:'Columbia AI'
  }[page] || 'Columbia AI';

  const roleContext = {
    enterprise:{ask:'Give me the Columbia portfolio update.', answer:'Two projects need leadership attention today. Project 214 is showing labor-productivity and change-order pressure; Project 318 has long-lead procurement exposure. The remaining portfolio is within modeled tolerance.', source:'Illustrative concept response • portfolio, cost, schedule and project data', cards:[['Project 214','Margin + schedule intervention','At risk'],['Project 318','Procurement acceleration','Watch'],['Remaining portfolio','No executive action recommended','Stable']]},
    executive:{ask:'What decisions actually need me today?', answer:'Three leadership decisions rise above routine operating noise: review the Project 214 recovery plan, decide whether to intervene on Project 318 procurement, and confirm the 2027 pipeline scenario.', source:'Illustrative concept response • enterprise signals and decision thresholds', cards:[['Decision 01','Project 214 recovery plan','Today'],['Decision 02','Project 318 intervention','This week'],['Decision 03','2027 pipeline strategy','Upcoming']]},
    project:{ask:'What can stop tomorrow’s work?', answer:'Tomorrow’s electrical rough-in in Building 2 is exposed. Two prerequisite inspections remain open, RFI-142 affects the work area, and Level 3 material delivery still needs confirmation.', source:'Illustrative concept response • schedule, RFIs, inspections, submittals and field capture', cards:[['Inspections','2 prerequisites open','At risk'],['RFI-142','Affects planned work area','Open'],['Material delivery','Level 3 confirmation','Watch']]},
    preconstruction:{ask:'What scope risk do you see in this bid?', answer:'Three items deserve review before bid leveling: incomplete firestopping details, a conflict around Section 07 84 00, and a mechanical-system alternate that should be carried explicitly.', source:'Illustrative concept response • drawings, specifications, bid packages and historical projects', cards:[['Firestopping','Detail gap detected','High'],['Section 07 84 00','Specification conflict','High'],['Mechanical alternate','Carry in estimate','Review']]},
    finance:{ask:'Why is projected margin moving?', answer:'Eighty-one percent of modeled margin erosion is concentrated in three projects. Project 214 is the largest driver from labor productivity and unresolved change orders; Project 318 adds long-lead exposure.', source:'Illustrative concept response • cost, forecast, WIP, invoice and change data', cards:[['Project 214','Labor productivity + changes','Primary driver'],['Project 318','Long-lead exposure','Watch'],['Invoice exceptions','9 already contextualized','Review']]},
    people:{ask:'Where will Columbia need people next?', answer:'Project 214 is modeled to need an additional senior superintendent in roughly six weeks. The strongest internal matches combine healthcare experience, near-term availability, and relevant project performance.', source:'Illustrative concept response • staffing, experience, availability and project pipeline', cards:[['Project 214','Senior superintendent','6 weeks'],['Field engineering','Upcoming opening','Pipeline'],['Training','12 team members','Due']]},
    it:{ask:'Is the AI operating inside our guardrails?', answer:'The concept environment shows approved enterprise sources connected, agent activity within modeled limits, no critical security issues, and role-scoped access inherited from source-system permissions.', source:'Illustrative concept response • identity, permissions, source connections, audit and usage', cards:[['Sources','12 approved connections','Healthy'],['Agents','8 scoped / 2 live','Controlled'],['Security','0 critical issues','Healthy']]},
    studio:{ask:'Which AI idea should Columbia pilot next?', answer:'The strongest next-pilot candidates are a project closeout risk radar, change-order drafting assistant, and a reusable lessons-learned engine. Each can start narrow with measurable operating outcomes.', source:'Illustrative concept response • AI opportunity backlog, pilot evidence and value measures', cards:[['Closeout risk radar','High-value workflow','Candidate'],['Change-order assistant','Draft + evidence workflow','Candidate'],['Lessons learned','Enterprise knowledge reuse','Candidate']]},
    journey:{ask:'What should Columbia do first?', answer:'Start with discovery around a few high-value workflows, assign accountable business owners, connect only the minimum approved sources, and define success before building. Scale only what proves measurable value.', source:'Illustrative concept response • staged enterprise AI operating model', cards:[['Discover','Months 1–2','Map'],['Pilot','Months 3–6','Prove'],['Scale','Months 6–12','Expand']]},
    'business-case':{ask:'Where would Columbia expect value first?', answer:'The first measurable value should come from time returned to teams, earlier identification of risk, reduced rework, faster decision cycles, and repeatable reuse of project knowledge. Financial figures on this page are intentionally illustrative until Columbia data is modeled.', source:'Illustrative concept response • value framework, not Columbia financial results', cards:[['Time returned','Less assembly + searching','Measure'],['Risk avoided','Earlier intervention','Measure'],['Decision speed','Evidence at point of need','Measure']]},
    index:{ask:'What is Columbia AI?', answer:'A concept for an enterprise intelligence layer that connects approved Columbia information, reasons across it with governance, and gives each role a purpose-built experience instead of another generic chatbot.', source:'Columbia AI working concept', cards:[['Enterprise','Shared intelligence layer','Concept'],['Roles','Purpose-built AI experiences','Concept'],['Governance','Approved sources + human judgment','Core']]}
  }[page];

  const dialogs = {
    'portfolio update': ['Portfolio update','A Columbia-wide operating brief assembled from approved project, finance, staffing and risk signals.','This mock interaction would summarize what changed since the last review and show the evidence behind each exception.'],
    'key risks': ['Key risks','Prioritized exposure instead of another risk register.','Chief would rank the few risks that changed materially, explain the drivers, and point leadership to the underlying project evidence.'],
    'executive brief': ['Executive brief','A concise, source-backed briefing built for leadership.','This would combine company signals, decisions awaiting leadership, portfolio movement and exceptions into a reviewable morning brief.'],
    'key decisions': ['Key decisions','Only the decisions that require executive judgment.','Routine project activity stays out of the way. Chief surfaces decisions whose thresholds, exposure or timing require leadership attention.'],
    'today’s plan': ["Today’s plan",'A prioritized field and project-delivery plan for today.','Chief would combine schedule commitments, inspections, RFIs, submittals, deliveries and open coordination items into one actionable plan.'],
    'open rfis': ['Open RFIs','RFIs ranked by impact, not simply age.','The mock workflow would highlight RFIs affecting current or near-term work, summarize the issue, show source references and flag downstream schedule exposure.'],
    'field capture': ['Field capture','Turn a walk, photo or voice note into structured project action.','A superintendent could capture field reality; Columbia AI would identify project/location context, relate it to drawings or open items, and draft the appropriate follow-up.'],
    'analyze drawings': ['Analyze drawings','Cross-check the latest drawing set for scope and coordination exposure.','The concept workflow would identify changed details, missing references, conflicts and estimate-impacting revisions, then link every finding to the sheet evidence.'],
    'check scope': ['Check scope','Compare drawings, specifications and bid scope before commitment.','Chief would surface gaps, duplicated responsibility, exclusions and unclear ownership for estimator review.'],
    'compare bids': ['Compare bids','Normalize bidder coverage around the same scope.','The concept would compare inclusions, exclusions, alternates and qualifications so the team can see true coverage differences—not just bottom-line price.'],
    'margin analysis': ['Margin analysis','Explain what moved and why.','Columbia AI would trace forecast movement to projects, cost codes, productivity signals, changes and exceptions, then expose the supporting records.'],
    'forecast': ['Forecast','Look forward from current operating signals.','This concept view would model likely margin and cash movement using current project performance and explicitly separate actuals from modeled forecast.'],
    'cost alerts': ['Cost alerts','Find exceptions before the review meeting.','Chief would identify material cost movement, invoice anomalies, unapproved exposure and repeated exception patterns that merit human review.'],
    'team needs': ['Team needs','See upcoming staffing pressure before it becomes a scramble.','This concept connects backlog, project stage, role requirements and availability to highlight future coverage needs.'],
    'find expertise': ['Find expertise','Locate Columbia experience, not just names in a directory.','Chief could identify people who have worked on similar project types, solved comparable problems, or carry relevant operational experience.'],
    'career development': ['Career development','Connect upcoming work with employee growth.','The mock workflow would show development opportunities, training needs and stretch assignments while keeping managers in control of staffing decisions.'],
    'manage connections': ['Manage connections','Control what Columbia AI can see.','This concept view would list approved sources, identity method, permission inheritance, sync status and responsible system owner.'],
    'view activity': ['AI activity','A reviewable audit trail of AI use.','IT could inspect agent activity, source access, user actions, model usage and flagged events without exposing more data than the user is permitted to see.'],
    'governance': ['Governance','Make policy visible inside the product.','The mock governance center would show approved use cases, human-review requirements, restricted data classes, model policy and escalation ownership.'],
    'draft prototype': ['Draft prototype','Turn an approved problem into the smallest testable workflow.','Columbia Studio would define the user, source data, guardrails, expected action and measurement plan before a pilot is built.'],
    'explore ideas': ['Explore ideas','Browse AI opportunities by role, workflow and value hypothesis.','Ideas remain concepts until an owner, approved sources and a measurable operating outcome are attached.'],
    'open lab': ['Columbia AI Lab','A controlled place to test ideas before enterprise rollout.','The lab concept separates experiments from production, records what was tested and provides a path to security, governance and business approval.'],
    'see the path': ['Columbia AI journey','A staged path from discovery to operating capability.','The journey deliberately starts with problems and people, proves value through controlled pilots, and scales only repeatable wins.'],
    'key milestones': ['Key milestones','Decision gates for the AI program.','Each phase would have explicit owners, measures and go/no-go criteria so experimentation does not quietly become unmanaged production.'],
    'success stories': ['Success stories','Evidence from pilots that earned the right to scale.','This concept area would capture the problem, baseline, measured improvement, user adoption and reusable lessons from each successful pilot.'],
    'view analysis': ['Value analysis','A transparent value model—not a promise.','Columbia could replace illustrative assumptions with its own labor, project, rework and decision-cycle data to test where AI has a defensible business case.'],
    'model roi': ['ROI model','Change the assumptions and see the modeled impact.','This prototype would let Finance adjust adoption, hours returned, avoided risk and implementation cost while clearly labeling assumptions versus observed results.'],
    'executive summary': ['Executive summary','One page connecting investment, operating outcomes and proof gates.','The summary would show what Columbia is funding, which problems it targets, what has been proven and what decision is needed next.'],
    'add idea': ['Add an AI idea','Capture the problem before proposing technology.','The intake would ask who owns the workflow, what friction exists today, what approved information is required, and how Columbia would know the pilot worked.']
  };

  const scenarioCopy = {
    enterprise:'Model the impact of accelerating Project 318 procurement or assigning added leadership to Project 214.',
    executive:'Compare leadership options against backlog, margin, schedule exposure and capacity before committing.',
    project:'Model tomorrow’s plan if inspections slip, RFI-142 remains open, or the material delivery moves.',
    preconstruction:'Test estimate and risk impact if a scope gap becomes contractor-owned, owner-owned or carried as an alternate.',
    finance:'Model margin impact from productivity recovery, pending changes, long-lead cost exposure or forecast assumptions.',
    people:'Model staffing coverage if Project 214 accelerates, a new award lands, or availability shifts.',
    it:'Model an additional source or agent against permission, usage, security and governance requirements.',
    studio:'Compare pilot options by value potential, complexity, source readiness, user adoption and governance burden.',
    journey:'Explore how changing pilot count, adoption pace or governance gates affects the rollout path.',
    'business-case':'Adjust adoption, hours returned, risk avoidance and program cost to see a clearly labeled illustrative value range.'
  }[page] || 'Explore a Columbia-specific what-if scenario using illustrative inputs.';

  function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function ensureUI(){
    if(document.querySelector('.ui-modal-backdrop')) return;
    document.body.insertAdjacentHTML('beforeend',`<div class="ui-modal-backdrop" aria-hidden="true"><div class="ui-modal" role="dialog" aria-modal="true"><div class="ui-modal-head"><div class="ui-modal-icon">AI</div><div><div class="ui-modal-sub">${esc(pageName)} • Interactive concept</div><div class="ui-modal-title">Columbia AI</div></div><button class="ui-modal-close" aria-label="Close">×</button></div><div class="ui-modal-body"></div></div></div><div class="ui-toast"><b>Columbia AI</b><span></span></div>`);
    const bg=document.querySelector('.ui-modal-backdrop');
    bg.addEventListener('click',e=>{if(e.target===bg) closeModal();});
    document.querySelector('.ui-modal-close').addEventListener('click',closeModal);
  }
  function closeModal(){const bg=document.querySelector('.ui-modal-backdrop'); if(bg){bg.classList.remove('open');bg.setAttribute('aria-hidden','true');}}
  function toast(msg){ensureUI();const t=document.querySelector('.ui-toast');t.querySelector('span').textContent=msg;t.classList.add('show');clearTimeout(window.__ct);window.__ct=setTimeout(()=>t.classList.remove('show'),2400);}
  function openModal(title,lede,bodyHtml,opts={}){
    ensureUI();
    const bg=document.querySelector('.ui-modal-backdrop');
    document.querySelector('.ui-modal-title').textContent=title;
    document.querySelector('.ui-modal-body').innerHTML=`<div class="ui-badge">Concept capability</div><p class="ui-lede">${esc(lede)}</p>${bodyHtml}<div class="ui-modal-actions"><button class="secondary" data-modal="close">Close</button>${opts.secondary?`<button class="secondary" data-modal="secondary">${esc(opts.secondary)}</button>`:''}${opts.primary?`<button class="primary" data-modal="primary">${esc(opts.primary)}</button>`:''}</div>`;
    bg.classList.add('open');bg.setAttribute('aria-hidden','false');
    document.querySelector('[data-modal="close"]').onclick=closeModal;
    const p=document.querySelector('[data-modal="primary"]'); if(p)p.onclick=()=>{toast(opts.primaryToast||`${opts.primary} — concept action demonstrated`); if(opts.closeOnPrimary!==false) closeModal();};
    const q=document.querySelector('[data-modal="secondary"]'); if(q)q.onclick=()=>toast(opts.secondaryToast||`${opts.secondary} — supporting evidence would open here`);
    setTimeout(()=>document.querySelector('.ui-modal-close').focus(),50);
  }
  function rows(cards=roleContext.cards){return `<div class="ui-list">${cards.map((c,i)=>`<div class="ui-row"><div class="ui-num">${i+1}</div><div><b>${esc(c[0])}</b><br><span>${esc(c[1])}</span></div><span class="ui-status ${/risk|high/i.test(c[2])?'risk':/watch|review/i.test(c[2])?'warn':''}">${esc(c[2])}</span></div>`).join('')}</div>`}
  function askChief(){
    openModal('Ask Chief','Ask a Columbia operating question in plain language. The concept response stays grounded in approved sources and makes uncertainty visible.',`<div class="ui-prompt"><input id="chief-q" value="${esc(roleContext.ask)}" aria-label="Ask Chief"><button class="primary" id="chief-go">Ask Chief</button></div><div class="ui-answer" id="chief-a"><b>Chief:</b> ${esc(roleContext.answer)}<div class="ui-source">${esc(roleContext.source)}</div></div>${rows()}`,{primary:'Create follow-up',secondary:'Show evidence',primaryToast:'Follow-up drafted for human review',closeOnPrimary:false});
    setTimeout(()=>{
      const go=document.getElementById('chief-go'), input=document.getElementById('chief-q'), ans=document.getElementById('chief-a');
      const run=()=>{ans.classList.add('show');go.textContent='Asked';};
      go.onclick=run; input.addEventListener('keydown',e=>{if(e.key==='Enter')run();});
    },0);
  }
  function openSearch(){
    openModal('Ask Columbia anything','Search and reason across the information this role is allowed to access—not across unrestricted company data.',`<div class="ui-prompt"><input id="search-q" placeholder="Try: ${esc(roleContext.ask)}"><button class="primary" id="search-go">Search</button></div><div class="ui-answer" id="search-a"><b>Columbia AI:</b> ${esc(roleContext.answer)}<div class="ui-source">${esc(roleContext.source)}</div></div><div class="ui-mini-label">Suggested questions</div>${rows()}`,{secondary:'View source map'});
    setTimeout(()=>{const go=document.getElementById('search-go'),ans=document.getElementById('search-a'),input=document.getElementById('search-q');const run=()=>{ans.classList.add('show');};go.onclick=run;input.addEventListener('keydown',e=>{if(e.key==='Enter')run();});input.focus();},0);
  }
  function openScenario(){openModal('Run a scenario',scenarioCopy,`<div class="ui-grid"><div class="ui-card"><small>Baseline</small><strong>Current Columbia plan</strong><p>Uses the illustrative state shown on this screen.</p></div><div class="ui-card"><small>Variable</small><strong>Change one assumption</strong><p>Staffing, timing, cost, scope or intervention.</p></div><div class="ui-card"><small>Output</small><strong>Compare impact</strong><p>Shows modeled movement and evidence—not a decision.</p></div></div>${rows()}`,{primary:'Run illustrative model',secondary:'Edit assumptions',primaryToast:'Illustrative scenario calculated — human decision still required'});}
  function createAction(){openModal('Create action','Turn the intelligence into a controlled next step without letting the AI silently make the business decision.',`<div class="ui-grid"><div class="ui-card"><small>Owner</small><strong>Assign accountable Columbia owner</strong><p>Human ownership remains explicit.</p></div><div class="ui-card"><small>Due</small><strong>Set timing from impact</strong><p>Priority can follow schedule or financial exposure.</p></div><div class="ui-card"><small>Evidence</small><strong>Attach the source trail</strong><p>Keep the action connected to why it was created.</p></div></div>${rows()}`,{primary:'Draft action',secondary:'Preview workflow',primaryToast:'Draft action created for review'});}
  function viewDetails(){openModal(`${pageName} details`,'Drill into the signal without losing the decision context.',`${rows()}<div class="ui-grid"><div class="ui-card"><small>Evidence</small><strong>Source-backed</strong><p>Each insight would link to the records that support it.</p></div><div class="ui-card"><small>Confidence</small><strong>Make uncertainty visible</strong><p>Unknowns and stale inputs stay visible to the reviewer.</p></div><div class="ui-card"><small>Human judgment</small><strong>Decision stays with Columbia</strong><p>AI organizes and recommends; accountable people decide.</p></div></div>`,{primary:'Create action',secondary:'Show evidence',primaryToast:'Action drafted from selected signal'});}
  function connections(){openModal('Enterprise connections','A governed view of the systems this concept could use. Connection does not mean unrestricted access—permissions and approved scope still apply.',`<div class="ui-list"><div class="ui-row"><div class="ui-num">P</div><div><b>Project systems</b><br><span>Projects, RFIs, submittals, drawings, field records</span></div><span class="ui-status">Approved concept</span></div><div class="ui-row"><div class="ui-num">F</div><div><b>Financial systems</b><br><span>Cost, forecast, invoices, change exposure</span></div><span class="ui-status">Role scoped</span></div><div class="ui-row"><div class="ui-num">K</div><div><b>Knowledge sources</b><br><span>Policies, standards, past-project lessons and documents</span></div><span class="ui-status">Permissioned</span></div></div>`,{secondary:'View governance'});}
  function generic(label){
    const key=label.toLowerCase().replace(/[✦→]/g,'').trim();
    if(key.includes('ask chief')) return askChief();
    if(key.includes('run scenario')||key.includes('run a scenario')) return openScenario();
    if(key.includes('create action')) return createAction();
    if(key.includes('view details')) return viewDetails();
    const d=dialogs[key];
    if(d) return openModal(d[0],d[1],`<p class="ui-lede" style="font-size:10px">${esc(d[2])}</p>${rows()}`,{primary:'Preview workflow',secondary:'Show supporting data',primaryToast:`${d[0]} workflow preview opened`});
    openModal(label,`This control represents a Columbia-specific ${pageName.toLowerCase()} workflow.`,`<p class="ui-lede" style="font-size:10px">In a live implementation, this would open the relevant governed workflow, preserve the current role context, and keep evidence attached to the resulting recommendation or action.</p>${rows()}`,{primary:'Preview workflow'});
  }

  ensureUI();
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
  document.querySelectorAll('.btn').forEach(el=>{
    const run=()=>generic(el.textContent.replace(/\s+/g,' ').trim());
    el.addEventListener('click',run);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}});
  });
  document.querySelectorAll('.search').forEach(el=>{const run=()=>openSearch();el.addEventListener('click',run);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}});});
  document.querySelectorAll('.status-chip').forEach(el=>{const run=()=>connections();el.addEventListener('click',run);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}});});

  // Make data surfaces feel like a live prototype without turning the whole screen into buttons.
  document.querySelectorAll('.metric-card').forEach(el=>{
    el.setAttribute('role','button'); el.setAttribute('tabindex','0');
    const label=(el.querySelector('small')?.textContent||'Metric').trim();
    const run=()=>openModal(label,`Explore the Columbia context behind this ${label.toLowerCase()} signal.`,`${rows()}<div class="ui-grid"><div class="ui-card"><small>Signal</small><strong>${esc(label)}</strong><p>The displayed value is illustrative and would be tied to governed source records.</p></div><div class="ui-card"><small>Trend</small><strong>Explain movement</strong><p>Show what changed, when it changed and which sources contributed.</p></div><div class="ui-card"><small>Next step</small><strong>Human review</strong><p>Open the evidence or create a controlled follow-up action.</p></div></div>`,{secondary:'Show evidence',primary:'Create follow-up'});
    el.addEventListener('click',run); el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}});
  });
  document.querySelectorAll('.feature').forEach(el=>{
    el.setAttribute('role','button'); el.setAttribute('tabindex','0');
    const label=(el.querySelector('b')?.textContent||'Capability').trim();
    const run=()=>generic(label);
    el.addEventListener('click',run); el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}});
  });
  document.querySelectorAll('.table tr').forEach((el,i)=>{
    if(i===0 || el.querySelector('th')) return;
    el.setAttribute('tabindex','0'); el.setAttribute('role','button');
    const cells=[...el.querySelectorAll('td')].map(td=>td.textContent.trim()).filter(Boolean);
    const run=()=>openModal(cells[0]||`${pageName} record`,'Open the selected record with its source trail, current status and AI-supported context.',`<div class="ui-list">${cells.slice(0,5).map((c,j)=>`<div class="ui-row"><div class="ui-num">${j+1}</div><div><b>${esc(c)}</b><br><span>Illustrative Columbia record context</span></div></div>`).join('')}</div>`,{secondary:'Show evidence',primary:'Open workflow'});
    el.addEventListener('click',run); el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}});
  });
})();
