import React from "react";
import {Route, Switch} from "react-router-dom";
import Splash from "../../Splash/Splash";
import Register from "../../../containers/Users/Register/Register";
import Login from "../../../containers/Users/Login/Login";
import UserHome from "../../UserHome/UserHome";
import CurrentDeck from "../../../containers/CurrentDeck/CurrentDeck";
import CardSearch from "../../../containers/CardSearch/CardSearch";
import CardInfo from "../../../containers/CardInfo/CardInfo";
import ErrorPage from "../../ErrorPage/ErrorPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const ProtectedRoutes = props => {
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

export default ProtectedRoutes;