import React, {Component} from "react";
import styles from "./CardSearch.module.css";
import axios from "axios";
import Card from "../../components/Utility/Card/Card";

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
            convertedManaCostOptions : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,],
            convertedManaCostChoice : "",
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
        console.log(this.state)
        // https://scryfall.com/docs/syntax
        // https://scryfall.com/docs/api/cards/search
        // axios.get("https://api.scryfall.com/cards/search?q=hello")
        //     .then(response => {
        //         console.log(response.data)
        //     })
        //     .catch(err => console.log(err));
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

    changeConvertedManaCost = event => {
        this.setState({
            convertedManaCostChoice : event.target.value 
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
        const convertedManaCostOptions = this.state.convertedManaCostOptions.map((cmc, i) => {
            return <option key={i} value={cmc}>{cmc}</option>
        });

        const searchResults = this.state.searchResults.map((card, i) => {
            return <Card cardName="" cardId="" imageUrl="" clicked=""/>
        });

        return (
            <div className={styles.cardSearchContainer}>
                <h1 className={styles.cardSearchTitle}>Card Search</h1>
                <form onSubmit={this.cardSearch} className={styles.cardSearchForm}>
                    <div className={styles.cardChoices}>
                        <select className={styles.dropDown} onChange={this.changeColor1}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                        <select className={styles.dropDown} onChange={this.changeColor2}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                        <select className={styles.dropDown} onChange={this.changeColor3}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                    </div>
                    <div className={styles.cardChoices}>
                        <select className={styles.dropDown} onChange={this.changeConvertedManaCost}>
                                <option defaultValue="">Choose the Converted Mana Cost!</option>
                                {convertedManaCostOptions}
                        </select>
                        <select className={styles.dropDown} onChange={this.changeCardType}>
                            <option defaultValue="">Choose a Card Type!</option>
                            {cardTypeOptions}
                        </select>
                        <select className={styles.dropDown} onChange={this.changeRarityChoice}>
                            <option defaultValue="">Choose a rarity</option>
                            {rarityOptions}
                        </select>
                    </div>
                    <button className={styles.searchButton} type="submit">Search</button>
                </form>
                <div className={styles.searchResultsContainer}>
                    {searchResults}
                </div>
            </div>
        )
    }
}

export default CardSearch;