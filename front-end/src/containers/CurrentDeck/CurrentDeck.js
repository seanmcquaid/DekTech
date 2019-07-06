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
            message : "",
            numberOfLandsToAdd : 0,
            numberOfLandsToRemove : 0,
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

    addLandsToDeck = () => {

    }

    removeFromDeck = card => {
        this.props.removeFromDeckAction(card);
    }

    removeLandsFromDeck = () => {

    }

    clearDeck = () => {
        this.props.clearDeckAction();
    }

    changeNumberOfLandsToAdd = event => {
        this.setState({
            numberOfLandsToAdd : event.target.value,
        })
    }

    changeNumberOfLandsToRemove = event => {
        this.setState({
            numberOfLandsToRemove : event.target.value,
        })
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
                    <div>
                        <h4>Type in a number of lands to add below!</h4>
                        <form onSubmit={this.addLandsToDeck} className={styles.addLandsToDeckForm}>
                            <input type="text" placeholder={0} onChange={this.changeNumberOfLandsToAdd}/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div>
                        <h4>Type in a number of lands to remove below!</h4>
                        <form onSubmit={this.removeLandsFromDeck} className={styles.removeLandsFromDeckForm}>
                            <input type="text" placeholder={0} onChange={this.changeNumberOfLandsToRemove}/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
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