import React from "react";
import styles from "./MenuButton.module.css";

const MenuButton = props => {
    return(
        <div className={styles.menuButton}>
            {props.children}
        </div>
    )
};

export default MenuButton;