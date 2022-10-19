import React, { useEffect, useRef, useState } from "react";
import css from "./Address.module.css";
import Addresscard from "./Addresscard";
import { AddAddressapi } from "../../Api/Apifunctions";
function Addressmain(props) {
    const [visible, setvisible] = useState(0);
    const doorno = useRef();
    const streetname = useRef();
    const location = useRef();
    const pincode = useRef();
    const city = useRef()
    const Send = async (val) => {
        const response = await AddAddressapi(val);
        setvisible(0);
        props.dispatch({ type: "addaddress", payload: { address: response.Data } });
        console.log(response);
    }
    const newaddress = (event) => {
        event.preventDefault();
        Send({ userID: props.userID, doorno: doorno.current.value, streetname: streetname.current.value, location: location.current.value, city: city.current.value, pincode: pincode.current.value })
    }
    const addnewaddress = () => {
        setvisible(1);
    }
    const addnewaddresscancel = () => {
        setvisible(0);
    }
    useEffect(() => {

    }, [props.address]);
    return (
        <div className={css.outer}>
            <p className={css.head} style={{ margin: '1vw 0vw 2vw 18.5vw' }}>Your's Address</p>
            {props.address[0].ID === 0 ? <div className={css.addresscard}>
                <p className={css.notfound}>No Address's Found </p>
            </div> : props.address.map((val) => (<Addresscard history={props.history} dispatch={props.dispatch} address={val.address} ID={val.ID} key={val.ID} />))}
            <div>
                <button onClick={addnewaddress} className={css.button} style={{ backgroundColor: 'black', color: 'white', margin: '0vw 0vw 1vw 20vw' }}>Add New Address</button>
                {visible === 0 ? null :
                    <div className={css.newaddress}>
                        <form onSubmit={newaddress}>
                            <div className={css.inputdiv}>
                                <label style={{ fontSize: '1.3vw' }}>Door no:<input ref={doorno} style={{ margin: '0vw 0vw 0vw 2.5vw' }} className={css.input} type="text" /></label>
                            </div>
                            <div className={css.inputdiv}>
                                <label style={{ fontSize: '1.3vw' }}>Street Name:<input ref={streetname} style={{ margin: '0vw 0vw 0vw 0.3vw' }} className={css.input} type="text" /></label>
                            </div>
                            <div className={css.inputdiv}>
                                <label style={{ fontSize: '1.3vw' }}>Location:<input ref={location} style={{ margin: '0vw 0vw 0vw 2.3vw' }} className={css.input} type="text" /></label>
                            </div>
                            <div className={css.inputdiv}>
                                <label style={{ fontSize: '1.3vw' }}>City:<input ref={city} style={{ margin: '0vw 0vw 0vw 4.4vw' }} className={css.input} type="text" /></label>
                            </div>
                            <div className={css.inputdiv}>
                                <label style={{ fontSize: '1.3vw' }}>Pincode:<input ref={pincode} style={{ margin: '0vw 0vw 0vw 2.5vw' }} className={css.input} type="number" /></label>
                            </div>
                            <button onClick={addnewaddresscancel} className={css.button} style={{ backgroundColor: 'black', color: 'white', margin: '0vw 0vw 1vw 15vw' }}>Cancel</button>
                            <button type="submit" className={css.button} style={{ backgroundColor: 'black', color: 'white', margin: '0vw 0vw 1vw 4vw' }}>Submit</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}
export default Addressmain;