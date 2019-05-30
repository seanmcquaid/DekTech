import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Aux from "../../hoc/Aux/Aux";
import Splash from "../../components/Splash/Splash";
import Register from "../Users/Register/Register";
import Login from "../Users/Login/Login";
import UserHome from "../../components/UserHome/UserHome";
import CurrentDeck from "../CurrentDeck/CurrentDeck";

class Protected extends Component {

    // check auth status and change allowed routes based on that

    render(){
        let availableRoutes;
        // console.log(this.props)
        if(this.props.auth.isLoggedIn === true){
            // console.log("currently logged in")
            availableRoutes =
            <Aux>
                <Route exact path="/userHome" component={UserHome}/>
            </Aux>;
        } else {
            // console.log(this.props.auth.isLoggedIn)
            availableRoutes = 
            <Aux>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
            </Aux>;
        }
        return(
            <Aux>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/userHome" component={UserHome}/>
                <Route exact path="/currentDeck" component={CurrentDeck}/>
            </Aux>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth : state.auth
    }
}

export default connect(mapStateToProps, null)(Protected);