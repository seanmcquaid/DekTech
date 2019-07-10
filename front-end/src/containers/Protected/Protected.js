import React, {Component} from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Aux from "../../hoc/Aux/Aux";
import Splash from "../../components/Splash/Splash";
import Register from "../Users/Register/Register";
import Login from "../Users/Login/Login";
import UserHome from "../../components/UserHome/UserHome";
import CurrentDeck from "../CurrentDeck/CurrentDeck";
import CardSearch from "../CardSearch/CardSearch";
import CardInfo from "../CardInfo/CardInfo";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

class Protected extends Component {

    // check auth status and change allowed routes based on that

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <ProtectedRoute exact path="/userHome" component={UserHome}/>
                <ProtectedRoute exact path="/currentDeck" component={CurrentDeck}/>
                <ProtectedRoute exact path="/cardSearch" component={CardSearch}/>
                <ProtectedRoute exact path={`/cardInfo/:cardId`} component={CardInfo}/>
                <Route component={ErrorPage}/>
            </Switch>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth : state.auth
    }
}

export default connect(mapStateToProps, null)(Protected);