import React, {Component} from "react";
import styles from "./CurrentDeck.module.css";
import { getDeckAction, removeFromDeckAction } from "../../actions/deckActions/deckActions";
import {connect} from "react-redux";
import { bindActionCreators} from "redux";
import Card from "../../components/Utility/Card/Card";


class CurrentDeck extends Component{
    constructor(){
        super();
        this.state = {
            deck : [],
        }
    }

    componentDidMount(){
        // will call our backend for user's deck info and update state to reflect this
        this.props.getDeckAction();
    }

    removeFromDeck = card => {
        
    }

    render(){
        let cardDisplay;
        if(this.props.deck.deck === 0){
            cardDisplay = <div>NO CARDS YET!</div>;
        } else {
            cardDisplay = this.props.deck.deck.map((card, key)=> {
                // will use component here once I set up backend
                return <Card
                        key={key}
                        buttonText={"Remove From Deck"}
                        cardName={card.card.name} 
                        cardId={card.card.cardId} 
                        imageUrl={card.card.imageUrl} 
                        clicked={() => this.removeFromDeck(card)}
                    />;
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

const mapStateToProps = state => {
    return {
        deck : state.deck,
    }
}

const mapDispatchToProps = dispatcher => {
    return bindActionCreators({
        getDeckAction,
        removeFromDeckAction
    }, dispatcher);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDeck);