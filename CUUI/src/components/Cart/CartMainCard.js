import React, { useState, useEffect } from "react";
import css from "../Wishlist/WishlistMainCard.module.css";
import Downarrowicon from "../Icons/DownIcon.svg";
import Uparrowicon from "../Icons/Uparrowicon.svg";
import deleteicon from "../Icons/deleteicon.svg";
import { Getcartapi, EditCartapi } from "../../Api/Apifunctions";
import CartCard from "./CartCard";
import { Deletecartapi, EditBagapi } from "../../Api/Apifunctions";
import { useHistory } from "react-router-dom";
import nothinginbag from "../Images/nothinginbag.png";
function CartMainCard(props) {
    console.log(props.noofitems);
    const [icon, seticon] = useState(0);
    const [products, setproducts] = useState([]);
    const [noofitems, setnoofitems] = useState(props.noofitems);
    const [image, setimage] = useState("");
    const Fetch = async () => {
        console.log(props.product);
        const response = await Getcartapi({ name: props.name, products: props.product });
        setproducts(response.products);
        console.log(response);
        if (response.products.length !== 0)
            setimage('http://localhost:6500/images/' + response.products[0].value + '/' + (response.products[0].image.toString()).split("#")[0] + ".png");
        else
            setimage(nothinginbag);
    }
    const addtobag = () => {
        props.addtobag({ userID: props.userID, name: props.name })
    }
    const proceedhand = () => {
        console.log(props.name);
        props.reduxdispatch({ type: "currentbag", payload: { st: 1, name: props.name, ID: null, image } });
        props.history.push("/sleeve");
    }
    const Send = async (val) => {
        if (val.Stype === "delete") {
            const response = await Deletecartapi(val);
            console.log(response);
            props.reduxdispatch({ type: "deletebag", payload: response.Data });
        }
        if (val.Stype === "edit") {
            const response = await EditCartapi(val);
            console.log(response.resproducts.length);
            setproducts(response.resproducts);
            setnoofitems(response.resproducts.length)
            props.reduxdispatch({ type: "deletebag", payload: response.Data });
        }
    }
    const deletehand = () => {
        Send({ ID: props.userID, name: props.name, Stype: "delete" });
    }
    useEffect(() => {
        Fetch();
        setnoofitems(props.noofitems);
    }, [props.noofitems]);
    const iconhand = () => {
        icon === 0 ? seticon(1) : seticon(0);
    }
    return (
        <div className={css.cartcard}>
            <div className={css.cartsubcard}>
                <img className={css.img} style={{ margin: '1vw 0vw 0vw 3.3vw', float: 'left' }} src={image} alt="" />
                <div className={css.cartname}>
                    <p style={{ margin: '0.5vw 0vw 1vw 0vw' }} className={css.name}>{props.name}</p>
                    <p className={css.content}>Price : {props.price}</p>
                    <p className={css.content}>No of items:{noofitems}</p>
                    {props.but === 0 ? <button onClick={addtobag} className={css.button} style={{ margin: '0vw 0vw 0.5vw 0vw', fontSize: '1.2vw' }}>Add to this bag</button> : <button className={css.button} onClick={proceedhand} style={{ margin: '0vw 0vw 0.5vw 0vw', fontSize: '1.2vw' }}>Proceed with this item</button>}
                </div>
                <div style={props.but === 0 ? { display: 'none' } : null}>
                    <button onClick={iconhand} className={css.buttonicon}>{icon === 0 ? <img src={Downarrowicon} style={{ width: '2.5vw' }} alt="" /> : <img src={Uparrowicon} style={{ width: '2.5vw' }} alt="" />}</button>
                    <button onClick={deletehand} style={{ margin: '1vw 0vw 0vw 2vw', backgroundColor: 'black', width: '2vw' }}><img src={deleteicon} alt="" style={{ margin: '0vw 0vw 0vw -0.3vw' }} /></button>
                </div>
            </div>
            <div>
                {
                    icon === 1 ? products.map((value) => (<CartCard userID={props.userID} ID={value.ID} bagname={props.name} sendfn={Send} key={value.ID} value={value.type} image={'http://localhost:6500/images/' + value.value + '/' + (value.image.toString()).split("#")[0] + '.png'} cart={1} name={value.name} price={value.price} rate={value.rate} offer={value.offer} />)) : null
                }
            </div>
        </div>
    )
}
export default CartMainCard;