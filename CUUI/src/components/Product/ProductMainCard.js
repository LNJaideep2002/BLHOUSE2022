import React, { useState } from "react";
import css from "./Product.module.css";
import samplei from "../Images/1.png";
import shoppingBag from "../Icons/shopping-bag.svg";
import unselected from "../Icons/un-selected.svg";
import selected from "../Icons/selected.svg";
import { Editwishlistapi } from "../../Api/Apifunctions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
function ProductMainCard(props) {
    const Redux = useSelector((state) => state);
    const [heart, setheart] = useState(props.heart);
    const history = useHistory();
    const dispatch = useDispatch();
    const Send = async (val) => {
        const response = await Editwishlistapi(val);
        dispatch({ type: 'editwishlist', payload: response.response })
        // console.log(response);
    }

    const hand = () => {
        if (Redux.login === 0)
            history.push("/login");
        if (heart === 0) {
            Send({ type: props.value, userID: Redux.ID, ID: props.ID, status: 1 });
            setheart(1);
        }
        else {
            Send({ type: props.value, userID: Redux.ID, ID: props.ID, status: 0 });
            setheart(0);
        }
    };
    return (
        <div className={css.card}>
            <div>
                <img className={css.img} src={props.image} alt="" />
            </div>
            <div>
                <p className={css.name}><Link to={`/detail/${props.value}/${props.ID}`} className={css.link} >{props.name}</Link></p>
                <p>
                    <span className={css.oprice}>
                        <strike>{((props.price * 100) / (props.offer * 100)).toFixed(1)}</strike>
                    </span>
                    <span className={css.offer}>{`${(props.offer * 100).toFixed()}%`}</span>
                    <span className={css.cprice}>{`₹${props.price}`}</span>
                </p>
                <div style={{ display: 'none' }}>
                    <button className={`${css.button} ${css.bag}`}>Add To BAG<img style={{ margin: '-0.3vw 0vw 0vw 0.3vw' }} src={shoppingBag} alt="" /></button>
                </div>
            </div>
            <div>
                <button className={css.heart} onClick={hand}>
                    <img src={heart === 0 ? unselected : selected} style={{ width: '2.5vw' }} alt="" />
                </button>
            </div>
        </div>
    )
}
export default ProductMainCard;