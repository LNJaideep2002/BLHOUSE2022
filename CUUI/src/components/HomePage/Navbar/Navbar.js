import React from "react";
import nav from "./Nav.module.css";
import accounticon from "../../Icons/account_circle_3.svg";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
    const history = useHistory();
    const loginst = useSelector(state => state.login);
    const Signuphand = () => {
        history.push("/signup");
    }
    const Loginhand = () => {
        history.push("/login");
    }
    const AccountHand = () => {
        history.push("/account");
    }
    const login = loginst;
    return (
        <React.Fragment>
            <div className={nav.navbar}>
                <ul>
                    <li className={nav.name}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Name</Link></li>
                    <li className={nav.links}><Link to="/blouse" style={{ textDecoration: 'none', color: 'white' }}>Blouse</Link></li>
                    <li className={nav.links}><Link to="/lace" style={{ textDecoration: 'none', color: 'white' }}>Lace</Link></li>
                    <li className={nav.links}><Link to="/latkan" style={{ textDecoration: 'none', color: 'white' }}>Latkan</Link></li>
                    <li className={nav.links}><Link to="/patches" style={{ textDecoration: 'none', color: 'white' }}>Patches</Link></li>
                    <li className={nav.links}><Link to="/wishlist" style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link></li>
                    {login === 1 ? <li className={nav.links}><Link to="/bag" style={{ textDecoration: 'none', color: 'white' }}>Bag</Link></li> : <p style={{ display: 'none' }}>bag</p>}
                    <li>

                        {login === 1 ? <p style={{ display: 'none' }}>bag</p> : <button onClick={Signuphand} className={`${nav.users} ${nav.but}`}>Sign up</button>}
                    </li>
                    <li>
                        {login === 1 ? <button className={`${nav.useri} ${nav.but}`}><img style={{ width: '3vw' }} onClick={AccountHand} src={accounticon} alt="" /></button> : <button onClick={Loginhand} className={`${nav.userl} ${nav.but}`}>Login</button>}
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
export default Navbar;