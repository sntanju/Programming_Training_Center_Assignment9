import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTablet, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {

    const cellIcon = <FontAwesomeIcon icon={faTablet} />

    const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />

    return (
        <div className="footer bg-black text-white m-3 p-3">
            
                <div className="footer">
                <p> &copy; programming training center</p>
                <p>{cellIcon}  Cell: +136038984756</p>
                <p>{emailIcon}  Mail: ptc@xyz.com</p>
                
                </div>
            
        </div>
    );
};

export default Footer;