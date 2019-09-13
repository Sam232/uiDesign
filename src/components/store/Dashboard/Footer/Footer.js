import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className=" container-fluid ">
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                Manilla
                            </a>
                        </li>
                        <li>
                            <a href="#/" target="_Blank">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="https://www.nsano.com/wordpress/manilla-web-checkout/" target="_Blank">
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright" id="copyright">
                 &copy; { new Date().getFullYear()} All Rights Reserved
                </div>
            </div>   
        </footer>
    );
}

export default Footer;
