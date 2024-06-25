document.addEventListener("DOMContentLoaded", function () {

    const splashScreen = document.getElementById('splash-screen');

    splashScreen.addEventListener('animationend', () => {
        splashScreen.style.display = 'none';
        document.body.style.display = 'block';
    });
    const fadeIns = document.querySelectorAll('.fade-in');
    const flyIns = document.querySelectorAll('.fly-in');

    fadeIns.forEach(element => {
        element.classList.add('animated');
    });

    flyIns.forEach(element => {
        element.classList.add('animated');
    });
});
