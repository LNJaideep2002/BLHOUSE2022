import React, { useRef, useState } from 'react'
import css from "./Home.module.css";
import Searchicon from "../Icons/Searchicon.svg";
import { CompanyOrdersapi } from "../../Api/Apifunctions"
import ProductCard from "./ProductCard";
export default function Home() {
    const Order = useRef();
    const [Product, setProduct] = useState({ st: 0 });
    const OrderHand = async (event) => {
        event.preventDefault();
        const response = await CompanyOrdersapi({ Order: Order.current.value });
        if (response.st === 200)
            setProduct({ ...response.Data, st: 1 });
        if (response.st === 100)
            setProduct({ ...response.Data, st: 2 });
        console.log(response);
    }
    return (
        <div>
            <div className={css.search}>
                <form onSubmit={OrderHand}>
                    <p className={css.order}>Order ID</p>
                    <input ref={Order} className={css.input} />
                    <button type='submit' className={css.button}>
                        <img src={Searchicon} alt="" className={css.icon} />
                    </button>
                </form>
            </div>
            {Product.st === 1 ? <div className={css.outer}>
                <div className={css.bag}>
                    <p className={css.baghead} style={{ margin: '1vw 0vw 0vw 1.5vw' }}>Order ID: {Product.orderID}</p>
                    <p className={css.baghead}>Bagname: {Product.bagname}</p>
                    <p className={css.baghead}>Sleeve ID: {Product.sleeve}</p>
                </div>
                {
                    Product.Product.map((value) => (<ProductCard name={value.name} key={value.ID} price={value.price} offer={value.offer} image={'http://localhost:6500/images/' + value.value + '/' + (value.image.toString()).split("#")[0] + '.png'} />))
                }
                <div className={css.imgmaincard}>
                    <img className={css.img} src={'http://localhost:6500/images/Sleeve/' + Product.sleeve + '.png'} />
                </div>
            </div> : Product.st === 2 ? <div className={css.outer} >
                <p className={css.notfound}>Order Not Found</p>
            </div> : null}
        </div>
    )
}
