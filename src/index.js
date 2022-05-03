import Cards from "./js/cards";

if (module.hot) {
    module.hot.accept();
}

document.addEventListener("DOMContentLoaded", () => {
    new Cards(document.querySelectorAll(".gold-card__content"));
    new Cards(document.querySelectorAll(".investment-card__card"))
});