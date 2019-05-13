import React from "react";
import Aux from "../../hoc/Aux/Aux";

const Layout = props => {
    return(
        <Aux>
            <div className="main-content">
                {props.children}
            </div>
        </Aux>
    )
}

export default Layout;