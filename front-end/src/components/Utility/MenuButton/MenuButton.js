import React from "react";
import styles from "./MenuButton.module.css";
import {Link} from "react-router-dom";

const MenuButton = props => {
    return(
        <Link className={styles.menuButton} to={props.route}>
            {props.children}
        </Link>
    )
};

export default MenuButton;