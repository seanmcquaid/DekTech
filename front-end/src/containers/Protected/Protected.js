import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Aux from "../../hoc/Aux/Aux";
import Splash from "../../components/Splash/Splash";

class Protected extends Component {
    render(){
        return(
            <Aux>
                <Route to="/" component={Splash}/>
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