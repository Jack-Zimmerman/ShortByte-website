const headLinks = document.querySelectorAll('.hLink')
const navIcon = document.querySelector('.mobileNavIcon')
const menuBtn = document.querySelector('.menuBtn')
const modal = document.querySelector('.modal')
let menuOpen = false;

headLinks.forEach(link => {
    link.addEventListener('click', () => {
        headLinks.forEach(notLink => notLink.classList.remove('active'))
        link.classList.add('active')
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
