import React from "react";
import css from "./Address.module.css";
import leftarrow from "../Icons/leftarrow.svg";
function Addresscard(props) {
    const proceedhand = async () => {
        props.dispatch({ type: "curaddress", payload: { ID: props.ID } });
        props.history.push("/checkout");
    }
    return (
        <div className={css.addresscard}>
            <p><span className={css.address}>Address:</span>{props.address}</p>
            <button onClick={proceedhand} className={css.button}><img src={leftarrow} style={{ width: '3vw' }} alt="" /></button>
        </div>
    )
}
export default Addresscard;