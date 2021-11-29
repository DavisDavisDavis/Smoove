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