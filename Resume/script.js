const OpenMobile = document.getElementById('mobile-open');

const Nav = document.querySelector('nav');

const MobileExit = document.querySelector('ul')

OpenMobile.addEventListener('click', () =>{
    Nav.classList.add('open-menu')
})

MobileExit.addEventListener('click', () =>{
    Nav.classList.remove('open-menu')
})