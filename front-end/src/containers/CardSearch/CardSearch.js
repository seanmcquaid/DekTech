import React, {Component} from "react";
import styles from "./CardSearch.module.css";
import axios from "axios";

class CardSearch extends Component {
    constructor(){
        super();
        this.state = {
            searchResults : [],
            color1Choice : "",
            color2Choice : "",
            color3Choice : "",
            colors : [
                "Red", 
                "White", 
                "Green", 
                "Blue", 
                "Black", 
                "Colorless", 
            ],
            cardTypes : [
                "Legendary", 
                "Creature", 
                "Artifact", 
                "Sorcery", 
                "Instant", 
                "Enchantment", 
                "Planeswalker",
            ],
            cardTypeChoice : "",
            convertedManaCost : "",
            rarities : [
                "Common", 
                "Uncommon", 
                "Rare", 
                "Mythic",
            ],
            rarityChoice : "",
        }
    }


    cardSearch = event => {
        event.preventDefault();
        // https://scryfall.com/docs/syntax
        // https://scryfall.com/docs/api/cards/search
        axios.get("https://api.scryfall.com/cards/search?q=hello")
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err));
    };

    addToDeck = event => {
        event.preventDefault();
    }

    changeColor1 = event => {
        this.setState({
            color1Choice : event.target.value
        });
    }

    changeColor2 = event => {
        this.setState({
            color2Choice : event.target.value
        });
    }

    changeColor3 = event => {
        this.setState({
            color3Choice : event.target.value
        });
    }
    
    changeCardType = event => {
        this.setState({
            cardTypeChoice : event.target.value
        });
    }

    changeRarityChoice = event => {
        this.setState({
            rarityChoice : event.target.value
        });
    }
    
    


    render(){
        const colorOptions = this.state.colors.map((color, i) => {
            return <option key={i} value={color}>{color}</option>
        });
        const cardTypeOptions = this.state.cardTypes.map((cardType,i) => {
            return <option key={i} value={cardType}>{cardType}</option>
        }); 
        const rarityOptions = this.state.rarities.map((rarity, i) => {
            return <option key={i} value={rarity}>{rarity}</option>
        });
        return (
            <div className={styles.cardSearchContainer}>
                <h1>Card Search</h1>
                <form onSubmit={this.cardSearch} className="">
                    <div className={styles.colorChoices}>
                        <select className={styles.colorOption1} onChange={this.changeColor1}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                        <select className={styles.colorOption2} onChange={this.changeColor2}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                        <select className={styles.colorOption3} onChange={this.changeColor3}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                    </div>
                    <div>
                        <input placeholder="Converted Mana Cost" type="text"/>
                        <select className={styles.cardTypeOptions} onChange={this.changeCardType}>
                            <option defaultValue="">Choose a Card Type!</option>
                            {cardTypeOptions}
                        </select>
                        <select onChange={this.changeRarityChoice}>
                            <option defaultValue="">Choose a rarity</option>
                            {rarityOptions}
                        </select>
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default CardSearch;