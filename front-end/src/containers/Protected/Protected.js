import React, {Component} from "react";
// import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Protected extends Component {
    render(){
        return(
            <div>
                <h1>STUFF WILL BE HERE SOON</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth : state.auth
    }
}

export default connect(mapStateToProps, null)(Protected);