import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    // constructor (props){
    //     super(props)
    //  };

    render() {
        return (
            <div id="footer" className="cell-4">
                <div className="footer-box">
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                </div>
                <div className="footer-box">
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                </div>
                <div className="footer-box">
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                </div>
                <div className="footer-box">
                    <p><FontAwesomeIcon icon={faPhoneAlt}/> 655369875</p>
                    <p><FontAwesomeIcon icon={faHome}/> Av. cataluña 123</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> tidenplus@gmail.com</p>
                </div>
            </div>
        )
    }
};

export default Footer;