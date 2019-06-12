import React, {Component} from "react";
import styles from "./CardSearch.module.css";
import axios from "axios";

class CardSearch extends Component {
    constructor(){
        super();
        this.state = {
            searchResults : [],
            sortFilters : [],
            colors : ["Red", "White", "Green", "Blue", "Black", "Colorless", ],
            cardType : ["Legendary", "Creature", "Artifact", "Sorcery", "Instant", "Enchantment", "Planeswalker",],
            convertedManaCost : [1,2,3,4,5,6,7,8,9,10],
            rarity : [],
            cardText : "",
            powerToughnessLoyalty : [],
            spellsPermsEffects : [],
            priceRange : [],
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
    


    render(){
        const colorOptions = this.state.colors.map((color, i)=>{
            return <option key={i} value={color}>{color}</option>
        });
        return (
            <div className={styles.cardSearchContainer}>
                <h1>Card Search</h1>
                <form onSubmit={this.cardSearch} className="">
                    <div className={styles.colorChoices}>
                        <select className={styles.colorOption1}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                        <select className={styles.colorOption2}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                        <select className={styles.colorOption3}>
                            <option defaultValue="">Choose a color!</option>
                            {colorOptions}
                        </select>
                    </div>
                    <div>
                        <input placeholder="converted mana cost"/>
                        <input placeholder="type"/>
                        <input placeholder="rarity"/>
                    </div>
                    <div>
                        <input placeholder="card text"/>
                        <input placeholder="power, toughness, loyalty"/>
                        <input placeholder="spells, perms, effects"/>
                        <input placeholder="USD prices"/>
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default CardSearch;