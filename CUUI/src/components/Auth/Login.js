import React from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import LoginMain from "./LoginMain";
import Bottom from "../HomePage/Bottom/Bottom";
function Login()
{
    return(
        <React.Fragment>
            <Navbar/>
            <LoginMain/>
            <Bottom/>
        </React.Fragment>
    )
}
export default Login;