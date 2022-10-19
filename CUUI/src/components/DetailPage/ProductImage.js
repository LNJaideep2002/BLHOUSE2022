import React, { useEffect, useState } from "react";
import css from "./ProductImage.module.css";
function ProductImage(props) {
    const Productimage1 = props.image1;
    const Productimage2 = props.image2;
    const Productimage3 = props.image3;
    const [curimage, setcurimage] = useState(Productimage1);
    const hand1 = () => {
        setcurimage(Productimage1);
    }
    const hand2 = () => {
        setcurimage(Productimage2);
    }
    const hand3 = () => {
        setcurimage(Productimage3);
    }
    useEffect(() => {
        setcurimage(props.image1);
    }, [props.image1, props.image2, props.image3]);
    return (
        <div>
            <div className={css.outerimg}>
                <img src={curimage} alt="" className={css.img} />
            </div>
            <div className={css.button}>
                {
                    props.image1 === undefined ? null : <button onClick={hand1}>
                        <img src={Productimage1} alt="" className={css.imgButton} />
                    </button>
                }
                {
                    props.image2 === undefined ? null : <button onClick={hand2}>
                        <img src={Productimage1} alt="" className={css.imgButton} />
                    </button>
                }
                {
                    props.image3 === undefined ? null : <button onClick={hand3}>
                        <img src={Productimage1} alt="" className={css.imgButton} />
                    </button>
                }
            </div>
        </div>
    );
}
export default ProductImage;