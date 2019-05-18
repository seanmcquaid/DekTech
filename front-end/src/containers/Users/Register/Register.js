import React, {Component} from "react";
import styles from "./Register.module.css";

class Register extends Component {
    constructor(){
        super()
        this.state = {
            errorMessage : "",
            email : "",
            password: "",
            duplicatePassword: ""
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

    duplicatePasswordChangeHandler = (event) => {
        this.setState({
            duplicatePassword : event.target.value
        })
    }


    handleRegister = (event) => {
        event.preventDefault();
        // const userEmail = this.state.email;
        // const userPassword = this.state.password;
        // const duplicatePassword = this.state.duplicatePassword
        this.props.regiserAction({
            
        })
    }

    render(){
        return(
            <div className="registerContainer">
                <div className="registerHeader">
                    <h1>Register</h1>
                    <p>Type in a valid email address and provide a password that has at least 7 characters with at least one number!</p>
                </div>
                <div className="registerForm">
                    <form>
                        <input/>
                        <input/>
                        <input/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;