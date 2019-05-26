import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import styles from "./Register.module.css";
import registerAction from "../../../actions/registerAction";

class Register extends Component {
    constructor(){
        super()
        this.state = {
            message : "",
            email : "",
            password: "",
            duplicatePassword: ""
        }
    };

    componentWillReceiveProps = (newProps) => {
        // check errorMessage from redux store
        console.log(newProps)
        if(newProps.auth.message === "User already exists"){
            this.setState({
                message : "User already exists, try again"
            });
        } else if (newProps.auth.message === "Successfully registered"){
            this.props.history.push("/login");
        } else {
            this.setState({
                message : "Incorrect information, try again"
            });
        }
    };

    emailChangeHandler = event => {
        this.setState({
            email : event.target.value
        })
    };

    passwordChangeHandler = event => {
        this.setState({
            password : event.target.value
        })
    };

    duplicatePasswordChangeHandler = event => {
        this.setState({
            duplicatePassword : event.target.value
        })
    };


    handleRegister = event => {
        event.preventDefault();
        const {email, password, duplicatePassword} = this.state;
        if(password !== duplicatePassword){
            this.setState({
                message : "Your passwords don't match!"
            });
        } else {
            this.props.registerAction({
                username : email,
                password : password
            });
        }
    };

    render(){
        return(
            <div className={styles.registerContainer}>
                <div className={styles.registerHeaderContainer}>
                    <h1 className={styles.registerHeader}>Register</h1>
                    <p className={styles.registerHeaderSubtext}>Type in a valid email address and provide a password that has at least 7 characters with at least one number!</p>
                </div>
                <div className={styles.displayMessage}>{this.state.message}</div>
                <div className={styles.registerFormContainer}>
                    <form className={styles.registerForm} onSubmit={this.handleRegister}>
                        <input className={styles.userInput} value={this.state.email} onChange={this.emailChangeHandler} type="email" placeholder="Email"/>
                        <input className={styles.userInput} value={this.state.password} onChange={this.passwordChangeHandler} type="password" placeholder="Password"/>
                        <input className={styles.userInput} value={this.state.duplicatePassword} onChange={this.duplicatePasswordChangeHandler} type="password" placeholder="Re-type Password Here"/>
                        <button className={styles.registerButton} type="submit">Register</button>
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
        registerAction : registerAction
    },dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);