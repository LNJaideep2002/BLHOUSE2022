import React from "react";
import css from "./BottomIcon.module.css";
import cashondelivery from "../../Icons/cash-on-delivery.svg";
import securepayment from "../../Icons/secure-payment.svg";
import assuredquality from "../../Icons/assured-quality.svg";
function BottomIcon()
{
    return(
        <React.Fragment>
            <div className={css.iconsbar}>
                <div className={`${css.icon} ${css.cash}`}>
                    <img className={css.icons} src={cashondelivery} alt=""/>
                    <p>Cash On Delivery</p>
                </div>
                <div className={`${css.icon} ${css.secure}`}>
                    <img className={`${css.icons} ${css.size}`} src={securepayment} alt=""/>
                    <p>Secure payment</p>
                </div>
                <div className={`${css.icon} ${css.quality}`}>
                    <img className={`${css.icons} ${css.size}`} src={assuredquality} alt=""/>
                    <p>Quality Assured</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default BottomIcon;