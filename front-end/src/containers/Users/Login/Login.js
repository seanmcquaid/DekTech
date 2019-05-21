import React, {Component} from "react";
import styles from "./Login.module.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import loginAction from "../../../actions/loginAction";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            message : "",
            email : "",
            password: ""
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
    }

    emailChangeHandler = (event) => {
        this.setState({
            email : event.target.value
        });
    }

    passwordChangeHandler = (event) => {
        this.setState({
            password : event.target.value
        });
    }

    handleLogin = (event) => {
        event.preventDefault();
        const userEmail = this.state.email;
        const userPassword = this.state.password;
        this.props.loginAction({
            userEmail,
            userPassword
        });
    }

    render(){
        return(
            <div className={styles.loginContainer}>
                <div className={styles.loginHeaderContainer}>
                    <h1 className={styles.loginHeader}>Login</h1>
                    <p className={styles.loginHeaderSubtext}>Type in your email and password below!</p>
                </div>
                <div className={styles.displayMessage}>{this.state.message}</div>
                <div className={styles.loginFormContainer}>
                    <form className={styles.loginForm} onSubmit={this.handleLogin}>
                        <input className={styles.userInput} value={this.state.email} onChange={this.emailChangeHandler} type="email" placeholder="Email"/>
                        <input className={styles.userInput} value={this.state.password} onChange={this.passwordChangeHandler} type="password" placeholder="Password"/>
                        <button className={styles.loginButton} type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({
        loginAction : loginAction
    },dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);