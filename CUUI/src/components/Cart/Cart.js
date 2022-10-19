import React, { useEffect } from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import CartMain from "./CartMain";
import Bottom from "../HomePage/Bottom/Bottom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Cart() {
    const Redux = useSelector((state) => state);
    console.log(Redux.bag);
    const history = useHistory();
    if (Redux.login === 0) {
        history.push("/");
    }
    return (
        <React.Fragment>
            <Navbar />
            {Redux.login === 1 ? <CartMain history={history} bagst={{ st: 0, ID: null, type: null }} /> : null}
            <Bottom />
        </React.Fragment>
    )
}
export default Cart;