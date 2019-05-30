import React, {Component} from "react";
import styles from "./CurrentDeck.module.css";

class CurrentDeck extends Component{
    constructor(){
        super();
        this.state = {
            deck : [1,2,3,5],

        }
    }

    componentDidMount(){
        // will call our backend for user's deck info and update state to reflect this
    }

    render(){
        let cardDisplay;
        if(this.state.deck.length === 0){
            cardDisplay = <div>NO CARDS YET!</div>;
        } else {
            cardDisplay = this.state.deck.map((card, key)=> {
                // will use component here once I set up backend
                return <div className={styles.cardInfo} key={key}>Card HERE</div>
            })
        }
        return(
            <div className={styles.currentDeckContainer}>
                <h1 className={styles.currentDeckTitle}>Current Deck</h1>
                <div className={styles.cardsContainer}>
                    {cardDisplay}
                </div>
            </div>
        )
    }
}

export default CurrentDeck;