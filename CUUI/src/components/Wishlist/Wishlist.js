import React, { useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import WishlistMain from "./WishlistMain";
import Bottom from "../HomePage/Bottom/Bottom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Editwishlistapi } from "../../Api/Apifunctions";
import { Wishlistapi } from "../../Api/Apifunctions";
import { useDispatch } from "react-redux";
function Wishlist() {
    const Redux = useSelector((val) => val);
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(Redux.wishlist);
    const [Data, setData] = useState({ st: 100 });
    const Fetch = async () => {
        const response = await Wishlistapi(Redux.wishlist);
        // console.log(response);
        setData(response);
    }
    const Send = async (val) => {
        console.log(val);
        const response = await Editwishlistapi(val);
        dispatch({ type: 'editwishlist', payload: response.response });
        console.log(response);
        const response1 = await Wishlistapi(response.response);
        console.log(response1);
        setData(response1);
    }
    useEffect(() => {
        Fetch();
    }, []);
    return (
        <React.Fragment>
            <Navbar />
            {Data.st === 200 && Redux.login === 1 ? <WishlistMain data={Data} deletefn={Send} /> : null}
            {Redux.login === 0 ? history.push("/login") : null}
            <Bottom />
        </React.Fragment>
    )
}
export default Wishlist;