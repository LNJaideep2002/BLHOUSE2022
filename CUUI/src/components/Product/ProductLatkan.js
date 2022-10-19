import React, { useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import ProductMain from "./ProductMain";
import Bottom from "../HomePage/Bottom/Bottom";
import { Getdataapi } from "../../Api/Apifunctions";
function Product(props) {
    const [Data, setData] = useState([]);
    const Fetch = async () => {
        const response = await Getdataapi({ type: props.value });
        setData(response.Data);
    }
    useEffect(() => {
        Fetch();
    }, []);
    return (
        <React.Fragment>
            <Navbar />
            {Data.length === 0 ? null : <ProductMain value={props.value} head={props.head} image={props.image} Data={Data} />}
            <Bottom />
        </React.Fragment>
    )
}
export default Product;