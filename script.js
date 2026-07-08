// ==========================
// TYPING EFFECT
// ==========================

const text = [
    "AI & Machine Learning Engineer",
    "Data Science Enthusiast",
    "Python Developer",
    "Java Programmer",
    "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,120);

    }

})();


// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

menuBtn.onclick = function(){

    menu.classList.toggle("show");

}


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

window.addEventListener("scroll",function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 40){

        nav.style.background="rgba(0,0,0,.85)";
        nav.style.boxShadow="0 5px 20px rgba(0,229,255,.3)";

    }

    else{

        nav.style.background="rgba(255,255,255,.05)";
        nav.style.boxShadow="none";

    }

});


// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ==========================
// SCROLL REVEAL
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hidden=document.querySelectorAll(".about,.skills,.projects,#certificates,.contact");

hidden.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00e5ff";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ==========================
// CONTACT FORM
// ==========================

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

const name=form.querySelector("input[type='text']").value;

const email=form.querySelector("input[type='email']").value;

const message=form.querySelector("textarea").value;

if(name===""||email===""||message===""){

alert("Please fill all the fields.");

return;

}

alert("Thank you for contacting me!");

form.reset();

});


// ==========================
// IMAGE HOVER EFFECT
// ==========================

const image=document.querySelector(".hero-right img");

image.addEventListener("mousemove",()=>{

image.style.transform="scale(1.05) rotate(3deg)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1) rotate(0deg)";

});


// ==========================
// PROJECT CARD ANIMATION
// ==========================

const cards=document.querySelectorAll(".project");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ==========================
// SKILL CARD EFFECT
// ==========================

const skill=document.querySelectorAll(".card");

skill.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="scale(1.08)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

});

});