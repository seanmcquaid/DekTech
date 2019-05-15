import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Footer from "../Footer/Footer";
import Navbar from "../../containers/Navbar/Navbar";

const Layout = props => {
    return(
        <Aux>
            <Navbar/>
            {props.children}
            <Footer/>
        </Aux>
    )
}

export default Layout;