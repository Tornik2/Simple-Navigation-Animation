const nav = document.querySelector('nav')
const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')
const navElements = document.querySelectorAll('a')

openNav.addEventListener('click', ()=> {
    nav.classList.add('show')
    closeNav.style.display = "block"
    openNav.style.display = "none"
})

closeNav.addEventListener('click', hideNav)

navElements.forEach(a => {
    a.addEventListener('click', hideNav)
})

function hideNav() {
    nav.classList.remove('show')
    closeNav.style.display = "none"
    openNav.style.display = "block"
}
