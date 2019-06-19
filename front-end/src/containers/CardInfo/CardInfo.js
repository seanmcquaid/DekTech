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
                    cardImageUrl : response.data.image_uris.small,
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

    addToDeck = () => {
        console.log(this.state)
    }

    render(){
        return(
            <div className={styles.cardInfoContainer}>
                <h1 className={styles.cardInfoTitle}>{this.state.cardName}</h1>
                <div className={styles.cardSpecificInfoContainer}>
                    <div className={styles.cardSpecificInfoLeft}>
                        <img className={styles.cardImage} src={this.state.cardImageUrl} alt={this.state.cardName}/>
                    </div>
                    <div className={styles.cardSpecificInfoRight}>
                        <ul className={styles.cardSpecificInfoText}>
                            <li className={styles.cardSpecificInfoBullet}>Ranking : {this.state.ranking}</li>
                            <li className={styles.cardSpecificInfoBullet}>Converted Mana Cost : {this.state.convertedManaCost}</li>
                            <li className={styles.cardSpecificInfoBullet}>Power : {this.state.power}</li>
                            <li className={styles.cardSpecificInfoBullet}>Toughness : {this.state.toughness}</li>
                            <li className={styles.cardSpecificInfoBullet}>Card Text : {this.state.cardText}</li>
                        </ul>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.addToDeckButton} onClick={()=> this.addToDeck()}>Add to Deck</button>
                            <Link className={styles.linkButton} to="/cardSearch">Back to Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardInfo;