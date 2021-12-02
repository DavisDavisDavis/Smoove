const nav = document.querySelector('nav');
const logo = document.querySelector('nav img');
const hamburgerBars = document.querySelectorAll('.hamburger-bar');
window.addEventListener('scroll',(e) =>{
    if(window.scrollY >= window.innerHeight){
        nav.classList.add('nav-color');
        logo.src = 'images/smoove-logo.svg';
        hamburgerBars.forEach(bar => {
            bar.classList.add('hamburger-bar-color');
        })
    }else{
        nav.classList.remove('nav-color');
        logo.src = 'images/smoove-logo-black.svg';
        hamburgerBars.forEach(bar => {
            bar.classList.remove('hamburger-bar-color');
        })

    }
    
})


setTimeout(()=>{

<<<<<<< Updated upstream
=======
setTimeout(()=>{

>>>>>>> Stashed changes
    const intro = document.querySelector(".curtain");
    intro.classList.add("hide");

}, 1000)

setTimeout(()=>{
    const intro = document.querySelector(".intro");
    intro.classList.add("hide");

<<<<<<< Updated upstream
}, 4900)
=======
}, 4900)
>>>>>>> Stashed changes
