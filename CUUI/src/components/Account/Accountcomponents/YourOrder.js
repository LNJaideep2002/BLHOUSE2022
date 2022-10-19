import React from "react";
import css from "./YourOrder.module.css";
import YourOrderCard from "./YourOrderCard";
import { useSelector } from "react-redux";
function YourOrder() {
    const Redux = useSelector((val) => val);
    console.log(Redux.orders);
    const OrderCard = Redux.orders.map((val) => (<YourOrderCard key={val.price} name={val.name} price={val.price} date={val.date} />))
    return (
        <div className={css.outer}>
            <p className={css.head}>Your Order</p>
            {Redux.orders.length !== 0 ? OrderCard : <div className={css.card}>
                <p className={css.notfound}>No Order's Found</p>
            </div>}
        </div >
    )
}
export default YourOrder;