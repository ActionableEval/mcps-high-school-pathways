const programs={
science:{title:'Science & Engineering',category:'STEM CENTER · CRITERIA-BASED',name:'Science, Math & Computer Science / Engineering',scope:'Engineering here means the criteria-based pathway at Wheaton HS. Other engineering pathways may be interest-based.',score:'90th percentile or higher in math',test:'MAP-M or PSAT Math',gpa:'3.6 GPA or higher',subjects:'Grade 7 & 8 math and science',prerequisite:'Prerequisite: Algebra or higher in Grade 8, enrolled or completed.',example:'92nd percentile in math + 3.7 math/science GPA + Algebra meets the listed benchmarks and prerequisite.'},
ib:{title:'IB',category:'GLOBE CENTER · CRITERIA-BASED',name:'International Baccalaureate (IB)',scope:'The IB application benchmark uses reading OR math, plus GPA across four core subjects.',score:'80th percentile or higher in reading OR math',test:'MAP-R / MAP-M or PSAT Verbal / Math',gpa:'3.25 GPA or higher',subjects:'Grade 7 & 8 English, social studies, math, and science',prerequisite:'IB also has a world-language prerequisite. Check language eligibility in your HSP report and MCPS guidance.',example:'82nd percentile in reading + 3.4 core-subject GPA meets the academic benchmarks. The student must also meet IB’s language prerequisite.'},
environment:{title:'Environmental & Medical',category:'STEM & MED CENTERS · CRITERIA-BASED',name:'Environmental Science / Medical Science / Biotechnology',scope:'These programs share the math percentile and math/science GPA benchmarks below.',score:'80th percentile or higher in math',test:'MAP-M or PSAT Math',gpa:'3.25 GPA or higher',subjects:'Grade 7 & 8 math and science',prerequisite:'Medical Science requires Algebra or higher in Grade 8. Check prerequisites for your selected program.',example:'82nd percentile in math + 3.4 math/science GPA meets the academic benchmarks. A Medical Science applicant also needs Algebra or higher.'},
arts:{title:'ARTS & GLOBE',category:'ARTS & GLOBE CENTERS · CRITERIA-BASED',name:'Humanities / Communication Arts Program (CAP)',scope:'This academic benchmark applies to Humanities and CAP. Dance, music, and visual art use a different assessment process.',score:'80th percentile or higher in reading',test:'MAP-R or PSAT Verbal',gpa:'3.25 GPA or higher',subjects:'Grade 7 & 8 English and social studies',prerequisite:'Use your HSP report to confirm which Humanities or CAP program you can apply to.',example:'85th percentile in reading + 3.4 English/social studies GPA meets the academic benchmarks for the lottery.'}
};
const programTabs=[...document.querySelectorAll('[data-program]')];
function selectProgram(tab){
  const data=programs[tab.dataset.program];
  programTabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});
  document.getElementById('example-panel').setAttribute('aria-labelledby',tab.id);
  const title=document.getElementById('example-title');title.replaceChildren(document.createTextNode(data.title+' example:'),document.createElement('br'));const count=document.createElement('em');count.textContent='300 → 120 → 60';title.append(count);
  ['category','name','scope','score','test','gpa','subjects','prerequisite'].forEach(key=>document.getElementById('program-'+key).textContent=data[key]);
  const example=document.getElementById('applicant-example');const label=document.createElement('strong');label.textContent='Student example: ';example.replaceChildren(label,document.createTextNode(data.example));
  resetSeats();
}
programTabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectProgram(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%programTabs.length;else if(e.key==='ArrowLeft')next=(i+programTabs.length-1)%programTabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=programTabs.length-1;else return;e.preventDefault();programTabs[next].focus();selectProgram(programTabs[next]);});});
const grid=document.getElementById('dot-grid');for(let i=0;i<120;i++){const dot=document.createElement('span');dot.className='applicant';grid.append(dot);}
const seatButton=document.getElementById('show-seats');
function resetSeats(){seatButton.setAttribute('aria-pressed','false');seatButton.textContent='Highlight 60 example seats';[...grid.children].forEach(dot=>dot.classList.remove('selected'));document.getElementById('seat-status').textContent='120 qualified other-school applicants shown.';}
seatButton.addEventListener('click',()=>{
  const active=seatButton.getAttribute('aria-pressed')!=='true';
  seatButton.setAttribute('aria-pressed',String(active));
  seatButton.textContent=active?'Show all applicants again':'Highlight 60 example seats';
  const order=Array.from({length:120},(_,i)=>i);
  // Shuffle without replacement; every highlight produces a fresh random set.
  for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  const chosen=new Set(active?order.slice(0,60):[]);
  [...grid.children].forEach((dot,i)=>dot.classList.toggle('selected',chosen.has(i)));
  document.getElementById('seat-status').textContent=active?'60 random example placements; 60 without an out-of-area seat in this illustration.':'120 qualified other-school applicants shown.';
});
