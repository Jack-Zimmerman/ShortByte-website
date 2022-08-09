const headLinks = document.querySelectorAll('.hLink')

headLinks.forEach(link => {
    link.addEventListener('click', () => {
        headLinks.forEach(notLink => notLink.classList.remove('active'))
        link.classList.add('active')
    })
});
