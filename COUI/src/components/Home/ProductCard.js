import React from 'react'
import css from "./ProductCard.module.css";
function ProductCard(props) {
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
        </ div>
    )
}

export default ProductCard