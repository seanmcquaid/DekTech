import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {checkTokenAction} from "../../actions/authActions/authActions";
import Aux from "../../hoc/Aux/Aux";

import styles from "./Navbar.module.css"

class Navbar extends Component {
    componentDidMount = () => {
        if(this.props.auth.token){
            this.props.checkTokenAction();
            // check token here and remove token via redux if invalid
        }
    }

    // componentWillReceiveProps = newProps => {
    //     console.log(newProps)
    // }

    render(){
        console.log(this.props)
        let leftNavHomeLink, rightNavLinks, rightNavMobileLinks;
        if(this.props.auth.isAuthenticated){
            leftNavHomeLink = "/userHome";
            rightNavLinks = 
            <Aux>
                <div className={styles.rightNavLinks}><Link to="/currentDeck" className={styles.rightNavLink}>Current Deck</Link></div>
                <div className={styles.rightNavLinks}><Link to="/cardSearch" className={styles.rightNavLink}>Card Search</Link></div>
                <div className={styles.rightNavLinks}><Link to="/userProfile" className={styles.rightNavLink}>Profile</Link></div>
                <div className={styles.rightNavLinks}>Logout</div>
            </Aux>;
        } else {
            leftNavHomeLink = "/";
            rightNavLinks = 
            <Aux>
                <div className={styles.rightNavLinks}><Link to="/register" className={styles.rightNavLink}>Register</Link></div>       
                <div className={styles.rightNavLinks}><Link to="/login" className={styles.rightNavLink}>Login</Link></div>
            </Aux>;
        }
        return(
            <div className={styles.navBar}>
                <div className={styles.leftNav}>
                    <div className={styles.leftNavLinks}><Link className={styles.leftNavLink} to={leftNavHomeLink}>Dek Tech</Link></div>
                </div>
                <div className={styles.rightNav}>
                    {rightNavLinks}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        checkTokenAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);