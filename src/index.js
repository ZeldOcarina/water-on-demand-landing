import { createRoot } from 'react-dom/client';

import Faq from "./js/faq";
import Cards from "./js/cards";
import MachinesContainer from "./js/machines-container";

if (module.hot) {
    module.hot.accept();
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        new Cards(document.querySelectorAll(".gold-card__content"));
        new Cards(document.querySelectorAll(".investment-card__card"));
    }, 1000);
    document.querySelectorAll(".machines-container").forEach(machineContainer => {
        new MachinesContainer(machineContainer);
    });

    //Initiate React APP for FAQs
    const root = createRoot(document.getElementById("faq-container"));
    root.render(<Faq />);

    document.getElementById("date").innerText = new Date().getFullYear();
});