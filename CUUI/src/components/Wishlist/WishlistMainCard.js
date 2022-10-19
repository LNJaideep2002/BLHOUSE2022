import React from "react";
import deleteicon from "../Icons/deleteicon.svg";
import css from "./WishlistMainCard.module.css";
import shoppingBag from "../Icons/shopping-bag.svg";
import { useSelector } from "react-redux";
function WishlistMainCard(props) {
    const Redux = useSelector((state) => state);
    const deletehand = () => {
        props.deletefn({ type: props.value, userID: Redux.ID, ID: props.ID, status: 0 });
    }
    return (
        <div className={css.card}>
            < div >
                <img className={css.img} src={props.image} alt="" />
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
                <button className={`${css.button} ${css.bag}`}>Add To BAG<img style={{ margin: '-0.3vw 0vw 0vw 0.3vw' }} src={shoppingBag} alt="" /></button>
            </div>
            <div>
                <button onClick={deletehand} className={`${css.button} ${css.delete}`}><img style={{ margin: '-0.3vw 0vw 0vw 0.1vw' }} src={deleteicon} alt="" /></button>
            </div>
        </ div>
    )
}
export default WishlistMainCard;