import React, { useState, useRef } from "react";
import css from "./ProductDetail.module.css";
import selected from "../Icons/selected.svg";
import unselected from "../Icons/un-selected.svg";
import shoppingBag from "../Icons/shopping-bag.svg";
import label from "../Icons/label.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addwishlistapi } from "../../Api/Apifunctions";
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import CartMain from "../Cart/CartMain";
import popcss from "../Wishlist/WishlistMain.module.css"
import CartMainCard from "../Cart/CartMainCard";
import { NewBagapi, EditBagapi } from "../../Api/Apifunctions";
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: -18vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

function ProductDetail(props) {
    const Redux = useSelector((state) => state);
    console.log(Redux);
    const bagname = useRef();
    const [newbag, setnewbag] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const Send = async (val) => {
        const response = await addwishlistapi(val);
        dispatch({ type: 'editwishlist', payload: response.data });
        console.log(response);
    }
    const cancelhand = () => {
        setnewbag(0);
    }
    const newbaghand = () => {
        setnewbag(newbag === 0 ? 1 : 0);
    }

    const Send2 = async (event) => {
        event.preventDefault();
        const response = await NewBagapi({ name: bagname.current.value, ID: Redux.ID });
        console.log(response);
        dispatch({ type: "deletebag", payload: response.Data });
        setnewbag(0);
    }
    const cartpagehand = () => {
        // console.log("add to bag")
        if (Redux.login === 0)
            history.push("/login");
        setOpen(true);
    }
    const addtobag = async (val) => {
        const response = await EditBagapi({ ...val, ID: props.ID, type: props.value });
        console.log(response);
        dispatch({ type: "deletebag", payload: response.Data });
    }
    const wishlisthand = () => {
        if (Redux.login === 0)
            history.push("/login");
        Send({ type: props.value, userID: Redux.ID, ID: props.ID });
    }
    return (
        <div>
            <p className={css.name}>{props.name}</p>
            <div className={css.price}>
                <div>
                    <p>
                        <span className={css.oprice}>
                            <strike>{((props.price * 100) / (props.offer * 100)).toFixed(1)}</strike>
                        </span>
                        <span className={css.offer}>{`${(props.offer * 100).toFixed()}%`}</span>
                        <span className={css.cprice}>{`₹${props.price}`}</span>
                    </p>
                    <p style={{ margin: '2vw 0vw 0vw 0vw' }}><span className={css.ratep}>Rating:</span><span className={css.raten}>{props.rate}</span></p>
                </div>
                <div style={{ overflow: 'auto', height: '8vw' }}>
                    <p className={css.offers}>Offer's</p>
                    <ul className={css.ultag}>
                        <li><img src={label} alt="" />Special PriceGet extra 30% off</li>
                        <li><img src={label} alt="" />Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%</li>
                        <li><img src={label} alt="" />Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                    </ul>
                </div>
            </div>
            <div>
                {Redux.login === 1 ?
                    <StyledModal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={open}
                        onClose={handleClose}
                        BackdropComponent={Backdrop}
                    >
                        <div className={popcss.outer} style={{ width: '50vw' }}>
                            <p className={popcss.head} style={{ margin: '1vw 0vw 2vw 18.5vw' }}>Your's Bag</p>
                            {Redux.bag.length !== 0 && Redux.bag[0] !== undefined ? Redux.bag.map((val) => (<CartMainCard but={0} addtobag={addtobag} reduxdispatch={dispatch} key={val.name} userID={Redux.ID} name={val.name} product={val.products} price={val.price} noofitems={val.products.length} />)) : <div className={popcss.card}>
                                <p className={popcss.notfound}>Nothing in Bag</p>
                            </div>}
                            <div>
                                <button className={popcss.button} onClick={newbaghand}>+ Create a New BAG</button>
                                {newbag === 1 ? <div>
                                    <form onSubmit={Send2}>
                                        <p className={popcss.label}>Enter the Package Name:</p>
                                        <input ref={bagname} className={popcss.input} type="text" />
                                        <div>
                                            <button className={popcss.butsub} onClick={cancelhand} style={{ float: 'left', margin: '1vw 0vw 1vw 18vw' }}>Cancel</button>
                                            <button className={popcss.butsub} type="submit" style={{ margin: '1vw 0vw 1vw 2vw' }}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                    : null}
                            </div>
                        </div>
                    </StyledModal>
                    : null}
            </div>
            <button onClick={cartpagehand} className={css.button}>Add To BAG <img src={shoppingBag} className={css.icon} alt="" /></button>
            <button onClick={wishlisthand} className={css.button} style={{ margin: '0vw 0vw 2vw 6vw' }}>Add To Wishlist <img src={selected} className={css.icon} alt="" /></button>
        </div>

    )
}
export default ProductDetail;