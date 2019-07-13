import React from "react";
import styles from "./UserHome.module.css";
import MenuButton from "../Utility/MenuButton/MenuButton";


const UserHome = props => {
    return(
        <div className={styles.userHomeContainer}>
            <div className={styles.userHomeTitle}>Welcome!</div>
            <div className={styles.userHomeMenuOptions}>
                <MenuButton route="/currentDeck">Current Deck</MenuButton>
                <MenuButton route="/cardSearch">Card Search</MenuButton>
            </div>
        </div>
    )
};

export default UserHome;