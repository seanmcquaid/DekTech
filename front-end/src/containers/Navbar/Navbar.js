import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import styles from "./Navbar.module.css"

class Navbar extends Component {
    render(){
        return(
            <div className={styles.navBar}>
                <div className={styles.leftNav}>
                    <div className={styles.leftNavLink}>Dek Tech</div>
                </div>
                <div className={styles.rightNav}>
                    <div className={styles.rightNavLinks}><Link to="/register"className={styles.rightNavLink}>Register</Link></div>       
                    <div className={styles.rightNavLinks}><Link to="/login"className={styles.rightNavLink}>Login</Link></div>
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