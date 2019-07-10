import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

class ProtectedRoute extends Component {
    render(){
        return(
            <Route component={
                () => {
                    return this.props.auth.isAuthenticated? <this.props.component/> : <Redirect to="/"/>
                }
            }/>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth : state.auth
    }
}



export default connect(mapStateToProps, null)(ProtectedRoute);