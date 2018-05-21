document.addEventListener('DOMContentLoaded', function () {

    // variables
    const hamburger = document.querySelector('#hamburger');
    const nav = document.querySelector('#nav');
    const menuLink = document.querySelectorAll('#nav a');
    const txt = document.querySelector('#support_text-moving');
    const suppWrapper = document.querySelector('#support_wrapper');
    const suppTxt = document.querySelector('#support_text');

    // move text under or over ipad func
    const moveTxt = ()=> {
        window.innerWidth <= 990 ? suppWrapper.appendChild(txt) : suppTxt.appendChild(txt);
    };
    // collapse and show menu func
    const menuSwitch = ()=> {
        hamburger.classList.toggle('hamburger-open');
        nav.classList.toggle('nav-collapsed');
    };



    // collapse and show menu on hamburger click
    hamburger.addEventListener('click', menuSwitch);

    // close menu on link click
    [...menuLink].forEach(function (el){
        el.addEventListener('click', menuSwitch)
    });

    // move text under or over ipad on load
    moveTxt();

    // move text under or over ipad on window resize
    window.addEventListener('resize', moveTxt);





});