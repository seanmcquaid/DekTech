import React, {Component} from "react";
import styles from "./CardInfo.module.css";
import axios from "axios";
import {Link} from "react-router-dom";

class CardInfo extends Component {
    constructor(){
        super();
        this.state = {
            cardName : "",
            cardImageUrl : "",
            ranking : "",
            convertedManaCost : "",
            power : "",
            toughness : "",
            cardText : "",
        }
    }


    componentDidMount = () => {
        // make call to api with scryfall card Id to pull card info
        const {cardId} = this.props.match.params;
        axios.get(`https://api.scryfall.com/cards/${cardId}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    cardName : response.data.name,
                    cardImageUrl : response.data.image_uris.normal,
                    ranking : response.data.edhrec_rank,
                    convertedManaCost : response.data.cmc,
                    power : response.data.power,
                    toughness : response.data.toughness,
                    cardText : response.data.oracle_text,
                    cardId : response.data.id,
                });
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div className={styles.cardInfoContainer}>
                <h1 className={styles.cardInfoTitle}>{this.state.cardName}</h1>
                <div className={styles.cardSpecificInfoContainer}>
                    <div className={styles.cardSpecificInfoLeft}>
                        <img src={this.state.cardImageUrl} alt={this.state.cardName}/>
                    </div>
                    <div className={styles.cardSpecificInfoRight}>
                        <ul>
                            <li>Ranking : {this.state.ranking}</li>
                            <li>Converted Mana Cost : {this.state.convertedManaCost}</li>
                            <li>Power : {this.state.power}</li>
                            <li>Toughness : {this.state.toughness}</li>
                            <li>Card Text : {this.state.cardText}</li>
                        </ul>
                        <button>Add to Deck</button>
                        <Link>Back to Search</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardInfo;