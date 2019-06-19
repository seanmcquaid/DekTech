class Card {
    constructor(name, imageUrl, convertedManaCost, power, toughness, cardText, cardId){
        this.name = name;
        this.imageUrl = imageUrl;
        this.convertedManaCost = convertedManaCost;
        this.power = power;
        this.toughness = toughness;
        this.cardText = cardText;
        this.cardId = cardId;
    }
}

module.exports = Card;