import React from "react";
import SignMain from "./SignupMain";
import Navbar from "../HomePage/Navbar/Navbar";
import Bottom from "../HomePage/Bottom/Bottom";
function Signup()
{
    return(
        <React.Fragment>
            <Navbar/>
            <SignMain/>
            <Bottom/>
        </React.Fragment>
    )
}
export default Signup;