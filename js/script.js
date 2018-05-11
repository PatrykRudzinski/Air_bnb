document.addEventListener('DOMContentLoaded', function () {

    const menu = document.querySelector('#menu');
    const home = document.querySelector('#home');
    
    document.addEventListener('scroll', function () {
        const homeHeight = home.clientHeight;
        //console.log(window.scrollY);
    });

});