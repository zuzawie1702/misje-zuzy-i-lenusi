
import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { TASKS, WORKOUTS, LESSONS, FAMILY_EVENTS, REAL_ANIMALS, PETS, THEMES, WEEKLY_REWARDS, PLACEMENT_TESTS, ACHIEVEMENTS, COMPANION_EVOLUTIONS } from "./data/content.js";
import { db, hasFirebaseConfig, doc, onSnapshot, setDoc, serverTimestamp } from "./firebase.js";
import "./styles.css";

const initialState = {
  xp:{zuza:0,lena:0,team:0}, streak:{zuza:0,lena:0},
  pets:{zuza:"🐉",lena:"🦊"}, themes:{zuza:"amethyst",lena:"pink"},
  tasks:{}, taskHistory:{}, weeklyAssignments:{}, weeklyKey:"",
  completedLessons:{}, completedQuizzes:{}, placementResults:{}, placementDone:false, achievements:{}, companionEvolution:{zuza:1,lena:1}, companionRewards:{}, stats:{lessons:0, quizzes:0, animalCare:0}, emergency:false, journal:[],
  checkins:{}, chronicle:[], weeklyGoal:{ name:"Pizza", xp:500, icon:"🍕" },
  rewards:[
    {name:"Lody / kakao",cost:50},{name:"Wspólny film",cost:100},{name:"Pizza",cost:250},{name:"Kawiarnia",cost:400},{name:"Kino",cost:1000},{name:"Restauracja",cost:1200},{name:"Park trampolin",cost:1500}
  ], updatedAt:null
};

function level(xp){return Math.floor((xp||0)/100)+1}
function bar(xp){return `${Math.min(100,(xp||0)%100)}%`}
function ownerLabel(w){return w==="zuza"?"Zuza":w==="lena"?"Lenusia":"Drużyna"}
function ownerIcon(w){return w==="zuza"?"💜":w==="lena"?"🩷":"🤝"}
function randomFrom(list){return list[Math.floor(Math.random()*list.length)]}
function todayKey(){return new Date().toISOString().slice(0,10)}
function weekKey(){const d=new Date(); const onejan=new Date(d.getFullYear(),0,1); const week=Math.ceil((((d-onejan)/86400000)+onejan.getDay()+1)/7); return `${d.getFullYear()}-${week}`}
function dateMMDD(){return new Date().toISOString().slice(5,10)}
function patronForWeek(){ const wk=weekKey().split("-")[1] || "1"; return REAL_ANIMALS[Number(wk)%REAL_ANIMALS.length]; }

function makeWeeklyAssignments(){
  const rotationTasks = TASKS.filter(t=>t.who==="rotation");
  const assignments = {};
  rotationTasks.forEach((t,i)=>{ assignments[t.id] = i % 2 === 0 ? "zuza" : "lena"; });
  return assignments;
}

function assignedOwner(task,state){
  if(task.who !== "rotation") return task.who;
  const wk = weekKey();
  if(state.weeklyKey === wk && state.weeklyAssignments?.[task.id]) return state.weeklyAssignments[task.id];
  return makeWeeklyAssignments()[task.id] || "zuza";
}

function App(){
  const [tab,setTab]=useState("home");
  const [state,setState]=useState(()=>{const local=localStorage.getItem("misje_state"); return local ? {...initialState,...JSON.parse(local)} : initialState});
  const [online,setOnline]=useState(navigator.onLine);
  const [cloudReady,setCloudReady]=useState(false);
  const [workout,setWorkout]=useState(randomFrom(WORKOUTS));
  const [lessonPerson,setLessonPerson]=useState("lena");
  const [lessonCategory,setLessonCategory]=useState("Weterynaria");
  const [lesson,setLesson]=useState(null);
  const [quizResult,setQuizResult]=useState("");
  const [toast,setToast]=useState("");
  const [journalText,setJournalText]=useState("");
  const [rewardName,setRewardName]=useState("");
  const [rewardCost,setRewardCost]=useState("");
  const [nextMission,setNextMission]=useState(null);
  const [testPerson,setTestPerson]=useState("lena");
  const [testArea,setTestArea]=useState("Weterynaria");
  const [testAnswers,setTestAnswers]=useState({});
  const [recommendation,setRecommendation]=useState("");

  const appDocRef=useMemo(()=>hasFirebaseConfig&&db?doc(db,"families","zuza-lenusia"):null,[]);
  useEffect(()=>{const go=()=>setOnline(navigator.onLine); window.addEventListener("online",go); window.addEventListener("offline",go); return()=>{window.removeEventListener("online",go); window.removeEventListener("offline",go)}},[]);
  useEffect(()=>{localStorage.setItem("misje_state",JSON.stringify(state))},[state]);
  useEffect(()=>{if(!appDocRef)return; const unsub=onSnapshot(appDocRef,async snap=>{if(snap.exists()){setState({...initialState,...snap.data()}); setCloudReady(true)} else {await setDoc(appDocRef,{...initialState,updatedAt:serverTimestamp()}); setCloudReady(true)}}); return()=>unsub()},[appDocRef]);

  function showToast(t){setToast(t); setTimeout(()=>setToast(""),2300)}
  function addChronicle(next, text, icon="✨"){ if(!next.chronicle) next.chronicle=[]; next.chronicle.unshift({date:new Date().toLocaleString("pl-PL"), text, icon}); return next; }
  async function save(next){localStorage.setItem("misje_state",JSON.stringify(next)); setState(next); if(appDocRef) await setDoc(appDocRef,{...next,updatedAt:serverTimestamp()},{merge:true})}
  function ensureWeek(){
    const wk=weekKey();
    if(state.weeklyKey!==wk){
      let next={...state, weeklyKey:wk, weeklyAssignments:makeWeeklyAssignments(), weeklyGoal:randomFrom(WEEKLY_REWARDS)};
      next=addChronicle(next,`Nowy tydzień: wybrano cel ${next.weeklyGoal.icon} ${next.weeklyGoal.name}.`,"🎯");
      save(next); showToast("🎲 Nowy tygodniowy podział i cel gotowe!");
    }
  }

  const special = FAMILY_EVENTS.find(e=>e.date===dateMMDD());
  const patron = patronForWeek();
  const visibleTasks = TASKS.map(t=>({...t,assigned:assignedOwner(t,state)})).filter(t=>!state.emergency || ["irena","read_zuza","read_lena","exercise_zuza","exercise_lena","emotions","animal_water"].includes(t.id));
  const openTasks = visibleTasks.filter(t=>state.tasks?.[t.id] !== "done");

  function setTaskStatus(id,status){const next=structuredClone(state); next.tasks[id]=status; save(next)}
  function finishTask(task){
    if(state.tasks?.[task.id]==="done"){showToast("To zadanie jest już zaliczone ✅"); return}
    const assigned=task.assigned; let next=structuredClone(state);
    next.tasks[task.id]="done"; next.taskHistory[task.id]=assigned;
    if(assigned==="zuza"||assigned==="lena"){next.xp[assigned]+=task.xp; next.streak[assigned]+=1; next.xp.team+=Math.ceil(task.xp/2)} else next.xp.team+=task.xp;
    next=addChronicle(next,`${ownerLabel(assigned)} ukończyła misję: ${task.title} (+${task.xp} XP).`, "✅");
    next=checkAllCompanions(next);
    save(next); showToast(`🎉 ${ownerLabel(assigned)} zdobywa +${task.xp} XP!`);
  }
  function customXp(who,xp,label="Misja"){let next=structuredClone(state); if(who==="team")next.xp.team+=xp; else{next.xp[who]+=xp; next.streak[who]+=1; next.xp.team+=Math.ceil(xp/2)} if(!next.stats) next.stats={lessons:0,quizzes:0,animalCare:0}; if(label.startsWith("Opieka")) next.stats.animalCare=(next.stats.animalCare||0)+1; next=addChronicle(next,`${label}: +${xp} XP dla ${ownerLabel(who)}.`, "✨"); next=checkAchievements(next); next=checkAllCompanions(next); save(next); showToast(`✨ ${label}: +${xp} XP dla ${ownerLabel(who)}!`)}
  function chooseLesson(){const arr=LESSONS[lessonPerson][lessonCategory]; setLesson({...randomFrom(arr),id:`${Date.now()}`}); setQuizResult("");}
  function completeLesson(){
    if(!lesson)return; const key=`${todayKey()}-${lessonPerson}-${lessonCategory}-${lesson.title}`;
    if(state.completedLessons?.[key]){showToast("Ta mikrolekcja jest już zaliczona dzisiaj ✅"); return}
    let next=structuredClone(state); if(!next.completedLessons)next.completedLessons={}; next.completedLessons[key]=true; next.xp[lessonPerson]+=10; next.streak[lessonPerson]+=1; next.xp.team+=5; if(!next.stats) next.stats={lessons:0,quizzes:0,animalCare:0}; next.stats.lessons=(next.stats.lessons||0)+1; next=addChronicle(next,`${ownerLabel(lessonPerson)} przeczytała lekcję: ${lesson.title}.`, "🎓"); next=checkAchievements(next); next=checkAllCompanions(next); save(next); showToast(`🎓 +10 XP dla ${ownerLabel(lessonPerson)} i +5 XP drużyny`);
  }
  function answerQuiz(index){
    if(!lesson?.quiz) return;
    const key=`${todayKey()}-${lessonPerson}-${lessonCategory}-${lesson.title}-quiz`;
    const correct = index === lesson.quiz.answer;
    setQuizResult((correct ? "✅ Dobrze! " : "🟡 Nie tym razem. ") + lesson.quiz.explain);
    if(correct && !state.completedQuizzes?.[key]){
      let next=structuredClone(state); if(!next.completedQuizzes)next.completedQuizzes={}; next.completedQuizzes[key]=true; next.xp[lessonPerson]+=5; next.xp.team+=2; if(!next.stats) next.stats={lessons:0,quizzes:0,animalCare:0}; next.stats.quizzes=(next.stats.quizzes||0)+1; next=addChronicle(next,`${ownerLabel(lessonPerson)} poprawnie rozwiązała quiz: ${lesson.title}.`, "🧩"); next=checkAchievements(next); next=checkAllCompanions(next); save(next); showToast("🧩 Quiz dobrze! +5 XP");
    }
  }
  function addCheckin(time, mood, energy, overload){
    let next=structuredClone(state); if(!next.checkins)next.checkins={}; if(!next.checkins[todayKey()])next.checkins[todayKey()]={};
    next.checkins[todayKey()][time]={mood,energy,overload,at:new Date().toLocaleTimeString("pl-PL")};
    next=addChronicle(next,`Check-in ${time}: nastrój ${mood}, energia ${energy}, przeciążenie ${overload}.`, "🔋");
    next=awardAchievement(next, "energyAware");
    save(next); showToast("🔋 Check-in zapisany!");
  }
  function addJournal(){if(!journalText.trim())return showToast("Wystarczy jedno zdanie 🙂"); let next=structuredClone(state); next.journal.unshift({person:lessonPerson,text:journalText.trim(),date:new Date().toLocaleString("pl-PL")}); next.xp[lessonPerson]+=10; next.xp.team+=5; next=addChronicle(next,`${ownerLabel(lessonPerson)} dodała wpis w relacjach/emocjach.`, "❤️"); next=checkAllCompanions(next); setJournalText(""); save(next); showToast("❤️ Wpis zapisany +10 XP")}
  function addReward(){if(!rewardName.trim()||!rewardCost)return showToast("Wpisz nazwę i koszt"); const next=structuredClone(state); next.rewards.push({name:rewardName.trim(),cost:Number(rewardCost)}); setRewardName(""); setRewardCost(""); save(next)}
  function setPet(person,pet){ if(state.xp[person] < pet.unlock){showToast(`🔒 ${pet.name} od ${pet.unlock} XP`); return} save({...state,pets:{...state.pets,[person]:pet.icon}})}
  function setTheme(person,id){save({...state,themes:{...state.themes,[person]:id}})}
  function pickNextMission(){ const t=randomFrom(openTasks.length?openTasks:visibleTasks); setNextMission(t); showToast(`⭐ Wybrano misję: ${t.title}`); }


  function awardAchievement(next, id){
    const ach = ACHIEVEMENTS.find(a=>a.id===id);
    if(!ach) return next;
    if(!next.achievements) next.achievements={};
    if(next.achievements[id]) return next;
    next.achievements[id] = { at:new Date().toLocaleString("pl-PL") };
    next = addChronicle(next, `Odblokowano osiągnięcie: ${ach.title}.`, ach.icon);
    showToast(`${ach.icon} Osiągnięcie: ${ach.title}`);
    return next;
  }

  function checkAchievements(next){
    if((next.xp?.team||0) >= 100) next = awardAchievement(next, "first100");
    if((next.xp?.team||0) >= 500) next = awardAchievement(next, "weeklyHero");
    if((next.stats?.lessons||0) >= 1) next = awardAchievement(next, "firstLesson");
    if((next.stats?.quizzes||0) >= 1) next = awardAchievement(next, "firstQuiz");
    if((next.stats?.animalCare||0) >= 1) next = awardAchievement(next, "animalKeeper");
    if((next.stats?.lessons||0) >= 5) next = awardAchievement(next, "academyMaster");
    return next;
  }

  function finishPlacement(){
    const questions = PLACEMENT_TESTS[testPerson][testArea] || [];
    const correct = questions.reduce((sum,q,i)=> sum + (testAnswers[i] === q.answer ? 1 : 0), 0);
    const pct = questions.length ? correct / questions.length : 0;
    const lvl = pct >= .75 ? "zaawansowany" : pct >= .45 ? "średni" : "początkujący";
    let next = structuredClone(state);
    if(!next.placementResults) next.placementResults={};
    if(!next.placementResults[testPerson]) next.placementResults[testPerson]={};
    next.placementResults[testPerson][testArea] = { correct, total:questions.length, level:lvl, at:new Date().toLocaleString("pl-PL") };
    next.placementDone = true;
    next = addChronicle(next, `${ownerLabel(testPerson)} ukończyła test: ${testArea}. Wynik: ${correct}/${questions.length}, poziom: ${lvl}.`, "🎯");
    save(next);
    setTestAnswers({});
    showToast(`🎯 Poziom ${testArea}: ${lvl}`);
  }

  function recommendLesson(){
    const results = state.placementResults?.[lessonPerson] || {};
    const categories = Object.keys(LESSONS[lessonPerson]);
    const ordered = categories.slice().sort((a,b)=>{
      const rank = { "początkujący":0, "średni":1, "zaawansowany":2 };
      return (rank[results[a]?.level] ?? -1) - (rank[results[b]?.level] ?? -1);
    });
    const chosen = ordered[0] || categories[0];
    setLessonCategory(chosen);
    setRecommendation(`🤖 Propozycja: ${chosen}. Wybrałam ten obszar, bo według testu warto go teraz wzmacniać.`);
    setLesson(null);
  }

  function energySuggestedMode(){
    const today = state.checkins?.[todayKey()] || {};
    const values = Object.values(today);
    const low = values.some(v => v.energy === "mało" || v.overload === "dużo");
    if(low) return "regeneracyjny";
    const high = values.some(v => v.energy === "dużo" && v.overload === "mało");
    if(high) return "wyzwanie";
    return "normalny";
  }


  function companionStage(person){
    const currentLevel = level(state.xp?.[person] || 0);
    const data = COMPANION_EVOLUTIONS[person];
    if(!data) return null;
    return data.stages.slice().reverse().find(s => currentLevel >= s.level) || data.stages[0];
  }

  function nextCompanionStage(person){
    const currentLevel = level(state.xp?.[person] || 0);
    const data = COMPANION_EVOLUTIONS[person];
    if(!data) return null;
    return data.stages.find(s => s.level > currentLevel) || null;
  }

  function checkCompanionEvolution(next, person){
    const currentLevel = level(next.xp?.[person] || 0);
    const data = COMPANION_EVOLUTIONS[person];
    if(!data) return next;
    const stage = data.stages.slice().reverse().find(s => currentLevel >= s.level) || data.stages[0];
    if(!next.companionEvolution) next.companionEvolution={zuza:1,lena:1};
    if((next.companionEvolution[person] || 1) < stage.level){
      next.companionEvolution[person] = stage.level;
      next.pets[person] = stage.icon;
      next = addChronicle(next, `${data.name} ewoluował: ${stage.title}!`, "🌟");
      showToast(`🌟 ${stage.title}!`);
    }
    return next;
  }

  function checkAllCompanions(next){
    next = checkCompanionEvolution(next, "zuza");
    next = checkCompanionEvolution(next, "lena");
    return next;
  }

  function companionBonusText(person){
    const mode = energySuggestedMode();
    if(person === "zuza"){
      if(mode === "regeneracyjny") return "🐉 Smok proponuje dziś jedną małą misję zamiast presji.";
      if(mode === "wyzwanie") return "🐉 Smok ma dziś ogień — można wybrać trudniejszą lekcję.";
      return "🐉 Smok pilnuje małych kroków i akademii.";
    }
    if(mode === "regeneracyjny") return "🦊 Lisek proponuje spokojną lekcję albo obserwację zwierzęcia.";
    if(mode === "wyzwanie") return "🦊 Lisek jest gotowy na quiz, szachy albo weterynarię.";
    return "🦊 Lisek wspiera ciekawość i przewidywalny rytm.";
  }

  const gardenItems=["🌱","🌷","🌻","🌳","🦋","🐝","🍓","🌿","🌸","🍄","🪴","🌺"];
  const garden=Array.from({length:Math.min(18,level(state.xp.team)+4)},(_,i)=>gardenItems[i%gardenItems.length]).join(" ");
  const goal = state.weeklyGoal || initialState.weeklyGoal;
  const goalPct = Math.min(100, Math.round((state.xp.team / goal.xp) * 100));

  return <div>
    <header><h1>🌈 Misje Zuzy i Lenusi</h1><p>Rodzinna gra rozwojowa: misje, stado, nauka, energia i wspólny progres.</p></header>
    <main>
      {tab==="home"&&<>
        <section className="card quote"><b>Hasło dnia:</b><br/>Nie musimy zrobić wszystkiego. Robimy następną dobrą misję. 🐾</section>
        {special&&<section className="card" style={{borderColor:"#facc15"}}><h2>{special.icon} {special.title}</h2><p>{special.bonus}</p><span className="pill">🎂 Wydarzenie specjalne</span></section>}
        <section className="card patron"><h2>{patron.icon} Patron tygodnia: {patron.name}</h2><p>Ten tydzień prowadzi {patron.name}. Cechy: {patron.traits.join(", ")}.</p><span className="pill">🐾 Stado wspiera misje</span><span className="pill">🔋 Tryb dnia: {energySuggestedMode()}</span></section>
        <section className="card row"><span className={`pill ${online?"online":"offline"}`}>{online?"☁️ internet jest":"📴 offline"}</span><span className={`pill ${cloudReady?"online":"offline"}`}>{hasFirebaseConfig?(cloudReady?"✅ baza działa":"łączę z bazą"):"Firebase niepodpięty"}</span><button className="warn" onClick={()=>save({...state,emergency:!state.emergency})}>🚨 Minimum ratunkowe</button><button className="blue" onClick={ensureWeek}>🎲 Podział tygodnia</button><button className="primary" onClick={pickNextMission}>⭐ Wybierz mi misję</button></section>
        {nextMission&&<section className="card"><h2>⭐ Następna dobra misja</h2><div className="task"><b>{ownerIcon(nextMission.assigned)} {nextMission.title}</b><p>{ownerLabel(nextMission.assigned)} · {nextMission.description}</p><button className="success" onClick={()=>finishTask(nextMission)}>Zrobione +{nextMission.xp} XP</button></div></section>}
        <section className="profiles">{["zuza","lena"].map(p=><div className={`person ${p}`} key={p}><div className="row"><div><b>{ownerLabel(p)}</b><br/><span className="pill">Poziom {level(state.xp[p])}</span></div><div className="avatar">{state.pets[p]}</div></div><p>XP: <b>{state.xp[p]}</b> · Seria: <b>{state.streak[p]}</b></p><div className="progress"><div className="bar" style={{width:bar(state.xp[p])}} /></div></div>)}</section>
        <section className="grid">
          {["zuza","lena"].map(p=>{
            const st=companionStage(p); const nx=nextCompanionStage(p);
            return <div className={`card companion ${p}`} key={p}>
              <div className="row"><h2>{st?.icon} {st?.title}</h2><span className="pill">{ownerLabel(p)}</span></div>
              <p>{st?.description}</p>
              <p><b>{companionBonusText(p)}</b></p>
              {nx ? <span className="pill">Następna ewolucja: poziom {nx.level} — {nx.title}</span> : <span className="pill">Maksymalna forma na ten etap ✨</span>}
            </div>
          })}
        </section>
        <section className="card goal"><h2>{goal.icon} Cel tygodnia: {goal.name}</h2><p><b>{state.xp.team}</b> / {goal.xp} XP drużyny</p><div className="progress"><div className="bar" style={{width:`${goalPct}%`}} /></div></section>
        <section className="card"><h2>🌱 Ogród drużyny</h2><p><span className="pill">⭐ {state.xp.team} XP drużyny</span> <span className="pill">Poziom ogrodu {level(state.xp.team)}</span></p><div className="garden">{garden}</div></section>
      </>}

      {tab==="tasks"&&<section className="card"><div className="row"><h2>✅ Misje</h2><button onClick={()=>save({...state,tasks:{}})}>Nowy dzień</button></div>{state.emergency&&<div className="task warn"><b>Minimum ratunkowe włączone.</b><br/>Mniej zadań, bez kar i bez utraty punktów.</div>}{visibleTasks.map(task=>{const status=state.tasks?.[task.id]||"todo";return <div className={`task ${status}`} key={task.id}><div className="row"><b>{ownerIcon(task.assigned)} {task.title}</b><span className="pill">{ownerLabel(task.assigned)} · {task.frequency} · +{task.xp} XP</span></div><p>{task.area} · {task.description}</p><div><button onClick={()=>setTaskStatus(task.id,"todo")}>Do zrobienia</button><button className="warn" onClick={()=>setTaskStatus(task.id,"doing")}>W trakcie</button><button className="success" disabled={status==="done"} onClick={()=>finishTask(task)}>{status==="done"?"✓ Zaliczone":"Zrobione"}</button></div></div>})}</section>}

      {tab==="body"&&<section className="card"><h2>🏇 Ćwiczenia jeździeckie</h2><p>20 minut: 3 ćwiczenia wspierające dosiad, balans, biodra i stabilizację.</p><button className="primary" onClick={()=>setWorkout(randomFrom(WORKOUTS))}>Losuj zestaw</button><div className="task"><h3>{workout.name}</h3>{workout.items.map(item=><div className="mini" key={item[0]}><div className="row"><b>{item[0]}</b><span className="avatar">{item[2]}</span></div><p>{item[1]}</p></div>)}<button className="success" onClick={()=>customXp("team",20,"Trening")}>Trening zrobiony +20 XP</button></div></section>}

      {tab==="learn"&&<section className="card"><h2>🧠 Akademie</h2><div className="grid"><select value={lessonPerson} onChange={e=>{const p=e.target.value;setLessonPerson(p);setLessonCategory(Object.keys(LESSONS[p])[0]);setLesson(null);setQuizResult("")}}><option value="lena">Lenusia</option><option value="zuza">Zuza</option></select><select value={lessonCategory} onChange={e=>{setLessonCategory(e.target.value);setLesson(null);setQuizResult("")}}>{Object.keys(LESSONS[lessonPerson]).map(c=><option key={c}>{c}</option>)}</select></div><button className="primary" onClick={chooseLesson}>🎲 Losuj mikrolekcję</button><button className="blue" onClick={recommendLesson}>🤖 Dobierz według poziomu</button>{recommendation&&<div className="mini"><b>{recommendation}</b></div>}{lesson&&<div className="task lessonBox"><h3>🎓 {lesson.title}</h3><p><b>Miniwykład:</b> {lesson.text}</p><p><b>Dlaczego to ważne:</b> {lesson.why}</p><p><b>Przykład:</b> {lesson.example}</p>{lesson.steps&&<ol className="steps">{lesson.steps.map(s=><li key={s}>{s}</li>)}</ol>}<p><b>Zadanie:</b> {lesson.task}</p><button className="success" onClick={completeLesson}>✓ Przeczytane +10 XP</button>{lesson.quiz&&<div className="mini"><h3>🧩 Quiz</h3><p><b>{lesson.quiz.q}</b></p>{lesson.quiz.options.map((o,i)=><button key={o} className="blue" onClick={()=>answerQuiz(i)}>{o}</button>)}{quizResult&&<p><b>{quizResult}</b></p>}</div>}</div>}</section>}

      {tab==="energy"&&<section className="card"><h2>🔋 Energia i samopoczucie</h2><p>Check-in 3 razy dziennie. Wystarczy kliknąć jedną linię.</p>{["rano","popołudnie","wieczór"].map(t=><div className="task" key={t}><h3>{t==="rano"?"🌅":t==="popołudnie"?"☀️":"🌙"} {t}</h3><div className="grid3"><button onClick={()=>addCheckin(t,"dobrze","dużo","mało")}>😊 🔋 dużo 🌿 spokojnie</button><button onClick={()=>addCheckin(t,"tak sobie","średnio","średnio")}>😐 🔋 średnio ⚖️ trochę</button><button onClick={()=>addCheckin(t,"słabo","mało","dużo")}>😔 🔋 mało 🌪️ za dużo</button></div></div>)}</section>}

      {tab==="animals"&&<section className="card"><h2>🐾 Nasze stado</h2><div className="grid">{REAL_ANIMALS.map(a=><div className="mini" key={a.id}><h3>{a.icon} {a.name}</h3><p>{a.species} · {a.sex}</p><p>{a.traits.map(t=><span className="pill" key={t}>{t}</span>)}</p><button className="success" onClick={()=>customXp("team",10,`Opieka: ${a.name}`)}>Misja troski +10 XP</button></div>)}</div></section>}

      {tab==="chronicle"&&<section className="card"><h2>📖 Kronika Stada</h2><p>Tu zapisują się ważne momenty: misje, lekcje, quizy, check-iny i wydarzenia.</p><div className="chronicle">{(state.chronicle||[]).length===0?<div className="mini">Jeszcze pusto. Wykonaj misję albo lekcję, a pojawi się pierwszy wpis.</div>:(state.chronicle||[]).map((c,i)=><div className="mini" key={i}><span className="pill">{c.icon} {c.date}</span><p>{c.text}</p></div>)}</div></section>}


      {tab==="companions"&&<section className="card"><h2>🐉🦊 Towarzysze</h2><p>Smok Zuzy i Lis Lenusi rozwijają się razem z poziomem. Po awansie zmieniają formę i zapisują wydarzenie w Kronice.</p><div className="grid">{["zuza","lena"].map(p=>{const data=COMPANION_EVOLUTIONS[p]; const current=companionStage(p); return <div className={`task companion ${p}`} key={p}><h3>{current?.icon} {data.name}</h3><p><b>Aktualna forma:</b> {current?.title}</p><p>{current?.description}</p><h4>Ścieżka ewolucji</h4>{data.stages.map(s=><div className={`mini ${level(state.xp[p])>=s.level?"done":""}`} key={s.title}><span className="avatar">{s.icon}</span><b> Poziom {s.level}: {s.title}</b><p>{s.description}</p></div>)}</div>})}</div></section>}

      {tab==="pets"&&<section className="card"><h2>🐾 Zwierzaki i motywy</h2>{["zuza","lena"].map(p=><div className="task" key={p}><h3>{ownerLabel(p)}</h3><p>Motyw:</p>{THEMES[p].map(th=><button key={th.id} style={{background:th.color,color:"white"}} onClick={()=>setTheme(p,th.id)}>{th.name}</button>)}<p>Zwierzak:</p><div className="animals">{PETS.map(pet=><button key={pet.name} className={state.xp[p] < pet.unlock ? "locked":""} onClick={()=>setPet(p,pet)} title={`${pet.name} od ${pet.unlock} XP`}>{pet.icon}</button>)}</div></div>)}<h3>🎁 Nagrody</h3>{state.rewards.map((r,i)=><div className="mini" key={i}>🎁 {r.name} — {r.cost} XP drużyny</div>)}<div className="grid"><input value={rewardName} onChange={e=>setRewardName(e.target.value)} placeholder="Nowa nagroda"/><input value={rewardCost} onChange={e=>setRewardCost(e.target.value)} type="number" placeholder="Koszt XP"/></div><button className="primary" onClick={addReward}>Dodaj nagrodę</button></section>}


      {tab==="placement"&&<section className="card"><h2>🎯 Test poziomujący</h2><p>Krótki test pomaga uniknąć nudnych początków. Wynik zapisze poziom: początkujący, średni albo zaawansowany.</p><div className="grid"><select value={testPerson} onChange={e=>{const p=e.target.value; setTestPerson(p); setTestArea(Object.keys(PLACEMENT_TESTS[p])[0]); setTestAnswers({});}}><option value="lena">Lenusia</option><option value="zuza">Zuza</option></select><select value={testArea} onChange={e=>{setTestArea(e.target.value); setTestAnswers({});}}>{Object.keys(PLACEMENT_TESTS[testPerson]).map(a=><option key={a}>{a}</option>)}</select></div>{(PLACEMENT_TESTS[testPerson][testArea]||[]).map((q,idx)=><div className="mini" key={idx}><h3>{idx+1}. {q.q}</h3>{q.options.map((o,i)=><button key={o} className={testAnswers[idx]===i?"success":"blue"} onClick={()=>setTestAnswers({...testAnswers,[idx]:i})}>{o}</button>)}</div>)}<button className="primary" onClick={finishPlacement}>Zapisz wynik testu</button><h3>Twoje poziomy</h3><div className="grid">{Object.entries(state.placementResults?.[testPerson]||{}).map(([area,res])=><div className="mini" key={area}><b>{area}</b><p>{res.correct}/{res.total} · poziom: <b>{res.level}</b></p></div>)}</div></section>}

      {tab==="achievements"&&<section className="card"><h2>🏆 Osiągnięcia</h2><p>Odznaki za pierwsze sukcesy i regularność.</p><div className="grid">{ACHIEVEMENTS.map(a=><div className={`mini ${state.achievements?.[a.id]?"done":""}`} key={a.id}><h3>{a.icon} {a.title}</h3><p>{a.description}</p><span className="pill">{state.achievements?.[a.id] ? "Odblokowane" : "Jeszcze zablokowane"}</span></div>)}</div></section>}


      {tab==="relations"&&<section className="card"><h2>❤️ Emocje i relacje</h2><textarea value={journalText} onChange={e=>setJournalText(e.target.value)} placeholder="Jedno zdanie wystarczy: dziś czułam... potrzebowałam..."/><button className="success" onClick={addJournal}>Zapisz wpis +10 XP</button>{state.journal.slice(0,5).map((j,i)=><div className="mini" key={i}><span className="pill">{ownerLabel(j.person)} · {j.date}</span><p>{j.text}</p></div>)}</section>}
    </main>

    {toast&&<div className="toast">{toast}</div>}
    <nav>{[["home","🏠","Start"],["tasks","✅","Misje"],["body","🏇","Ciało"],["learn","🧠","Nauka"],["energy","🔋","Energia"],["placement","🎯","Test"],["achievements","🏆","Odznaki"],["animals","🐾","Stado"],["chronicle","📖","Kronika"],["companions","🐉","Towarz."],["relations","❤️","Relacje"],["pets","🎨","Profil"]].map(([id,icon,label])=><button key={id} className={tab===id?"active":""} onClick={()=>setTab(id)}>{icon}<br/>{label}</button>)}</nav>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
