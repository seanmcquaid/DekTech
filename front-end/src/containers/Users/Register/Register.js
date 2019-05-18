import React, {Component} from "react";
import styles from "./Register.module.css";

class Register extends Component {
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

    handleRegister = (event) => {
        event.preventDefault();
        // const userEmail = this.state.email;
        // const userPassword = this.state.password;
    }

    render(){
        return(
            <div className="registerContainer">
                <div className="registerHeader"></div>
                <div className="registerForm"></div>
            </div>
        )
    }
}

export default Register;