import React from "react";
import styles from "./Splash.module.css";

const Splash = props => {
    return(
        <div className={styles.splashContainer}>
            <div className={styles.topSection}>
                <h1>Dek Tech</h1>
                <p>A deck building tool for Magic The Gathering's Commander Format</p>
            </div>
            <div className={styles.middleSection}>

                <div className={styles.appDescription}>
                    <div className={styles.middleSectionText}>
                        <h2>What is Dek Tech?</h2>
                        <p>Dek Tech is an app that will revolutize how you approach deck building in Magic The Gathering's Commander format. Dek Tech is meant to serve as a one stop shop for searching for cards, creating decks and providing prices for each card so you may more knowledgably build decks that follow your budget!</p>
                    </div>
                </div>

                <div className={styles.appSteps}>
                    <h2>How Does It Work?</h2>
                    <div className={styles.appInstructionsStepOne}>
                        <div className={styles.middleSectionText}>
                            <h3>Create An Account</h3>
                            <p>Instructions here</p>
                        </div>
                        <div className={styles.middleSectionImage}>
                            <img className={styles.middleImage}src="https://via.placeholder.com/150" alt="placeholder"/>
                        </div>
                    </div>
                    <div className={styles.appInstructionsStepTwo}>
                        <div className={styles.middleSectionText}>
                            <h3>Create A Deck</h3>
                            <p>Instructions here</p>
                        </div>
                        <div className={styles.middleSectionImage}>
                            <img className={styles.middleImage}src="https://via.placeholder.com/150" alt="placeholder"/>
                        </div>
                    </div>
                    <div className={styles.appInstructionsStepThree}>
                        <div className={styles.middleSectionText}>
                            <h3>Start Searching and Adding Cards!</h3>
                            <p>Instructions here</p>
                        </div>
                        <div className={styles.middleSectionImage}>
                            <img className={styles.middleImage}src="https://via.placeholder.com/150" alt="placeholder"/>
                        </div>
                    </div>
                </div>     
            </div>
            <div className={styles.bottomSection}>
                <h2>Interested?</h2>
                <p>Feel free to click the link HERE to register or login! Happy Deck Building!!!</p>
            </div>
        </div>
    )
}

export default Splash;