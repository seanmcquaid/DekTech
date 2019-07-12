import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {checkTokenAction, logoutAction} from "../../actions/authActions/authActions";
import Aux from "../../hoc/Aux/Aux";

import styles from "./Navbar.module.css"

class Navbar extends Component {
    componentDidMount = () => {
        if(this.props.auth.token){
            this.props.checkTokenAction();
        }
    }

    render(){
        // console.log(this.props)
        let leftNavHomeLink, rightNavLinks, rightNavMobileLinks;
        if(this.props.auth.isAuthenticated){
            leftNavHomeLink = "/userHome";
            rightNavLinks = 
            <Aux>
                <div className={styles.rightNavLinks}><Link to="/currentDeck" className={styles.rightNavLink}>Current Deck</Link></div>
                <div className={styles.rightNavLinks}><Link to="/cardSearch" className={styles.rightNavLink}>Card Search</Link></div>
                <div className={styles.rightNavLinks}><button className={styles.rightNavLinkButton} onClick={() => this.props.logoutAction()}>Logout</button></div>
            </Aux>;
            rightNavMobileLinks = 
            <div>
                <div className={styles.rightNavMobileLinks}><Link to="/currentDeck" className={styles.rightNavLink}>Current Deck</Link></div>
                <div className={styles.rightNavMobileLinks}><Link to="/cardSearch" className={styles.rightNavLink}>Card Search</Link></div>
                <div className={styles.rightNavMobileLinks}><button className={styles.rightNavLinkButton} onClick={() => this.props.logoutAction()}>Logout</button></div>
            </div>;
        } else {
            leftNavHomeLink = "/";
            rightNavLinks = 
            <Aux>
                <div className={styles.rightNavLinks}><Link to="/register" className={styles.rightNavLink}>Register</Link></div>       
                <div className={styles.rightNavLinks}><Link to="/login" className={styles.rightNavLink}>Login</Link></div>
            </Aux>;
            rightNavMobileLinks =
            <div>
                <div className={styles.rightNavMobileLinks}><Link to="/register" className={styles.rightNavLink}>Register</Link></div>       
                <div className={styles.rightNavMobileLinks}><Link to="/login" className={styles.rightNavLink}>Login</Link></div>
            </div>;
        }
        return(
            <div className={styles.navBar}>
                <div className={styles.leftNav}>
                    <div className={styles.leftNavLinks}><Link className={styles.leftNavLink} to={leftNavHomeLink}>Dek Tech</Link></div>
                </div>
                <div className={styles.rightNav}>
                    {rightNavLinks}
                    {/* {rightNavMobileLinks} */}
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
        checkTokenAction,
        logoutAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);