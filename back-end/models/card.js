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

    classToObject(){
        return {
            name : this.name,
            imageUrl : this.imageUrl,
            convertedManaCost : this.convertedManaCost,
            power : this.power,
            toughness : this.toughness,
            cardText : this.cardText,
            cardId : this.cardId,
        }
    }
}

module.exports = Card;