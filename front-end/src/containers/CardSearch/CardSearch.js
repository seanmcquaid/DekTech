import React, {Component} from "react";
import styles from "./CardSearch.module.css";
import axios from "axios";

class CardSearch extends Component {
    constructor(){
        super();
        this.state = {
            searchResults : [],
            sortFilters : [],
            colors : [],
            type : [],
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
    


    render(){
        return (
            <div className={styles.cardSearchContainer}>
                <h1>Card Search</h1>
                <form onSubmit={this.cardSearch} className="">
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