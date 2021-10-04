import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhoneSquareAlt, faEnvelopeOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css'

const ContactUs = () => {
    //Imported Font Awesome Icon And Used Here
    const cellIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
    
    const homeIcon = <FontAwesomeIcon icon={faHome} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const instaIcon = <FontAwesomeIcon icon={faInstagramSquare} />
    

    return (
        <div className="contact">
            <h3> <small>{homeIcon}</small> Our Address</h3>
            <p> {cellIcon} +136038984756</p>
            <p>{emailIcon} ptc@xyz.com</p>
            <br />
            <hr />
            <br />
            <h3>Follow Us</h3>
            <p><b>Visit our social network channels and follow us to stay in touch with latest news.</b></p>
            <p>{facebookIcon} fb.com/PTCbd</p>
            <p>{twitterIcon} twitter.com/PTCbd</p>
            <p>{instaIcon} instagram.com/PTCbd</p>
        </div>
    );
};

export default ContactUs;