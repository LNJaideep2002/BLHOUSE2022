import React from "react";
import css from "./YourOrder.module.css";
import staricon from "../../Icons/Staricon.svg";
function YourOrderCard(props) {
    return (
        <div className={css.order}>
            <p className={css.name}>{props.name}</p>
            <p className={css.date}>{props.date}</p>
            <p className={css.price}>{`₹ ${props.price}`}</p>
            <button className={css.button}><img className={css.icon} src={staricon} alt="" />Review</button>
        </div>
    )
}
export default YourOrderCard;