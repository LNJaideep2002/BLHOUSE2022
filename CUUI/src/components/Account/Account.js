import React from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import AccountDetail from "./AccountDetail";
import Bottom from "../HomePage/Bottom/Bottom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Account() {
    const history = useHistory();
    const Redux = useSelector((val) => (val));
    console.log(Redux);
    if (Redux.login === 0)
        history.push("/");
    return (
        <React.Fragment>
            <Navbar />
            <AccountDetail />
            <Bottom />
        </React.Fragment>
    );
}
export default Account;