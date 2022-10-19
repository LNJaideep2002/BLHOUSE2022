import React from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import Bottom from "../HomePage/Bottom/Bottom"
import Sleevemain from "./Sleevemain";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
function Sleeve() {
    const history = useHistory();
    const Redux = useSelector((val) => val);
    if (Redux.login === 0) {
        history.push("/");
    }
    return (
        <React.Fragment>
            <Navbar />
            <Sleevemain image={Redux.currentbag.image} />
            <Bottom />
        </React.Fragment>
    )
}
export default Sleeve;