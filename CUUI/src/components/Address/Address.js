import React from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import Addressmain from "./Addressmain";
import Bottom from "../HomePage/Bottom/Bottom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Address() {
    const Redux = useSelector((state) => state);
    console.log(Redux);
    const dispatch = useDispatch();
    const history = useHistory();
    if (Redux.login === 0)
        history.push("/");
    return (
        <div>
            <Navbar />
            {Redux.login === 0 ? null : <Addressmain history={history} dispatch={dispatch} userID={Redux.ID} address={Redux.address} />}
            <Bottom />
        </div>
    )
}
export default Address;