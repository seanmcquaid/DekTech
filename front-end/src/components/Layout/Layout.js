import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Footer from "../Footer/Footer";

const Layout = props => {
    return(
        <Aux>
            <div className="main-content">
                {props.children}
            </div>
            <Footer/>
        </Aux>
    )
}

export default Layout;