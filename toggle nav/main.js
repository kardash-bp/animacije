const menuToggle = document.querySelector("#menu-toggle");
let content = document.querySelector(".main-contents");
const activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function () {


    activeElements.forEach(el => {
        if (!el.classList.contains('active')) {
            el.classList.add('active');
            content.style.display = 'none';
        } else {
            el.classList.remove('active');
            //content.style.removeProperty('display');
            content.removeAttribute('style');
        }

    })


})