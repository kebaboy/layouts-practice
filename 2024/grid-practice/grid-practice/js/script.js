const links = document.querySelector(".header__menu").querySelectorAll(".header__link");
for (let link of links) {
    link.addEventListener("click", () => {
        links.forEach(otherLink => {
            otherLink.classList.remove("header__link_active");
        });
        link.classList.toggle("header__link_active");
    } );
}

const cards = document.querySelector(".pricing__cards").querySelectorAll(".card");
console.log(cards);
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        cards.forEach(otherCard => {
            otherCard.classList.remove("card_active");
        })
        card.classList.add("card_active");
    })
})