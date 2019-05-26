import React from "react";
import styles from "./UserHome.module.css";
import MenuButton from "../Utility/MenuButton/MenuButton";


const UserHome = props => {
    return(
        <div className={styles.userHomeContainer}>
            <div className={styles.userHomeTitle}>UserHome Title</div>
            <div className={styles.userHomeMenuContainer}>
                <div className={styles.userHomeMenuOptions}>
                    <MenuButton>Hello</MenuButton>
                    <MenuButton>Hello</MenuButton>
                    <MenuButton>Hello</MenuButton>
                </div>
            </div>
        </div>
    )
};

export default UserHome;