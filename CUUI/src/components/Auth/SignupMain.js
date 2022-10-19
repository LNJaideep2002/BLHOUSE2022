import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import css from "./LoginMain.module.css";
import { Signupapi } from "../../Api/Apifunctions";
import { useDispatch } from "react-redux";
function SignMain() {
    const dispatch = useDispatch();
    const [error, seterror] = useState(false);
    const Name = useRef();
    const Phone = useRef();
    const Email = useRef();
    const Password = useRef();
    const history = useHistory();
    const Send = async (val) => {
        const data = await Signupapi(val);
        console.log(data);
        if (data.st === 400) {
            seterror(true);
        }
        if (data.st === 200) {
            dispatch({ type: "login", payload: data.data });
            history.push("/");
        }
    }
    const Submithand = (event) => {
        event.preventDefault();
        Send({ name: Name.current.value, phone: Phone.current.value, email: Email.current.value, password: Password.current.value })
    }
    return (
        <div className={css.outer}>
            <p className={css.head} style={{ margin: '2vw 0vw 1.5vw 12vw' }}>Sign up</p>
            {
                error ? <p className={css.userfound}>USER ALREADY FOUND TRY TO LOGIN !!!</p> : null
            }
            <form autoComplete="off" onSubmit={Submithand}>
                <div className={css.inputdiv}>
                    <label style={{ fontSize: '1.3vw' }}>Phone no:<input ref={Phone} style={{ margin: '0vw 0vw 0vw 1.8vw' }} className={css.input} required autoComplete="number" type="number" /></label>
                </div>
                <div className={css.inputdiv}>
                    <label style={{ fontSize: '1.3vw' }}>Email:<input ref={Email} style={{ margin: '0vw 0vw 0vw 3.5vw' }} className={css.input} required autoComplete="email" type="email" /></label>
                </div>
                <div className={css.inputdiv}>
                    <label style={{ fontSize: '1.3vw' }}>Name:<input ref={Name} style={{ margin: '0vw 0vw 0vw 3.4vw' }} className={css.input} required autoComplete="text" type="text" /></label>
                </div>
                <div className={css.inputdiv}>
                    <label style={{ fontSize: '1.3vw' }}>Password:<input ref={Password} style={{ margin: '0vw 0vw 0vw 1.7vw' }} className={css.input} required autoComplete="password" type="password" /></label>
                </div>
                <button type="submit" className={css.button}>Submit</button>

            </form>
        </div>
    )
}
export default SignMain;