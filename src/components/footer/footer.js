import "./footer.css"
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div>
                    <h2>
                        Pronostico Royal
                    </h2>
                </div>
                <div>
                    <div>
                        <address>
                            #2911, Giordano Bruno,<br />
                            Santiago,<br />
                            Chile.
                        </address>
                    </div>
                    <div>
                        <div>
                            <p id="rights_reserved">© 2023, Pronostico Royal, Inc.</p>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;