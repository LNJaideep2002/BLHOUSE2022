import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import css from "./LoginMain.module.css";
import facebookicon from "../Icons/facebook2.svg";
import googleicon from "../Icons/google.svg";
import { Loginapi } from "../../Api/Apifunctions";
import { useSelector, useDispatch } from "react-redux";
function LoginMain() {
    const [error, seterror] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const Redux = useSelector((val) => val);
    const email = useRef();
    const password = useRef();
    const Send = async (val) => {
        const data = await Loginapi(val);
        if (data.st === 200) {
            dispatch({ type: "login", payload: data.data });
            history.goBack();
            console.log(data);
        }
        if (data.st == 400) {
            seterror(true);
        }
    }
    const FormSubmit = (event) => {
        event.preventDefault();
        Send({ email: email.current.value, password: password.current.value, face: false });
    }
    const responseFacebook = (object) => {
        // console.log(object);
        // console.log(object.name);
        // console.log(object.email);
        // console.log(object.id);
        Send({ name: object.name, email: object.email, password: object.id, face: true });
    }
    const responseGoogle = (object) => {
        // console.log(object.profileObj);
        // console.log(object.profileObj.name);
        // console.log(object.profileObj.email);
        // console.log(object.profileObj.googleId);
        Send({ name: object.profileObj.name, email: object.profileObj.email, password: object.profileObj.googleId, face: true });
    }
    return (
        <div className={css.outer}>
            <p className={css.head}>Login</p>
            {
                error ? <p style={{ margin: '0vw 0vw 1vw 8vw' }} className={css.userfound}>EMAIL AND PASSWORD NOT MATCHING!!!</p> : null
            }
            <button className={css.facebut}>
                <img className={css.icon} src={facebookicon} alt="" />
                <FacebookLogin
                    appId="1307020483131966"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass={css.face}
                />
            </button>
            <div style={{ margin: '1.5vw 0vw 1vw 11.5vw' }}>
                <GoogleLogin
                    clientId="1071015693920-nsceg5cs0r8ui8k4d9tiae165ces0cmj.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className={css.face}
                />
            </div>
            <p className={css.sub}>Or Login With Email</p>
            <form onSubmit={FormSubmit}>
                <div className={css.inputdiv}>
                    <label style={{ fontSize: '1.3vw' }}>Email:<input ref={email} style={{ margin: '0vw 0vw 0vw 3vw' }} autoComplete="off" className={css.input} type="email" /></label>
                </div>
                <div className={css.inputdiv}>
                    <label style={{ fontSize: '1.3vw' }}>Password:<input ref={password} className={css.input} type="password" /></label>
                </div>
                <button type="submit" className={css.button}>Submit</button>
            </form>
        </div>
    )
}
export default LoginMain;