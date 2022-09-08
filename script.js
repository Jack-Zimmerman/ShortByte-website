const headLinks = document.querySelectorAll('.hLink');
const navIcon = document.querySelector('.mobileNavIcon');
const menuBtn = document.querySelector('.menuBtn');
const modal = document.querySelector('.modal');
const mediaQueryList = window.matchMedia('(max-width: 1200px)').matches
const delayAnimations = document.querySelectorAll('[data-aos-delay]')

let menuOpen = false;

headLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.remove('active')
        link.target.classList.add('active')
    })
});

menuBtn.addEventListener('click', () => {
    if(!menuOpen) { 
        modal.classList.add('active')
        menuBtn.classList.add('open')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false;
        modal.classList.remove('active')
    }
})

if (mediaQueryList === true) {
    delayAnimations.forEach(animation => {
        animation.setAttribute('data-aos-delay', "50")
        animation.setAttribute('data-aos-duration', '400')
    })
}




//for pricing.html:

const details = Array.from(document.querySelectorAll('.details'))
const detailElements = [document.getElementsByClassName('detailElement basic')[0],
                        document.getElementsByClassName('detailElement supreme')[0],
                        document.getElementsByClassName('detailElement advanced')[0]]


details.map(function(e, i){
    return [e, detailElements[i]]
}).forEach(([button,anchor])=>{
    button.addEventListener('click', ()=>{
        anchor.scrollIntoView({behavior: "smooth"});

        
    })
})


