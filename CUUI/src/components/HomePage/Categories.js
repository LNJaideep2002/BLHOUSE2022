import React, { useState } from "react";
import css from "./Categories.module.css";
import { useSelector } from "react-redux";
import Card from "./Card";
import { Heartstatus } from "../../Api/Apifunctions"
function Categories(props) {
    const Redux = useSelector((state) => state);
    console.log(props.data)
    const Cards = props.data.map((value) => {
        if (Redux.login === 1) {
            const heart = Heartstatus({ type: props.value, ID: value.ID }, Redux.wishlist);
            return <Card heart={heart === 1 ? 1 : 0} value={props.value} key={value.ID} ID={value.ID} image={'http://localhost:6500/images/' + props.type + '/' + (value.image.toString()).split("#")[0] + '.png'} name={value.name} price={value.price} rate={value.rate} offer={value.offer} />
        }
        return <Card heart={0} key={value.ID} value={props.value} ID={value.ID} image={'http://localhost:6500/images/' + props.type + '/' + (value.image.toString()).split("#")[0] + '.png'} name={value.name} price={value.price} rate={value.rate} offer={value.offer} />
    })
    const arrow = "->";
    return (
        <div>
            <p className={css.head} style={props.st === 1 ? { margin: '-2vw 0vw 1.3vw 2vw' } : {}}>{props.tittle}{arrow}</p>
            <div className={css.cards}>
                {Cards}
            </div>
        </div>
    );
}
export default Categories;
