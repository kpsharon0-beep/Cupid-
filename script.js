const startBtn = document.getElementById("startBtn");
const resultBtn = document.getElementById("resultBtn");

const loading = document.getElementById("loading");
const matchCard = document.getElementById("matchCard");
const finalCard = document.getElementById("finalCard");

const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");

const flash = document.getElementById("flash");
const hearts = document.getElementById("hearts");
const emojiRain = document.getElementById("emojiRain");
const confetti = document.getElementById("confetti");

const yourName = document.getElementById("yourName");
const crushName = document.getElementById("crushName");
const blockedWords = [
"phone","mobile","car","bus","bike","train","truck",
"apple","samsung","xiaomi","oppo","vivo","realme",
"oneplus","nokia","hp","dell","lenovo","acer","asus",
"bmw","audi","tesla","toyota","ford","kia","honda",
"google","amazon","youtube","instagram","facebook",
"whatsapp","you","me","my","myself","yourself",
"qwerty","admin","test","null","unknown","love",
"crush","lover","cupid"
];

function formatName(name){
    return name
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, c => c.toUpperCase());
}

function validateName(name){

    name = name.trim();

    if(name.length < 2)
        return "Name must contain at least 2 letters.";

    if(name.length > 15)
        return "Name is too long.";

    if(!/^[A-Za-z ]+$/.test(name))
        return "Only letters and spaces are allowed.";

    if(name.split(" ").length > 2)
        return "Please enter only one name.";

    if(blockedWords.includes(name.toLowerCase()))
        return "Please enter a real person's name.";

    return "";
}
const steps = [
document.getElementById("step1"),
document.getElementById("step2"),
document.getElementById("step3"),
document.getElementById("step4"),
document.getElementById("step5")
];

setInterval(createHeart,350);

function createHeart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML=Math.random()>0.5?"❤️":"💖";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(18+Math.random()*18)+"px";

h.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(h);

setTimeout(()=>h.remove(),10000);

}

startBtn.onclick=function(){

    let error = validateName(yourName.value);

if(error){
alert("❌ " + error);
return;
}

error = validateName(crushName.value);

if(error){
alert("❌ " + error);
return;
}

yourName.value = formatName(yourName.value);
crushName.value = formatName(crushName.value);

if(yourName.value.trim()===""||crushName.value.trim()===""){

alert("Please enter both names ❤️");

return;

}

startBtn.style.display="none";

loading.classList.remove("hidden");

let progress=0;

const messages=[
"Reading Hearts ❤️",
"Connecting to Cupid Server ☁️",
"Sending Names 💘",
"Taking Screenshot 📸",
"Finding Match ❤️"
];

let currentStep=0;

steps[0].classList.add("activeStep");

const timer=setInterval(()=>{

progress++;

progressBar.style.width=progress+"%";

if(progress===20){

currentStep++;

steps[1].classList.add("activeStep");

statusText.innerHTML=messages[1];

}

if(progress===40){

currentStep++;

steps[2].classList.add("activeStep");

statusText.innerHTML=messages[2];

}

if(progress===60){

currentStep++;

steps[3].classList.add("activeStep");

statusText.innerHTML=messages[3];

flash.classList.add("flashAnim");

setTimeout(()=>flash.classList.remove("flashAnim"),500);

}

if(progress===80){

currentStep++;

steps[4].classList.add("activeStep");

statusText.innerHTML=messages[4];

}

if(progress>=100){

clearInterval(timer);

loading.classList.add("hidden");

matchCard.classList.remove("hidden");

}

},60);

};

resultBtn.onclick=function(){

matchCard.classList.add("hidden");

finalCard.classList.remove("hidden");

if(navigator.vibrate){

navigator.vibrate([200,100,200,100,300]);

}

for(let i=0;i<180;i++){

const e=document.createElement("div");

e.className="laugh";

e.innerHTML="🤣";

e.style.left=Math.random()*100+"vw";

e.style.animationDuration=(2+Math.random()*3)+"s";

emojiRain.appendChild(e);

setTimeout(()=>e.remove(),5000);

}

const colors=["#ff006e","#00e5ff","#ffe600","#00ff95","#ffffff"];

for(let i=0;i<220;i++){

const c=document.createElement("div");

c.className="confettiPiece";

c.style.left=Math.random()*100+"vw";

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.animationDuration=(2+Math.random()*2)+"s";

confetti.appendChild(c);

setTimeout(()=>c.remove(),4000);

}

};
