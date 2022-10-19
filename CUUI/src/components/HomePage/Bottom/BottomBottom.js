import React from "react";
import css from "./BottomBottom.module.css";
import indiaicon from "../../Icons/india.svg";
import paymentsimage from "../../Icons/payments.png";
function BottomBottom()
{
    return(
        <div className={css.bottom}>
            <div className={css.indiaicon}>
                <img src={indiaicon} alt="" style={{width:'4vw',float:'left'}}/>
                <p>India(English/INR)</p>
            </div>
            <div className={css.copy}>
                <p> Copyright © 2004-2022  All rights reserved</p>
            </div>
            <div className={css.payment}>
                <img src={paymentsimage} alt=""/>
            </div>
        </div>
    );
}
export default BottomBottom;