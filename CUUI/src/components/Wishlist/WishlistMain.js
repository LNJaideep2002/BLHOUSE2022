import React from "react";
import WishlistMainCard from "./WishlistMainCard";
import css from "./WishlistMain.module.css";
function WishlistMain(props) {
    const Data = props.data;
    const length = props.data.responseData.length;
    const wishlistcard = Data.responseData.map((value) => (<WishlistMainCard key={value.ID} ID={value.ID} value={value.value} deletefn={props.deletefn} image={'http://localhost:6500/images/' + value.type + '/' + (value.image.toString()).split("#")[0] + '.png'} name={value.name} price={value.price} rate={value.rate} offer={value.offer} />));
    return (
        <div className={css.outer}>
            <p className={css.head}>Your's Wishlist</p>
            {length === 0 ? <div className={css.card}>
                <p className={css.notfound}>Nothing in Wishlist</p>
            </div> : wishlistcard}
        </div>
    )
}
export default WishlistMain;