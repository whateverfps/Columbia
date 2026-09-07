(()=>{
  const page=document.body.dataset.page||'enterprise';
  if(page==='index') return;
  const hero=document.querySelector('.hero');
  if(!hero) return;
  hero.classList.add('role-live');
  const vignette=document.createElement('div');vignette.className='role-vignette';hero.appendChild(vignette);
  const canvas=document.createElement('canvas');canvas.className='role-canvas';hero.insertBefore(canvas,hero.firstChild);
  const hud=document.createElement('div');hud.className='role-hud';hero.appendChild(hud);
  const controls=document.createElement('div');controls.className='role-controls';controls.innerHTML='<button class="role-expand">Expand living scene</button><button class="role-exit">Exit full screen</button>';hero.appendChild(controls);
  const flare=document.createElement('div');flare.className='role-action-flare';flare.innerHTML='<b>Columbia AI</b><span></span>';hero.appendChild(flare);

  const names={
    enterprise:'Enterprise digital twin',executive:'Executive decision room',project:'Field intelligence scanner',preconstruction:'Scope intelligence engine',finance:'Live margin simulator',people:'Workforce intelligence map',it:'Governed intelligence fabric',studio:'Idea-to-impact forge',journey:'AI transformation path','business-case':'Value realization engine'
  };
  const statuses={
    enterprise:['Building enterprise context','Connecting project signals','Tracing risk across roles','Two interventions surfaced'],
    executive:['Suppressing operational noise','Ranking decision thresholds','Modeling leadership choices','Executive brief assembled'],
    project:['Scanning tomorrow’s work area','Linking drawings + RFIs','Constraint detected: RFI-142','Action path prepared'],
    preconstruction:['Separating drawing layers','Cross-checking specifications','Scope gap detected','Estimator review package ready'],
    finance:['Synchronizing project forecasts','Tracing margin movement','Running intervention scenario','Forecast impact visualized'],
    people:['Mapping project demand','Searching Columbia experience','Matching availability + skills','Three internal matches surfaced'],
    it:['Authenticating identity','Routing approved sources','Applying governance controls','Role-scoped intelligence delivered'],
    studio:['Capturing opportunity','Scoring value × feasibility','Forging prototype path','Pilot ready for evidence gate'],
    journey:['Discovering workflows','Piloting safely','Scaling what proves value','Enterprise capability compounding'],
    'business-case':['Loading value drivers','Modeling time returned','Modeling avoided risk','Evidence-gated ROI assembled']
  };
  let statusIndex=0;
  hud.innerHTML=`<div class="live"><i></i> LIVE ROLE INTELLIGENCE</div><div class="scene-name">${names[page]||'Columbia AI'}</div><div class="status">${statuses[page]?.[0]||''}</div>`;

  const ctx=canvas.getContext('2d');
  let W=0,H=0,D=1,start=performance.now(),last=0,burstUntil=0,burstText='';
  const PI=Math.PI,TAU=PI*2;
  function resize(){const r=hero.getBoundingClientRect();D=Math.min(devicePixelRatio||1,2);W=Math.max(320,r.width);H=Math.max(220,r.height);canvas.width=Math.round(W*D);canvas.height=Math.round(H*D);canvas.style.width=W+'px';canvas.style.height=H+'px';ctx.setTransform(D,0,0,D,0,0)}
  new ResizeObserver(resize).observe(hero);resize();
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  const smooth=(a,b,v)=>{let t=clamp((v-a)/(b-a));return t*t*(3-2*t)};
  const lerp=(a,b,t)=>a+(b-a)*t;
  function rgba(hex,a){const h=hex.replace('#','');const n=parseInt(h,16);return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`}
  function line(x1,y1,x2,y2,color='#37d7ff',w=1,a=1,blur=0,dash=[]){ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=color;ctx.lineWidth=w;ctx.lineCap='round';if(blur){ctx.shadowColor=color;ctx.shadowBlur=blur}if(dash.length)ctx.setLineDash(dash);ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore()}
  function dot(x,y,r,color='#48ddff',a=1,blur=10){ctx.save();ctx.globalAlpha=a;ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=blur;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}
  function rect(x,y,w,h,color='#37d7ff',a=.6,fill=.05,blur=0,r=0){ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=color;ctx.lineWidth=1;if(blur){ctx.shadowColor=color;ctx.shadowBlur=blur}if(fill){ctx.fillStyle=rgba(color,fill);ctx.fillRect(x,y,w,h)}ctx.strokeRect(x,y,w,h);ctx.restore()}
  function text(t,x,y,size=8,color='#dff8ff',a=1,align='left',weight=700){ctx.save();ctx.globalAlpha=a;ctx.fillStyle=color;ctx.font=`${weight} ${size}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;ctx.textAlign=align;ctx.fillText(t,x,y);ctx.restore()}
  function packet(x1,y1,x2,y2,t,color='#64e9ff'){const q=(t%1+1)%1;const x=lerp(x1,x2,q),y=lerp(y1,y2,q);dot(x,y,2.2,color,.95,12)}
  function ring(x,y,r,color='#4bdcff',a=.6,w=1){ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=color;ctx.lineWidth=w;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.stroke();ctx.restore()}
  function iso(px,py,pz,yaw=0,pitch=-.15,cx=W*.69,cy=H*.65,scale=Math.min(W,H)*2.35){const c=Math.cos(yaw),s=Math.sin(yaw);let rx=px*c-pz*s,rz=px*s+pz*c;const cp=Math.cos(pitch),sp=Math.sin(pitch);let ry=py*cp-rz*sp,rz2=py*sp+rz*cp;const f=1/(7+rz2);return [cx+rx*scale*f,cy-ry*scale*f]}
  function backdrop(){const g=ctx.createRadialGradient(W*.72,H*.48,20,W*.72,H*.48,Math.max(W,H)*.48);g.addColorStop(0,'rgba(17,151,218,.14)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H)}

  function enterprise(t){
    backdrop();const q=(t%18)/18, build=smooth(0,.22,q)*(1-smooth(.78,.96,q)), live=smooth(.18,.30,q)*(1-smooth(.74,.9,q));
    const yaw=(-.12+Math.sin(t*.27)*.18),xs=2.2,zs=1.45,ht=4.5,floors=9;
    for(let gx=-3;gx<=3;gx+=.5){const a=iso(gx,0,-2.2,yaw),b=iso(gx,0,2.2,yaw);line(...a,...b,'#1f9cff',.55,.16*build,4)}
    for(let gz=-2.2;gz<=2.2;gz+=.5){const a=iso(-3,0,gz,yaw),b=iso(3,0,gz,yaw);line(...a,...b,'#1f9cff',.55,.16*build,4)}
    const bf=build*floors;
    for(let fl=0;fl<=floors;fl++){let v=clamp(bf-fl+.9);if(v<.01)continue;let y=fl*ht/floors;const p=[iso(-xs/2,y,-zs/2,yaw),iso(xs/2,y,-zs/2,yaw),iso(xs/2,y,zs/2,yaw),iso(-xs/2,y,zs/2,yaw)];for(let i=0;i<4;i++)line(...p[i],...p[(i+1)%4],'#39d9ff',1,.65*v,8)}
    for(let ix=0;ix<=4;ix++)for(let iz=0;iz<=3;iz++){let a=iso(-xs/2+ix*xs/4,0,-zs/2+iz*zs/3,yaw),b=iso(-xs/2+ix*xs/4,ht*build,-zs/2+iz*zs/3,yaw);line(...a,...b,'#9cefff',.9,.58*build,7)}
    const roles=[['PROJECT',W*.58,H*.18],['FINANCE',W*.87,H*.29],['PEOPLE',W*.91,H*.62],['PRECON',W*.77,H*.84],['IT',W*.50,H*.74]];const core=iso(0,ht*.52,0,yaw);
    roles.forEach((r,i)=>{const a=.28+.35*live;rect(r[1]-28,r[2]-10,56,20,'#42cfff',a,.035,5);text(r[0],r[1],r[2]+2,6,'#ccefff',a,'center',800);line(r[1],r[2],core[0],core[1],'#39cfff',.7,.18*live,4);packet(r[1],r[2],core[0],core[1],t*.16+i*.19,'#77eeff')});
    ring(core[0],core[1],18+Math.sin(t*2)*3,'#5ee7ff',.5*live,1);text('COLUMBIA AI',core[0],core[1]+3,6,'#ffffff',.75*live,'center',900);
  }
  function executive(t){
    backdrop();const cx=W*.72,cy=H*.52;ring(cx,cy,54,'#4acfff',.28,1);ring(cx,cy,84,'#277cff',.16,1);text('PORTFOLIO',cx,cy-4,7,'#d9f7ff',.8,'center',900);text('DECISION CORE',cx,cy+9,5,'#6aa8c4',.8,'center',800);
    const cards=[{n:'214',risk:1,a:-2.6},{n:'318',risk:1,a:-1.55},{n:'105',risk:0,a:-.5},{n:'77',risk:0,a:.55},{n:'62',risk:0,a:1.65},{n:'401',risk:0,a:2.7}];
    cards.forEach((c,i)=>{const a=c.a+t*.04,x=cx+Math.cos(a)*122,y=cy+Math.sin(a)*65;rect(x-27,y-15,54,30,c.risk?'#ff6578':'#42d9ff',c.risk?.78:.42,c.risk?.08:.03,8);text('PROJECT '+c.n,x,y-2,6,'#edfaff',.9,'center',850);text(c.risk?'DECISION':'MONITOR',x,y+8,5,c.risk?'#ff8b99':'#70abc0',.9,'center',800);line(x,y,cx,cy,c.risk?'#ff6578':'#3bcfff',c.risk?1:.6,c.risk?.35:.1,5);if(c.risk)packet(x,y,cx,cy,t*.22+i*.2,'#ff8390')});
    const p=(t%8)/8;const y=H*.82;line(W*.49,y,W*.92,y,'#1f6688',1,.4);for(let i=0;i<3;i++){let x=W*.57+i*W*.13;rect(x-38,y-16,76,32,i===0?'#ff6578':'#42d9ff',.35,.03);text(['INTERVENE','WATCH','IGNORE'][i],x,y+2,6,'#dff8ff',.8,'center',900)}packet(W*.49,y,W*.92,y,p,'#fff')
  }
  function project(t){
    const x0=W*.50,y0=H*.18,w=W*.46,h=H*.62;ctx.save();ctx.translate(x0,y0);ctx.rotate(-.035);for(let x=0;x<=w;x+=26)line(x,0,x,h,'#2389b5',.55,.17);for(let y=0;y<=h;y+=24)line(0,y,w,y,'#2389b5',.55,.17);rect(w*.16,h*.20,w*.27,h*.28,'#58dcff',.45,.025);rect(w*.52,h*.12,w*.30,h*.35,'#58dcff',.35,.02);rect(w*.34,h*.58,w*.42,h*.22,'#58dcff',.35,.02);text('LEVEL 3 • ELECTRICAL ROUGH-IN',w*.05,14,6,'#a8dbeb',.8);const scan=(t%5)/5*h;line(0,scan,w,scan,'#71efff',1.4,.8,12);ctx.restore();
    const rx=x0+w*.58,ry=y0+h*.32;ring(rx,ry,10+Math.sin(t*4)*3,'#ff6477',.8,1.5);line(rx-20,ry,rx+20,ry,'#ff6477',1,.7);line(rx,ry-20,rx,ry+20,'#ff6477',1,.7);rect(rx+20,ry-30,112,42,'#ff6578',.72,.08,8);text('RFI-142',rx+28,ry-15,7,'#fff',.95,'left',900);text('AFFECTS TOMORROW',rx+28,ry-3,5,'#ffb5bd',.9,'left',800);text('2-DAY EXPOSURE',rx+28,ry+7,5,'#ffb5bd',.9,'left',800);packet(W*.94,H*.78,rx,ry,t*.22,'#ff8292');
  }
  function preconstruction(t){
    backdrop();const cx=W*.73,cy=H*.52;for(let i=0;i<3;i++){const z=i*18+Math.sin(t*.7+i)*5,x=cx-120+i*30,y=cy-88+i*18;ctx.save();ctx.translate(x,y);ctx.rotate(-.08+i*.025);ctx.fillStyle=`rgba(9,44,61,${.20+i*.04})`;ctx.fillRect(0,0,210,132);ctx.strokeStyle=i===1?'#43e0c2':'#37bfe8';ctx.globalAlpha=.45;ctx.strokeRect(0,0,210,132);for(let k=0;k<5;k++)line(18,25+k*18,190,25+k*18,'#5cd5e8',.5,.18);for(let k=0;k<4;k++)line(28+k*42,15,28+k*42,116,'#5cd5e8',.5,.13);text(['DRAWINGS','SPECIFICATIONS','BID COVERAGE'][i],12,15,6,'#c9f7ff',.8);ctx.restore()}
    const p=(t%7)/7;const ax=cx+20+Math.sin(p*TAU)*26,ay=cy+8+Math.cos(p*TAU)*16;ring(ax,ay,12,'#ff6477',.8,1.2);rect(ax+16,ay-28,118,44,'#ff6578',.75,.07,8);text('SCOPE GAP',ax+25,ay-13,7,'#fff',.95);text('07 84 00 • FIRESTOPPING',ax+25,ay,5,'#ffb2bc',.9);text('ESTIMATOR REVIEW',ax+25,ay+10,5,'#ffb2bc',.9);line(ax,ay,ax+16,ay-7,'#ff6578',1,.8)
  }
  function finance(t){
    backdrop();const bx=W*.53,by=H*.78,bw=W*.40;line(bx,by,bx+bw,by,'#356d84',1,.5);const vals=[.42,.55,.47,.66,.72,.64,.84];vals.forEach((v,i)=>{const x=bx+i*(bw/(vals.length-1)),h=v*H*.34*(.78+.22*Math.sin(t*.8+i*.4));ctx.fillStyle='rgba(48,208,176,.14)';ctx.fillRect(x-10,by-h,20,h);ctx.strokeStyle='#36d4b2';ctx.globalAlpha=.55;ctx.strokeRect(x-10,by-h,20,h);text(['214','318','105','77','62','401','512'][i],x,by+14,5,'#7eb5c8',.75,'center',700)});
    const pts=[];for(let i=0;i<8;i++){const x=bx+i*bw/7,y=H*.28+Math.sin(i*.75+t*.18)*22+i*4;pts.push([x,y])}ctx.save();ctx.strokeStyle='#51dfff';ctx.lineWidth=2;ctx.shadowColor='#51dfff';ctx.shadowBlur=8;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.stroke();ctx.restore();const split=pts[5];line(split[0],H*.18,split[0],H*.78,'#ffd16a',1,.45,0,[4,4]);text('SCENARIO',split[0]+7,H*.21,6,'#ffe1a0',.85);for(let i=0;i<4;i++)packet(bx-25,by-30-i*16,pts[2+i][0],pts[2+i][1],t*.16+i*.22,'#54e6ff')
  }
  function people(t){
    backdrop();const projects=[['214',W*.78,H*.25],['318',W*.88,H*.53],['105',W*.74,H*.78]], people=[];for(let i=0;i<12;i++){const a=i/12*TAU+t*.025,r=80+(i%3)*18;people.push([W*.60+Math.cos(a)*r,H*.53+Math.sin(a)*r*.58,i])}
    people.forEach(p=>{dot(p[0],p[1],p[2]===3?4:2.4,p[2]===3?'#78f0c9':'#4ea6d0',p[2]===3?.95:.55,p[2]===3?16:5);if(p[2]===3){projects.forEach((pr,j)=>{line(p[0],p[1],pr[1],pr[2],j===0?'#78f0c9':'#3c9ac0',j===0?1.2:.6,j===0?.48:.12,6);packet(p[0],p[1],pr[1],pr[2],t*.18+j*.3,j===0?'#b1ffe5':'#54cfff')})}});projects.forEach((pr,j)=>{rect(pr[1]-34,pr[2]-14,68,28,j===0?'#6ce3bd':'#45bde0',j===0?.68:.36,j===0?.06:.02,7);text('PROJECT '+pr[0],pr[1],pr[2]-1,6,'#fff',.9,'center',850);text(j===0?'NEEDS SR. SUPER':'COVERED',pr[1],pr[2]+9,5,j===0?'#a9ffe3':'#7cbed3',.8,'center',800)});text('EXPERIENCE × AVAILABILITY × DEVELOPMENT',W*.52,H*.90,6,'#8ec3d5',.8)
  }
  function it(t){
    backdrop();const left=[['PROCORE',W*.51,H*.25],['ERP',W*.51,H*.43],['SHAREPOINT',W*.51,H*.61],['EMAIL',W*.51,H*.79]],gx=W*.68,gy=H*.52,ax=W*.79,ay=H*.52,right=[['EXEC',W*.91,H*.28],['PROJECT',W*.93,H*.48],['FINANCE',W*.91,H*.68]];left.forEach((n,i)=>{rect(n[1]-30,n[2]-11,60,22,'#40cfff',.42,.025);text(n[0],n[1],n[2]+2,5.5,'#dff8ff',.9,'center',850);line(n[1]+30,n[2],gx-26,gy,'#3dbbe8',.7,.22,4);packet(n[1]+30,n[2],gx-26,gy,t*.20+i*.18,'#6ee9ff')});ring(gx,gy,25,'#8d7dff',.65,1.3);ring(gx,gy,34+Math.sin(t*2)*3,'#5474ff',.25,1);text('GOV',gx,gy-1,7,'#fff',.9,'center',900);text('IDENTITY',gx,gy+10,4.5,'#b6b8ff',.85,'center',700);line(gx+25,gy,ax-22,ay,'#8d7dff',1,.38,7);packet(gx+25,gy,ax-22,ay,t*.28,'#d2c6ff');ring(ax,ay,22,'#4ee5ff',.65,1.2);text('AI',ax,ay+2,8,'#fff',.95,'center',900);right.forEach((n,i)=>{rect(n[1]-28,n[2]-11,56,22,'#42d9ff',.38,.02);text(n[0],n[1],n[2]+2,5.5,'#dff8ff',.9,'center',850);line(ax+22,ay,n[1]-28,n[2],'#3ed8ff',.7,.22,4);packet(ax+22,ay,n[1]-28,n[2],t*.18+i*.22,'#6feaff')});
  }
  function studio(t){
    backdrop();const stages=[['IDEA',W*.52],['PROTOTYPE',W*.65],['PILOT',W*.78],['SCALE',W*.91]],y=H*.66;stages.forEach((s,i)=>{ring(s[1],y,18+i*2,i===3?'#44e2b1':'#b266ff',.35+i*.07,1);text(s[0],s[1],y+3,5.5,'#eefaff',.9,'center',900);if(i<3){line(s[1]+20,y,stages[i+1][1]-20,y,'#955cff',.8,.27,5);packet(s[1]+20,y,stages[i+1][1]-20,y,t*.18+i*.27,'#e1b5ff')}});for(let i=0;i<8;i++){const a=i/8*TAU+t*.15,r=40+8*Math.sin(i);dot(W*.53+Math.cos(a)*r,H*.28+Math.sin(a)*r*.45,2.4,i===2?'#ffd56e':'#c57aff',i===2?.95:.48,8)}rect(W*.62,H*.18,W*.28,H*.20,'#ad69ff',.32,.02);text('SELECTED OPPORTUNITY',W*.64,H*.22,6,'#d9b8ff',.9);text('CLOSEOUT RISK RADAR',W*.64,H*.27,8,'#fff',.95);text('VALUE  9.2   •   FEASIBILITY  8.4',W*.64,H*.33,5.5,'#9ec6d8',.8);packet(W*.57,H*.31,W*.65,y,t*.21,'#f0c3ff')
  }
  function journey(t){
    backdrop();const pts=[[W*.50,H*.74],[W*.60,H*.54],[W*.72,H*.63],[W*.82,H*.40],[W*.93,H*.48]];ctx.save();ctx.strokeStyle='#2ca4c9';ctx.lineWidth=2;ctx.globalAlpha=.35;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.stroke();ctx.restore();const stages=['DISCOVER','PILOT','PROVE','SCALE','TRANSFORM'];pts.forEach((p,i)=>{ring(p[0],p[1],12+i*1.2,i===4?'#54e3b7':'#41d8ff',.55,1);dot(p[0],p[1],3,i===4?'#54e3b7':'#41d8ff',.9,8);text(stages[i],p[0],p[1]-18,5.5,'#e0f8ff',.85,'center',850)});const seg=(t*.16)%(pts.length-1),i=Math.floor(seg),u=seg-i,a=pts[i],b=pts[i+1];dot(lerp(a[0],b[0],u),lerp(a[1],b[1],u),4,'#ffffff',1,16);for(let k=0;k<4;k++)packet(pts[k][0],pts[k][1],pts[k+1][0],pts[k+1][1],t*.13+k*.25,'#60eaff');text('START NARROW  •  PROVE VALUE  •  SCALE WHAT WORKS',W*.50,H*.90,6,'#86bfd2',.85)
  }
  function business(t){
    backdrop();const x0=W*.51,base=H*.77,items=[['TIME',.46],['RISK',.58],['SCHEDULE',.69],['KNOWLEDGE',.52]];items.forEach((it,i)=>{const x=x0+i*62,h=it[1]*H*.42*(.85+.15*Math.sin(t*.7+i*.5));ctx.fillStyle='rgba(68,225,177,.11)';ctx.fillRect(x,base-h,34,h);ctx.strokeStyle='#48dcb4';ctx.globalAlpha=.55;ctx.strokeRect(x,base-h,34,h);text(it[0],x+17,base+14,5,'#93c8bb',.8,'center',800);packet(x+17,base-h,W*.87,H*.39,t*.12+i*.21,'#8ff8d8')});const cx=W*.87,cy=H*.39,r=45;ring(cx,cy,r,'#53e4b7',.7,2);ring(cx,cy,r+9+Math.sin(t*2)*3,'#3b9f8a',.25,1);text('VALUE',cx,cy-7,6,'#bafbe6',.9,'center',900);text('$8.4M',cx,cy+8,13,'#fff',.95,'center',900);text('ILLUSTRATIVE',cx,cy+20,4.5,'#76aa9b',.8,'center',800);ctx.save();ctx.strokeStyle='#5ae4bb';ctx.globalAlpha=.7;ctx.lineWidth=2;ctx.beginPath();for(let i=0;i<8;i++){let x=W*.55+i*W*.045,y=H*.24-i*8+Math.sin(i*.8+t*.25)*5;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();ctx.restore();
  }
  const draw={enterprise,executive,project,preconstruction,finance,people,it,studio,journey,'business-case':business}[page]||enterprise;
  function frame(now){requestAnimationFrame(frame);const t=(now-start)/1000;last=t;ctx.clearRect(0,0,W,H);draw(t);if(now<burstUntil){const a=clamp((burstUntil-now)/900);ring(W*.73,H*.50,30+(1-a)*120,'#ffffff',a*.35,1);ring(W*.73,H*.50,15+(1-a)*85,'#4ee2ff',a*.45,1)}const si=Math.floor(t/3.8)%((statuses[page]||['']).length);if(si!==statusIndex){statusIndex=si;hud.querySelector('.status').textContent=statuses[page][si]}}
  requestAnimationFrame(frame);

  function actionMessage(label){const maps={
    enterprise:'Tracing that request across projects, finance, people and enterprise knowledge.',
    executive:'Reframing the portfolio around the decision this action would require from leadership.',
    project:'Re-scanning the work area against RFIs, inspections, material and tomorrow’s plan.',
    preconstruction:'Separating drawing, specification and bid layers to expose where scope stops agreeing.',
    finance:'Re-running the forecast so the dashboard responds to the scenario instead of just describing it.',
    people:'Re-matching future project demand against Columbia experience, availability and development paths.',
    it:'Routing the request through identity, source permissions, governance and audit before intelligence reaches the user.',
    studio:'Turning the idea into an evidence-gated prototype path instead of another disconnected AI experiment.',
    journey:'Showing where this capability belongs in Discover → Pilot → Prove → Scale.',
    'business-case':'Rebuilding the value case from measurable Columbia outcomes instead of software features.'
  };flare.querySelector('span').textContent=maps[page]||'Columbia AI is interpreting the request.';flare.querySelector('b').textContent=label||'COLUMBIA AI';flare.classList.add('show');burstUntil=performance.now()+1200;setTimeout(()=>flare.classList.remove('show'),1750)}
  document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;actionMessage(b.textContent.trim())});
  canvas.addEventListener('click',()=>actionMessage(names[page]));
  const expand=controls.querySelector('.role-expand'),exit=controls.querySelector('.role-exit');
  function setFull(v){hero.classList.toggle('role-full',v);document.body.classList.toggle('role-full-open',v);setTimeout(resize,80)}
  expand.addEventListener('click',()=>setFull(true));exit.addEventListener('click',()=>setFull(false));hero.addEventListener('dblclick',e=>{if(e.target.closest('.btn,.role-controls'))return;setFull(!hero.classList.contains('role-full'))});addEventListener('keydown',e=>{if(e.key==='Escape')setFull(false)});
})();
