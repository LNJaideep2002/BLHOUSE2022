import React from "react";
import css from "./YourAddress.module.css";
import deleteicon from "../../Icons/deleteicon.svg";
import { useDispatch, useSelector } from "react-redux";
import { EditaddressApi } from "../../../Api/Apifunctions"
function YourAddressCard(props) {
    const dispatch = useDispatch();
    const deletehand = async () => {
        const response = await EditaddressApi({
            ID: props.ID,
            phone: props.phone
        });
        dispatch({ type: 'address', payload: response.address });
        console.log(response);
    }
    return (
        <div className={css.addresscard}>
            {
                props.ID === 0 ? <p className={css.notfound}> {props.address}</p> : <p><span className={css.address}>Address</span>{props.address}</p>
            }
            <p>{props.ID === 0 ? null : <button onClick={deletehand} className={css.button}><img style={{ marginTop: '-0.5vw', width: '1.8vw' }} src={deleteicon} /></button>}</p>
        </div>
    )
}
export default YourAddressCard;