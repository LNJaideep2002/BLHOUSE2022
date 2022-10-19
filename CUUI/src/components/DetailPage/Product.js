import React, { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import css from "./Product.module.css";
import ProductDetail from "./ProductDetail";
import { Getproductdetailapi } from "../../Api/Apifunctions";
function Product(props) {
    const [Data, setData] = useState({ data: 0 });
    console.log(props);
    const Send = async (val) => {
        const response = await Getproductdetailapi(val);
        console.log(response);
        if (props.type === "blouse")
            props.datafn({ data: response.similar, type: "NeckDesigns" });
        else
            props.datafn({ data: response.similar, type: props.type });
        setData(response.product);
    }
    useEffect(() => {
        Send({ ID: props.ID, type: props.type });
    }, [props.ID]);
    return (
        <div className={css.outer}>
            {Data.data === 0 ? null : <React.Fragment>
                <ProductImage image1={Data.images[0]} image2={Data.images[1]} image3={Data.images[2]} />
                <ProductDetail name={Data.name} ID={Data.ID} value={Data.type} offer={Data.offer} price={Data.price} rate={Data.rate} />
            </React.Fragment>}
        </div>
    )
}
export default Product;