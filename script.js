
// ==========================================================
// NogenTech Portfolio - JavaScript
// ==========================================================

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter=>{

    const updateCounter = ()=>{

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / speed;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,10);

        }else{

            counter.innerText = target;

        }

    }

    updateCounter();

});

// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Current Year
// ===============================

const year = document.querySelector("#year");

if(year){

    year.textContent = new Date().getFullYear();

}
