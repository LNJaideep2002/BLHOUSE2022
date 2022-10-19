import React from "react";
import css from "./Product.module.css";
import ProductMainCard from "./ProductMainCard";
import { Heartstatus } from "../../Api/Apifunctions";
import { useSelector } from "react-redux";
function ProductMain(props) {
    const Redux = useSelector((state) => state);
    const Productcards = props.Data.map((value) => {
        if (Redux.login === 1) {
            const heart = Heartstatus({ type: props.value, ID: value.ID }, Redux.wishlist);
            return <ProductMainCard ID={value.ID} key={value.ID} heart={heart === 1 ? 1 : 0} value={props.value} image={'http://localhost:6500/images/' + props.image + '/' + (value.image.toString()).split("#")[0] + '.png'} name={value.name} price={value.price} rate={value.rate} offer={value.offer} />
        }
        return <ProductMainCard ID={value.ID} key={value.ID} heart={0} value={props.value} image={'http://localhost:6500/images/' + props.image + '/' + (value.image.toString()).split("#")[0] + '.png'} name={value.name} price={value.price} rate={value.rate} offer={value.offer} />
    })
    return (
        <div className={css.outer}>
            <p className={css.head} style={{ margin: '1vw 0vw 2vw 18.5vw' }}>{props.head}</p>
            {Productcards}
        </div>
    )
}
export default ProductMain;