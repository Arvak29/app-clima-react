import "./navbar.css"
import React from 'react';

const Navbar = () => {
    return (
        <navbar>
            <header>
                <div className="logo-container">
                    <img alt="logo" className="logo-icon" src={`icons/logo.png`} />
                </div>
            </header>
        </navbar>
    );
}
export default Navbar;