import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {

    const cellIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />

    const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />

    return (
        <div className="footer bg-black text-white m-3 p-3">
            
                <div className="footer">
                <p>Copyright &copy; 2021 programming training center</p>
                <p>{cellIcon}  Cell: +136038984756</p>
                <p>{emailIcon}  Mail: ptc@xyz.com</p>
                
                </div>
            
        </div>
    );
};

export default Footer;