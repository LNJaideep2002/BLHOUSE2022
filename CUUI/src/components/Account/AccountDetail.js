import React, { useState } from "react";
import AccountDetailBut from "./AccountDetailBut";
import profileicon from "../Icons/account_circle_3.svg"
import css from "./AccountDetail.module.css"
import YourProfile from "./Accountcomponents/YourProfile";
import YourOrder from "./Accountcomponents/YourOrder";
import YourAddress from "./Accountcomponents/YourAddress";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function AccountDetail() {
    const [currentpage, setcur] = useState(<YourProfile />);
    const dispatch = useDispatch();
    const history = useHistory();
    const logouthand = () => {
        dispatch({ type: "logout" });
        history.push("/");
    }
    const profil = () => {
        setcur(<YourProfile />);
    }
    const address = () => {
        setcur(<YourAddress />);
    }
    const order = () => {
        setcur(<YourOrder />);
    }
    const arrow = "";
    return (
        <div>
            <img className={css.icon} src={profileicon} alt="" />
            {/* <div style={{display:'grid',gridTemplateColumns:'1fr 3fr'}}> */}
            <AccountDetailBut pro={profil} add={address} ord={order} />
            {/* <AccountDetailMain/> */}
            {/* </div> */}
            {currentpage}
            <button onClick={logouthand} className={css.button}>Logout</button>
        </div>
    )
}
export default AccountDetail;