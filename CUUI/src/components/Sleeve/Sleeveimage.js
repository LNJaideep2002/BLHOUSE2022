import React from "react";
import css from "./Sleeve.module.css";
import { useHistory } from "react-router-dom"
function Sleeveimage(props) {
    const history = useHistory();
    const sleevehand = () => {
        props.dispatch({ type: "currentbag", payload: { st: 1, image: props.image, name: props.name, ID: props.ID } });
        history.push("/address");
    }
    return (
        <button onClick={sleevehand} className={css.button}><img className={css.img} src={props.img} /></button>
    )
}
export default Sleeveimage;