const story1 = `
We were so young when we met,
still discovering who we were,
and slowly learning what love truly meant.

It wasn’t always easy. I wasn’t strong enough to hold us together,
and at times, everything came crashing down, tearing us apart.

Yet somehow… even when I was farthest from you,
my heart never forgot you.
I carried a quiet homesickness for a place that no longer felt like mine—
until you returned to me, even through the ugly and the broken.
`

const story2 = `
And now, my heart is finally home.
Back to you.

 I dare to ask something of you once again:


Will you stay by my side through it all? will you be patient?
Will you face whatever comes with me?
for the rest of this life
and every one beyond it?
`

/* envelope */

function openEnvelope(){

document.querySelector(".flap").style.transform="rotateX(180deg)"

setTimeout(()=>{

document.getElementById("envelopeContainer").style.display="none"
document.getElementById("letterWindow").style.display="block"

typeWriter(story1)

startMusic()

},1000)

}


/* typewriter */

function typeWriter(text){

let story=document.getElementById("story")

let i=0

function typing(){

if(i<text.length){

story.innerHTML+=text.charAt(i)

i++

setTimeout(typing,30)

}

}

typing()

}


/* next page */

function nextPage(){

document.getElementById("story").innerHTML=""

typeWriter(story2)

document.getElementById("continueBtn").style.display="none"

document.getElementById("choiceArea").style.display="block"

}


/* stars */

function createStars(){

for(let i=0;i<80;i++){

let star=document.createElement("div")

star.className="star"

star.style.left=Math.random()*100+"vw"

star.style.animationDuration=(4+Math.random()*6)+"s"

document.getElementById("sky").appendChild(star)

}

}

createStars()


/* shooting star */

setInterval(()=>{

let s=document.createElement("div")

s.className="shooting"

s.style.top=Math.random()*40+"vh"

s.style.left=Math.random()*60+"vw"

document.getElementById("sky").appendChild(s)

setTimeout(()=>{s.remove()},1000)

},8000)



/* cursor particles */

document.addEventListener("mousemove",e=>{

let p=document.createElement("div")

p.className="particle"

p.style.left=e.pageX+"px"

p.style.top=e.pageY+"px"

document.body.appendChild(p)

setTimeout(()=>p.remove(),1000)

})



/* music fade in */

function startMusic(){

let music=document.getElementById("bgMusic")

music.volume=0
music.play()

let fade=setInterval(()=>{

if(music.volume<0.8){

music.volume+=0.02

}else{

clearInterval(fade)

}

},200)

}


/* no button escape */

function noHover(){

let btn=document.getElementById("noBtn")

btn.style.position="relative"

btn.style.left=(Math.random()*200-100)+"px"

btn.style.top=(Math.random()*100-50)+"px"

}


/* yes */

function yesClicked(){

document.getElementById("story").innerHTML=`

<span>Unable are the Loved to die</span><br>

<span>For Love is Immortality.</span><br>

<span>Nay, it is Deity.</span><br>


<span>— Emily Dickinson</span><br>

<br>

<span>And so your soul shall never fade,</span><br>
<span>for my love will cradle you through eternity.</span><br>
<span> I love you Nehan.</span><br>

<br>

<span>         yours, Aisha.</span><br>
`

document.getElementById("choiceArea").style.display="none"

for(let i=0;i<40;i++){

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="♡"

heart.style.left=Math.random()*window.innerWidth+"px"
heart.style.top=Math.random()*window.innerHeight+"px"

document.body.appendChild(heart)

}
}