import React, {Component} from "react";
import {connect} from "react-redux";

import styles from "./Navbar.module.css"

class Navbar extends Component {
    render(){
        return(
            <div className={styles.navBar}>
                <div className={styles.leftNav}>
                    <div className={styles.leftNavLink}>MTG-Deck-Builder</div>
                </div>
                <div className={styles.rightNav}>
                    <div className={styles.rightNavLinks}>Register</div>       
                    <div className={styles.rightNavLinks}>Login</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatcher) => {

}

export default connect(mapStateToProps, null)(Navbar);