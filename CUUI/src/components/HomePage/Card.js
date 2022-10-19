import React, { useEffect, useState } from "react";
import css from "./Card.module.css";
import unselected from "../Icons/un-selected.svg";
import selected from "../Icons/selected.svg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Editwishlistapi } from "../../Api/Apifunctions";
function Card(props) {
  const Redux = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const [heart, setheart] = useState(props.heart);
  const type = props.value;
  console.log(type);
  const Send = async (val) => {
    const response = await Editwishlistapi(val);
    dispatch({ type: 'editwishlist', payload: response.response })
    console.log(response);
  }
  const hand = () => {
    if (Redux.login === 0)
      history.push("/login");
    if (heart === 0) {
      Send({ type: props.value, userID: Redux.ID, ID: props.ID, status: 1 });//status one to add
      setheart(1);
    }
    else {
      Send({ type: props.value, userID: Redux.ID, ID: props.ID, status: 0 });
      setheart(0);
    }
  };
  return (
    <div className={css.card}>
      <img className={css.img} src={props.image} alt="" />
      <p className={css.name}><Link to={`/detail/${type}/${props.ID}`} className={css.link} >{props.name}</Link></p>
      <p>
        <span className={css.oprice}>
          <strike>{((props.price * 100) / (props.offer * 100)).toFixed(1)}
          </strike>
        </span>
        <span className={css.offer}>{`${(props.offer * 100).toFixed()}%`}</span>
        <span className={css.cprice}>{`₹${props.price}`}</span>
      </p>
      <div className={css.rate}>{props.rate}</div>
      <div>
        <p
          style={{ float: "left", margin: "0vw 0vw 0vw 3.5vw" }}
          className={css.wish}
        >
          (Wishlist)
        </p>
        <button className={css.heart} onClick={hand}>
          <img src={heart === 0 ? unselected : selected} alt="" />
        </button>
      </div>
    </div>
  );
}
export default Card;
