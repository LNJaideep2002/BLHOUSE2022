import React from "react";
import css from "./YourAddress.module.css";
import { useDispatch, useSelector } from "react-redux";
import YourAddressCard from "./YourAddressCard";
function YourAddress() {
    const Redux = useSelector((val) => val);
    console.log(Redux.address);
    const Address = Redux.address.length !== 0 && Redux.address[0].ID !== 0 ? Redux.address.map((val) => (<YourAddressCard key={val.ID} phone={Redux.phone} address={val.address} ID={val.ID} />)) : <YourAddressCard key={0} phone={Redux.phone} address={"NO ADDRESS FOUND"} ID={0} />;
    return (
        <div className={css.outer}>
            <p className={css.head}>Your Address</p>
            {Address}
        </div>
    )
}
export default YourAddress;