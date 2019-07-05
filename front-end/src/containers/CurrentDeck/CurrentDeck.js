import React, {Component} from "react";
import styles from "./CurrentDeck.module.css";
import { getDeckAction, removeFromDeckAction, clearDeckAction } from "../../actions/deckActions/deckActions";
import {connect} from "react-redux";
import { bindActionCreators} from "redux";
import Card from "../../components/Utility/Card/Card";


class CurrentDeck extends Component{
    constructor(){
        super();
        this.state = {
            message : ""
        }
    }

    componentDidMount = () => {
        // will call our backend for user's deck info and update state to reflect this
        this.props.getDeckAction();
    }

    componentWillReceiveProps = newProps => {
        this.setState({
            message : newProps.deck.message,
        })
    }

    removeFromDeck = card => {
        this.props.removeFromDeckAction(card);
    }

    clearDeck = () => {
        this.props.clearDeckAction();
    }

    render(){
        let cardDisplay;
        if(this.props.deck.cards.length === 0){
            cardDisplay = <div>NO CARDS YET!</div>;
        } else {
            cardDisplay = this.props.deck.cards.map((cardInfo, i)=> {
                return <Card
                    key = {i}
                    cardName={cardInfo.card.name}
                    buttonText={"Remove From Deck"}
                    cardId={cardInfo.card.cardId} 
                    imageUrl={cardInfo.card.imageUrl} 
                    clicked={() => this.removeFromDeck(cardInfo.card)}
                />;
            })
        }
        return(
            <div className={styles.currentDeckContainer}>
                <h1 className={styles.currentDeckTitle}>Current Deck</h1>
                <p>{this.state.message}</p>
                <div>
                    <form className={styles.addLandsToDeckForm}>
                        <input type="text"/>
                        <button type="submit">Submit</button>
                    </form>
                    <form className={styles.removeLandsFromDeckForm}>
                        <input type="text"/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <button className={styles.clearDeckButton} onClick={this.clearDeck}>Clear Deck</button>
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
        removeFromDeckAction,
        clearDeckAction
    }, dispatcher);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDeck);