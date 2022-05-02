import GoldCards from "./js/gold-card";

if (module.hot) {
    module.hot.accept();
}

document.addEventListener("DOMContentLoaded", () => {
    new GoldCards(document.querySelectorAll(".gold-card__content"));
});