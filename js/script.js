document.addEventListener('DOMContentLoaded', function () {

    const hamburger = document.querySelector('#hamburger');
    const nav = document.querySelector('#nav');
    const menuLink = document.querySelectorAll('#nav a');

    hamburger.addEventListener('click', function () {
       hamburger.classList.toggle('hamburger-open');
       nav.classList.toggle('nav-collapsed');
    });


    [...menuLink].forEach(function (el){
        el.addEventListener('click', function () {
            hamburger.classList.remove('hamburger-open');
            nav.classList.add('nav-collapsed');

        })
    });



});