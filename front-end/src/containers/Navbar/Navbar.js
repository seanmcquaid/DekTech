import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import checkAuthAction from "../../actions/checkAuthAction";

import styles from "./Navbar.module.css"

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
    }
    
    componentDidMount = () => {
        console.log(this.props.auth)
        // use this to constantly check auth for loggedIn status
        if(!this.props.auth.isLoggedIn){
            this.props.checkAuthAction();
        }
    }

    componentWillReceiveProps = newProps => {
        console.log(newProps)
        
    }

    render(){
        let leftNavHomeLink, rightNavLinks;
        if(this.props.auth){
            leftNavHomeLink = "/userHome";
            rightNavLinks = "";
        } else {
            leftNavHomeLink = "/";
            rightNavLinks = "";
        }
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
    return bindActionCreators({
        checkAuthAction : checkAuthAction
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);