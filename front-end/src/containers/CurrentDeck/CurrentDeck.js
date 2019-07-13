import React, {Component} from "react";
import styles from "./CurrentDeck.module.css";
import { 
    getDeckAction, 
    addLandsToDeckAction, 
    removeCardFromDeckAction, 
    removeLandsFromDeckAction, 
    setCommanderAction,
    removeCommanderAction,
    clearDeckAction } from "../../actions/deckActions/deckActions";
import {connect} from "react-redux";
import { bindActionCreators} from "redux";
import Card from "../../components/Utility/Card/Card";
import Aux from "../../hoc/Aux/Aux";


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

    addLandsToDeck = event => {
        event.preventDefault();
        const numberOfLandsToAdd = parseInt(this.state.numberOfLandsToAdd);
        if(isNaN(numberOfLandsToAdd)){
            this.setState({
                message : "You didn't enter a valid number, try again!"
            })
        } else {
            this.props.addLandsToDeckAction(numberOfLandsToAdd);
        }
    }

    removeFromDeck = card => {
        this.props.removeCardFromDeckAction(card);
    }

    removeLandsFromDeck = event => {
        event.preventDefault();
        const numberOfLandsToRemove = parseInt(this.state.numberOfLandsToRemove);
        if(isNaN(numberOfLandsToRemove)){
            this.setState({
                message : "You didn't enter a valid number, try again!"
            })
        } else {
            this.props.removeLandsFromDeckAction(numberOfLandsToRemove);
        }
    }

    setCommander = card => {
        this.props.setCommanderAction(card);
    }

    removeCommander = () => {
        this.props.removeCommanderAction();
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
        let cardDisplay, deckInfo;
        console.log(this.props.deck)
        if(this.props.deck.cards === undefined){
            cardDisplay = <div>NO CARDS YET!</div>;
        } else {
            if(this.props.deck.cards.length === 0){
                cardDisplay = <div>NO CARDS YET!</div>;
            } else {
                deckInfo = <Aux>
                    <p>Commander : {this.props.deck.commander.name}</p>
                    <p>Total Deck Count: {this.props.deck.lands + this.props.deck.cards.length} </p>
                    <p>Land Count : {this.props.deck.lands}</p>
                </Aux>;
                cardDisplay = this.props.deck.cards.map((cardInfo, i)=> {
                    return (
                    <div className={styles.cardInfo} key={i}>
                        <Card
                            key = {i+1}
                            cardName={cardInfo.card.name}
                            buttonText={"Remove From Deck"}
                            cardId={cardInfo.card.cardId} 
                            imageUrl={cardInfo.card.imageUrl} 
                            clicked={() => this.removeFromDeck(cardInfo.card)}
                        />
                        <button key={i+2} className={styles.setCommanderButton} onClick={() => this.setCommander(cardInfo.card)}>Set Commander</button>
                    </div>
                    );
                })
            }
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
                <button className={styles.removeCommanderButton} onClick={this.removeCommander}>Remove Commander</button>
                <div>
                    {deckInfo}
                </div>
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
        addLandsToDeckAction,
        removeCardFromDeckAction,
        removeLandsFromDeckAction,
        setCommanderAction,
        removeCommanderAction,
        clearDeckAction,
    }, dispatcher);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDeck);