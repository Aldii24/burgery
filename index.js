const navbarNav = document.querySelector('.navbar-nav')
const menu = document.querySelector('#hamburger-menu')

menu.onclick = () => {
    navbarNav.classList.toggle('active')
}

document.addEventListener('click', function (e) {
    console.log(e)
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});