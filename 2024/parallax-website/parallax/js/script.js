text = document.querySelector(".parallax__title");
leaf = document.querySelector(".img-leaf");
hill1 = document.querySelector(".img-hill1");
hill4 = document.querySelector(".img-hill4");
hill5 = document.querySelector(".img-hill5");

window.addEventListener('scroll', () => {
    value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.bottom = value * -1 + 'px';
})