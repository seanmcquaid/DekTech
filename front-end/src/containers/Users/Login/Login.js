import React, {Component} from "react";
import styles from "./Login.module.css";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            errorMessage : "",
            email : "",
            password: ""
        }
    }

    componentWillReceiveProps(newProps){
        // check errorMessage from redux store
    }

    emailChangeHandler = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    passwordChangeHandler = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    handleLogin = (event) => {
        event.preventDefault();
        // const userEmail = this.state.email;
        // const userPassword = this.state.password;
    }

    render(){
        return(
            <div className="LoginContainer">
                <div className="LoginHeader">
                    <h1>Login</h1>
                    <p>Please enter your email and password below!</p>
                </div>
                <div className="LoginForm">
                    <form>
                        <input/>
                        <input/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;