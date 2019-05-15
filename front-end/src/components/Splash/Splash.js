import React from "react";
import styles from "./Splash.module.css";

const Splash = props => {
    return(
        <div className={styles.splashContainer}>
            <div className={styles.topSection}>
                <h1>Magic The Gathering - Deck Builder</h1>
            </div>
            <div className={styles.middleSection}>
                <h3>What is MTG Deck Builder?</h3>
                <p>Informational Text here</p>
            </div>
            <div className={styles.bottomSection}>
                <h3>Interested?</h3>
                <p>Information about registering</p>
            </div>
        </div>
    )
}

export default Splash;