// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault();

        document.querySelector(
            link.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Scroll Animation
const cards=document.querySelectorAll(
'.service-card,.advantage-card,.testimonial-card'
);

window.addEventListener('scroll',()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top < window.innerHeight-100){
card.classList.add('show');
}

});

});

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".navbtn");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});


const navLinks =
document.querySelectorAll(".navbtn a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});