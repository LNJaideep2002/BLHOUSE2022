import React from 'react'
import Navbar from "../HomePage/Navbar/Navbar"
import Bottom from "../HomePage/Bottom/Bottom"
import Checkoutmain from './Checkoutmain'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
function Checkout() {
    const Redux = useSelector((state) => (state));
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(Redux);
    if (Redux.login === 0 || Redux.currentbag.st === null)
        history.push("/")
    const address = Redux.address.map((val) => {
        if (val.ID === Redux.currentbag.addID)
            return val.address;
    });
    const bag = Redux.bag.map((val) => {
        if (val.name === Redux.currentbag.name)
            return {
                name: val.name,
                price: val.price,
                image: Redux.currentbag.image,
                noofitems: val.products.length
            }
    })
    return (
        <React.Fragment>
            <Navbar />
            <Checkoutmain Redux={Redux} history={history} dispatch={dispatch} address={address} userID={Redux.ID} currentbag={Redux.currentbag} bag={bag[0]} />
            <Bottom />
        </React.Fragment>
    )
}

export default Checkout