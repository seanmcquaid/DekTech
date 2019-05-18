import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Aux from "../../hoc/Aux/Aux";
import Splash from "../../components/Splash/Splash";
import Register from "../Users/Register/Register";

class Protected extends Component {

    // check auth status and change allowed routes based on that

    render(){
        return(
            <Aux>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/register" component={Register}/>
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