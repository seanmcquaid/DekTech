import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Splash from "../../Splash/Splash";
import Register from "../../../containers/Users/Register/Register";
import Login from "../../../containers/Users/Login/Login";
import UserHome from "../../UserHome/UserHome";
import CurrentDeck from "../../../containers/CurrentDeck/CurrentDeck";
import CardSearch from "../../../containers/CardSearch/CardSearch";
import CardInfo from "../../../containers/CardInfo/CardInfo";
import ErrorPage from "../../ErrorPage/ErrorPage";
import {connect} from "react-redux";

const ProtectedRoutes = props => {
    const protectedRoute = Component => { return props.auth.isAuthenticated? Component : () => <Redirect to="/"/>};
    return(
        <Switch>
            <Route exact path="/" component={Splash}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/userHome" component={protectedRoute(UserHome)}/>
            <Route exact path="/currentDeck" component={protectedRoute(CurrentDeck)}/>
            <Route exact path="/cardSearch" component={protectedRoute(CardSearch)}/>
            <Route exact path={`/cardInfo/:cardId`} component={protectedRoute(CardInfo)}/>
            <Route component={ErrorPage}/>
        </Switch>
    )
}

const mapStateToProps = (state) =>{
    return{
        auth : state.auth
    }
}

export default connect(mapStateToProps,null)(ProtectedRoutes);