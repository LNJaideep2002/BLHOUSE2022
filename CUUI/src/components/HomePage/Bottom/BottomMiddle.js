import React from "react";
import css from "./BottomMiddle.module.css";
import facebookicon from "../../Icons/facebook.svg";
import instagramicon from "../../Icons/instagram.svg";
import twittericon from "../../Icons/twitter.svg";
import appleicon from "../../Icons/app-store-icon.svg";
import googleicon from "../../Icons/google-play-icon.svg";
function BottomMiddle()
{
    return(
        <React.Fragment>
            <div className={css.content} >
                <div className={css.contentali}>
                    <p>CONTACT US</p>
                    <ul>
                        <li>Email:ljaideep2002@gmail.com</li>
                        <li>Mobile/Whatsapp: 7395920689</li>
                        <li>Address: 3/30A,Kumaran nagar,padi,chennai-50 </li>
                        <li>MON-SAT : 9AM-10PM</li>
                    </ul>
                </div>
                <div className={css.contentali}>
                    <p>Help</p>
                    <ul>
                        <li>Track Your Order</li>
                        <li>FAQS</li>
                        <li>Terms {`$`} Conditions</li>
                        <li>Shipping Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className={css.contentali}>
                    <p>SOCIAL LINKS</p>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',width:'fit-content'}}>
                        <div className={css.icons} >
                                <img src={facebookicon} alt=""/>
                        </div>
                        <div className={css.icons}>
                            <img src={instagramicon} alt=""/>
                        </div>
                        <div className={css.icons}>
                            <img src={twittericon} alt=""/>
                        </div>
                      
                    </div>
                    <img src={appleicon} className={css.appleicon} alt="" />
                    <img src={googleicon} className={css.googleicon} alt="" />
                </div>
            </div>
        </React.Fragment>
    );
}
export default BottomMiddle;