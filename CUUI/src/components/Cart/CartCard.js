import React from "react";
import deleteicon from "../Icons/deleteicon.svg";
import css from "../Wishlist/WishlistMainCard.module.css";
function CartCard(props) {
    const deleteitem = () => {
        props.sendfn({ ID: props.ID, userID: props.userID, name: props.bagname, type: props.value, Stype: "edit" });
    }
    return (
        <div className={css.cartmaincard}>
            < div >
                <img className={css.cartimg} src={props.image} alt="" />
            </div>
            <div>
                <p className={css.name}>{props.name}</p>
                <p>
                    <span className={css.oprice}>
                        <strike>{((props.price * 100) / (props.offer * 100)).toFixed(1)}</strike>
                    </span>
                    <span className={css.offer}>{`${(props.offer * 100).toFixed()}%`}</span>
                    <span className={css.cprice}>{`₹${props.price}`}</span>
                </p>
            </div>
            <div>
                <button onClick={deleteitem} className={`${css.button} ${css.delete}`}><img style={{ margin: '-0.3vw 0vw 0vw 0.1vw' }} src={deleteicon} alt="" /></button>
            </div>
        </ div>
    )
}
export default CartCard;