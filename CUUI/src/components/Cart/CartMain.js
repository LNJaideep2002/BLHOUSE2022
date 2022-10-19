import React, { useRef, useState } from "react";
import css from "../Wishlist/WishlistMain.module.css"
import CartMainCard from "./CartMainCard";
import { useSelector, useDispatch } from "react-redux";
import { NewBagapi } from "../../Api/Apifunctions";
function CartMain(props) {
    const Redux = useSelector((state) => state);
    console.log(Redux);
    const bagname = useRef();
    const [newbag, setnewbag] = useState(0);
    const dispatch = useDispatch();
    const length = Redux.bag.length;
    console.log(length);
    const newbaghand = () => {
        setnewbag(newbag === 0 ? 1 : 0);
    }
    const Send = async (event) => {
        event.preventDefault();
        const response = await NewBagapi({ name: bagname.current.value, ID: Redux.ID });
        console.log(response);
        dispatch({ type: "deletebag", payload: response.Data });
        setnewbag(0);
    }
    const cancelhand = () => {
        setnewbag(0);
    }
    return (
        <div className={css.outer}>
            <p className={css.head} style={{ margin: '1vw 0vw 2vw 18.5vw' }}>Your's Bag</p>
            {length !== 0 && Redux.bag[0] !== undefined ? Redux.bag.map((val) => (<CartMainCard history={props.history} reduxdispatch={dispatch} key={val.name} bagst={props.bagst} userID={Redux.ID} name={val.name} product={val.products} price={val.price} noofitems={val.products.length} />)) : <div className={css.card}>
                <p className={css.notfound}>NO BAG FOUND</p>
            </div>}
            <div>
                <button className={css.button} onClick={newbaghand}>+ Create a New BAG</button>
                {newbag === 1 ? <div>
                    <form onSubmit={Send}>
                        <p className={css.label}>Enter the Package Name:</p>
                        <input ref={bagname} className={css.input} type="text" />
                        <div>
                            <button className={css.butsub} onClick={cancelhand} style={{ float: 'left', margin: '1vw 0vw 1vw 18vw' }}>Cancel</button>
                            <button className={css.butsub} type="submit" style={{ margin: '1vw 0vw 1vw 2vw' }}>Submit</button>
                        </div>
                    </form>
                </div>
                    : null}
            </div>
        </div>
    )
}
export default CartMain;