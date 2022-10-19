import React from "react";
import css from "./Similar.module.css";
import Card from "../HomePage/Card";
function Similar()
{
    const arrow="->";
    return(
        <div>
            <p className={css.head}>Similar Design's {arrow}</p>
            <div className={css.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    );
}
export default Similar;