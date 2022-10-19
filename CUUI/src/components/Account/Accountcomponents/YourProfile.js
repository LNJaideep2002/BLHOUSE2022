import React, { useState } from "react";
import css from "./YourProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { EditprofileApi } from "../../../Api/Apifunctions";
import { useHistory } from "react-router-dom";
function YourProfile() {
    const Redux = useSelector((val) => (val));
    const dispatch = useDispatch();
    const [name, setname] = useState(Redux.name);
    const [email, setemail] = useState(Redux.email);
    const [phone, setphone] = useState(Redux.phone);
    const [submit, setsubmit] = useState(false);
    const [edit, setedit] = useState(false);
    const history = useHistory();
    const Send = async (val) => {
        const response = await EditprofileApi(val)
        console.log(response);
    }
    const Submithand = (event) => {
        event.preventDefault();
        Send({
            name,
            phone,
            email,
            ID: Redux.ID
        });
        dispatch({
            type: "update", payload: {
                name,
                phone,
                email
            }
        });
        history.push("/account")
        setsubmit(true);
        edit ? setedit(false) : setedit(true);
    }
    const Edithand = () => {
        setsubmit(false);
        edit ? setedit(false) : setedit(true);
    }
    const Cancelhand = () => {
        setemail(Redux.email);
        setname(Redux.name);
        setphone(Redux.phone);
        edit ? setedit(false) : setedit(true);
    }
    const namehand = (val) => {
        setname(val.target.value);
    }
    const emailhand = (val) => {
        setemail(val.target.value);
    }
    const phonehand = (val) => {
        setphone(val.target.value);
    }
    return (
        <div className={css.outer}>
            <p className={css.head}>Your Profile</p>
            {submit ? <p className={css.success}>Updated Successfully</p> : null}
            <form autoComplete="off" onSubmit={Submithand}>
                <div className={css.outer1}>
                    <div className={css.value}>
                        <p className={css.label}>Name :</p>
                        <input className={css.input} onChange={namehand} autoComplete="text" type="text" value={name} disabled={edit ? "" : "disabled"} />
                    </div>
                    <div className={css.value}>
                        <p className={css.label}>Email :</p>
                        <input className={css.input} onChange={emailhand} autoComplete="email" value={email} type="email" disabled={edit ? "" : "disabled"} />
                    </div>
                    <div className={css.value}>
                        <p className={css.label} style={{ margin: '0.5vw 0vw 0vw 1vw' }}>Phone No :</p>
                        <input className={css.input} onChange={phonehand} autoComplete="number" value={phone} type="number" disabled={edit ? "" : "disabled"} />
                    </div>
                    <div>
                        {edit ? <button type="button" className={css.button} style={{ float: 'left', margin: '-0.5vw 0vw 1vw 10vw' }} onClick={Cancelhand}>Cancel</button> : <button type="button" className={css.button} style={{ margin: '-0.5vw 0vw 1vw 12.5vw' }} onClick={Edithand}>Edit</button>}
                        {edit ? <button className={css.button} style={{ margin: '-0.5vw 0vw 1vw 2vw' }} type="submit" >Submit</button> : null}
                    </div>
                </div>
            </form>
        </div>
    )
}
export default YourProfile;