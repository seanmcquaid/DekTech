import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Footer from "../Footer/Footer";
import Navbar from "../../containers/Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = props => {
    return(
        <Aux>
            <Navbar/>
            <div className={styles.mainContent}>
                {props.children}
            </div>
            <Footer/>
        </Aux>
    )
}

export default Layout;