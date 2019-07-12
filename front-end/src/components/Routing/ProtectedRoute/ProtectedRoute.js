import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

const ProtectedRoute = props => {
        return(
            <Route component={() => props.auth.isAuthenticated? <props.component/> : <Redirect to="/"/>}/>
        )
}

const mapStateToProps = (state) =>{
    return{
        auth : state.auth
    }
}



export default connect(mapStateToProps, null)(ProtectedRoute);