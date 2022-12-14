let openMobile = document.getElementById('hambuger');
let closeMobile = document.getElementById('close');
let mobileNav = document.getElementById('mobileNav');
openMobile.addEventListener('click', function(){
    mobileNav.style.display = "block";
});
closeMobile.addEventListener('click', function(){
    mobileNav.style.display = "none";
});
window.onclick = function(event) {
    if (event.target.classList.contains('mobile-overlay-container')){
        mobileNav.style.display = "none";
    }
}