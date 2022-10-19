import React, { useEffect, useState } from "react";
import css from "./Sleeve.module.css";
import { GetSleeveapi } from "../../Api/Apifunctions";
import Sleeveimage from "./Sleeveimage";
import { useDispatch, useSelector } from "react-redux";
function Sleevemain(props) {
    const Redux = useSelector((val) => val);
    console.log(Redux);
    const dispatch = useDispatch();
    const [sleeves, setsleeves] = useState(0);
    const Fetch = async () => {
        const response = await GetSleeveapi();
        console.log(response);
        setsleeves(response.Data);
    }
    useEffect(() => {
        Fetch();
    }, []);
    return (
        <div className={css.outer}>
            <p className={css.head}>Sleeve Styles</p>
            <p className={css.subhead}>Select a style {"-->"}</p>
            <div className={css.card}>
                {sleeves !== 0 ? sleeves.map((val) => (<Sleeveimage image={props.image} key={val.ID} name={Redux.currentbag.name} dispatch={dispatch} img={"http://localhost:6500/images/Sleeve/" + val.image + ".png"} ID={val.ID} />)) : null}
            </div>
        </div>
    )
}
export default Sleevemain;