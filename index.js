const navbarNav = document.querySelector('.navbar-nav')
const menu = document.querySelector('#hamburger-menu')

menu.onclick = () => {
    navbarNav.classList.toggle('active')
}

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const btn = document.getElementById('search-btn');
btn.onclick = () => {
    const search = document.getElementById('search').value;
    if (search.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${search}`
    }
}
function searchFunction(event) {
    const search = document.getElementById('search').value;
    if (event.key === 'Enter' && search.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${search}`
    }
}