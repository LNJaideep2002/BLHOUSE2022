import React from "react";
import profileicon from "../Icons/edit_profile.svg";
import css from "./AccountDetailBut.module.css";
import addressicon from "../Icons/your_address.svg"
import yourorder from "../Icons/your_order.svg";
function AccountDetailBut(props)
{
    return(
        <div>
            <button className={css.button} onClick={props.pro}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                    <img src={profileicon} className={css.icon} alt=""/>
                    <p className={css.name}>Your Profile</p>
                </div>
            </button>
            <button className={`${css.button} ${css.but}`} onClick={props.ord}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                    <img src={yourorder} className={css.icon} alt=""/>
                    <p className={css.name}>Your Order's</p>
                </div>
            </button>
            <button className={css.button} onClick={props.add}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                    <img src={addressicon} className={css.icon} alt=""/>
                    <p className={css.name}>Your Address</p>
                </div>
            </button>
        </div>
    )
}
export default AccountDetailBut;