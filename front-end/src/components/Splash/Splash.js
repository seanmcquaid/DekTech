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
                <p>Bacon ipsum dolor amet pork chop sausage sirloin turkey prosciutto beef chuck leberkas fatback kevin frankfurter drumstick ribeye. T-bone jerky drumstick porchetta cupim. Meatloaf capicola turkey jerky tongue. Picanha kielbasa tail alcatra swine. Shank chuck spare ribs, burgdoggen swine beef ribs brisket biltong bresaola meatball turkey. Prosciutto ham doner, meatball tail beef andouille turducken hamburger porchetta pork belly fatback ham hock. Turkey short ribs tongue doner spare ribs.</p>
            </div>
            <div className={styles.bottomSection}>
                <h3>Interested?</h3>
                <p>Information about registering</p>
            </div>
        </div>
    )
}

export default Splash;