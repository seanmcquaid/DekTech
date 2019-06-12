import React, {Component} from "react";
import styles from "./CardInfo.module.css";
import axios from "axios";

class CardInfo extends Component {
    componentDidMount = () => {
        // make call to api with scryfall card Id to pull card info
        const {cardId} = this.props.match.params;
        axios.get(`https://api.scryfall.com/cards/${cardId}`)
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>Card Info</div>
        )
    }
}