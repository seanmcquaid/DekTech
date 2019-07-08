class Card {
    constructor(name, imageUrl, convertedManaCost, power, toughness, type, cardText, cardId){
        this.name = name;
        this.imageUrl = imageUrl;
        this.convertedManaCost = convertedManaCost;
        this.power = power;
        this.toughness = toughness;
        this.type = type;
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
            type : this.type,
            cardText : this.cardText,
            cardId : this.cardId,
        }
    }
}

module.exports = Card;