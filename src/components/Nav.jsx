import React from "react";
import '../styles/Nav.css'

function Nav() {
    return(
        <nav className="nav">
            <h4>TP2</h4>
            <div>
                <button className="signup">SignUp</button>
                <button className="login">LogIn</button>
            </div>
        </nav>
    )
}

export default Nav;