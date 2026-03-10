function showSection(id){
    document.querySelectorAll('section').forEach(s=>s.style.display='none');
    document.getElementById(id).style.display='block';
}

// Music toggle
function toggleMusic(){
    const m=document.getElementById('bg-music');
    if(m.paused)m.play();else m.pause();
}

// Agent login
function agentLogin(){
    const u=document.getElementById('username').value;
    const p=document.getElementById('password').value;
    if(u==='VANGUARD' && p==='PHILIPPINEREVOLUTION1900'){
        document.getElementById('agent-dashboard').style.display='block';
        alert('Access Granted');
    } else alert('Invalid Credentials');
}
function logoutAgent(){
    document.getElementById('agent-dashboard').style.display='none';
}

// Missions
function playMission(name){
    const missions={
        'Alpha':'Secure VIP convoy with maximum protection.',
        'Bravo':'Cyber intercept operation using encrypted channels.',
        'Charlie':'Urban field reconnaissance. Gather intel.',
        'Delta':'Emergency incident response. Coordinate with HQ.'
    };
    document.getElementById('mission-popup').innerHTML=`<strong>${name}</strong>: ${missions[name]}`;
    const msg = new SpeechSynthesisUtterance(missions[name]);
    window.speechSynthesis.speak(msg);
}

// Civilian officers
const civilianOfficers={
    'China': {name:'Sheree Oida', address:'East Nanjing Rd, Shanghai', img:'assets/images/sheree-oida.jpg'},
    'Japan': {name:'Jashlen This na Malambing', address:'2-1 Ginza, Tokyo', img:'assets/images/jashlen.jpg'}
};
function showCivilian(region){
    const o=civilianOfficers[region];
    document.getElementById('region-popup').innerHTML=
        `<img src="${o.img}" width="120"><br>• ${o.name} — ${o.address}`;
    const msg=new SpeechSynthesisUtterance(`Officer ${o.name}, located at ${o.address}`);
    window.speechSynthesis.speak(msg);
}

// Fugitives
function showFugitive(name){ alert(`Fugitive Info: ${name} (details in dashboard)`); }

// Classified
function openClassified(){
    const u=prompt("Enter Username:");
    const p=prompt("Enter Password:");
    if(u==="VANGUARD" && p==="PHILIPPINEREVOLUTION1900"){
        document.getElementById('classified-popup').innerHTML="***CLASSIFIED FILES*** Access Granted.";
        document.getElementById('classified-popup').style.display='block';
    } else alert("Access Denied");
}

// Help Desk
function submitHelp(){
    const name=document.getElementById('help-name').value;
    const email=document.getElementById('help-email').value;
    const msg=document.getElementById('help-message').value;
    if(name && email && msg){
        window.location.href=`mailto:demalunajomari16@gmail.com?subject=Help Desk from ${name}&body=Name:${name}%0AEmail:${email}%0AMessage:${msg}`;
    } else alert("Fill all fields.");
}

// World
function showHighRisk(){document.getElementById('world-popup').innerHTML="<ul><li>Beirut, Lebanon</li><li>Kabul, Afghanistan</li><li>Baghdad, Iraq</li></ul>";}
function showTerrorists(){document.getElementById('world-popup').innerHTML="<ul><li>John A. Doe - Syria</li><li>Ali K. - Iraq</li></ul>";}
function showWanted(){document.getElementById('world-popup').innerHTML="<ul><li>Jane Smith - UK</li><li>Michael Johnson - USA</li></ul>";}

