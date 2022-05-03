class Cards {
    constructor(cards) {
        this.cards = cards;
        this.init();
    }

    init() {
        this.setCardsHeight();
    }

    setCardsHeight() {
        let maxHeight = 0;
        this.cards.forEach(card => {
            if (card.offsetHeight > maxHeight)
                maxHeight = card.offsetHeight;
        });
        this.cards.forEach(card => {
            card.style.minHeight = `${maxHeight}px`;
        })
    }
}

export default Cards;