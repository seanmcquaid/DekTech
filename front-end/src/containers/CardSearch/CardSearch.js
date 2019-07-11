import React, {Component} from "react";
import styles from "./CardSearch.module.css";
import axios from "axios";
import Card from "../../components/Utility/Card/Card";
import { bindActionCreators } from "redux";
import {addCardToDeckAction} from "../../actions/deckActions/deckActions";
import { connect } from "react-redux";

class CardSearch extends Component {
    constructor(){
        super();
        this.state = {
            message : "",
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
            convertedManaCostOptions : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,],
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

    componentWillReceiveProps = newProps => {
        this.setState({
            message : newProps.deck.message,
        })
    }


    cardSearch = event => {
        event.preventDefault();
        // https://scryfall.com/docs/syntax
        // https://scryfall.com/docs/api/cards/search
        const {color1Choice, color2Choice, color3Choice, cardTypeChoice, convertedManaCostChoice, rarityChoice} = this.state;
        let baseUrl = "https://api.scryfall.com/cards/search?q=";
        if(color1Choice !== ""){
            const color1Letter = color1Choice.slice(0,1);
            const colorParam = color1Choice === "Blue" ?`c:u `: `c:${color1Letter}`;
            baseUrl += colorParam;
        }
        if(color2Choice !== ""){
            const color2Letter = color2Choice.slice(0,1);
            const colorParam = color2Choice === "Blue" ?`c:u `: `c:${color2Letter}`;
            baseUrl += colorParam;
        }
        if(color3Choice !== ""){
            const color3Letter = color3Choice.slice(0,1);
            const colorParam = color3Choice === "Blue" ?`c:u `: `c:${color3Letter}`;
            baseUrl += colorParam;
        }
        if(cardTypeChoice !== ""){
            const cardTypeParam = `t:${cardTypeChoice} `;
            baseUrl += cardTypeParam;
        }
        if(convertedManaCostChoice !== ""){
            const cmcParam = `cmc:${convertedManaCostChoice} `;
            baseUrl += cmcParam;
        }
        if(rarityChoice !== ""){
            const rarityParam = `r:${rarityChoice} `;
            baseUrl += rarityParam;
        }
        axios.get(baseUrl)
            .then(response => {
                // console.log(response)
                this.setState({
                    searchResults : response.data.data
                });
            })
            .catch(err => console.log(err));
    };

    addToDeck = cardInfo => {
        this.props.addCardToDeckAction(cardInfo);
    }

    changeColor1 = event => {
        event.target.value === "Choose a color!" ?
        this.setState({color1Choice : ""}) :
        this.setState({color1Choice : event.target.value});
    }

    changeColor2 = event => {
        event.target.value === "Choose a color!" ?
        this.setState({color2Choice : ""}) :
        this.setState({color2Choice : event.target.value});
    }

    changeColor3 = event => {
        event.target.value === "Choose a color!" ?
        this.setState({color3Choice : ""}) :
        this.setState({color3Choice : event.target.value});
    }
    
    changeCardType = event => {
        event.target.value === "Choose a Card Type!" ?
        this.setState({cardTypeChoice : ""}) :
        this.setState({cardTypeChoice : event.target.value});
    }

    changeRarityChoice = event => {
        event.target.value === "Choose a rarity!" ? 
        this.setState({rarityChoice : ""}) :
        this.setState({rarityChoice : event.target.value});
    }

    changeConvertedManaCost = event => {
        event.target.value === "Choose the Converted Mana Cost!" ? 
        this.setState({changeConvertedManaCost : ""}) :
        this.setState({convertedManaCostChoice : event.target.value});
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
            if(card.image_uris === undefined){
                return null;
            }
            return <Card 
                key={i} 
                buttonText={"Add To Deck"}
                cardName={card.name} 
                cardId={card.id} 
                imageUrl={card.image_uris.small} 
                clicked={() => this.addToDeck(card)}
            />
        });

        return (
            <div className={styles.cardSearchContainer}>
                <h1 className={styles.cardSearchTitle}>Card Search</h1>
                <p>{this.state.message}</p>
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
                            <option defaultValue="">Choose a rarity!</option>
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

const mapStateToProps = state => {
    return {
        deck : state.deck,
    }
}

const mapDispatchToProps = dispatcher => {
    return bindActionCreators({
        addCardToDeckAction
    }, dispatcher);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSearch);