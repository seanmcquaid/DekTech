import React from "react";
import styles from "./Splash.module.css";

const Splash = props => {
    return(
        <div>
            <div className="top">
                <h1>Magic The Gathering - Deck Builder</h1>
            </div>
            <div className="middle">
                <h4>What is MTG Deck Builder?</h4>
                <p>Informational Text here</p>
            </div>
            <div className="bottom">
                <p>Information about registering</p>
            </div>
        </div>
    )
}

export default Splash;