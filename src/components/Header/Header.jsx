import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus, faUserAlt} from '@fortawesome/free-solid-svg-icons'
//<FontAwesomeIcon icon={faUserPlus}/>

class Header extends React.Component {
    // constructor (props){
    //     super(props)
    //  };

    render() {
        return (

            <div id="header" className="cell-3">
                <div className="img"></div>

                <div className="menu-list">
                    <ul className="menu-list-ul">
                        <li className='menu-list-ul-li'><a href="">Home</a></li>
                        <li className='menu-list-ul-li'><a href="">Promociones</a></li>
                        <li className='menu-list-ul-li'><a href="">Sobre Nosotros</a></li>
                        <li className='menu-list-ul-li'><a href="">Contacto</a></li>
                    </ul>
                </div>

                <div className="buttons">
                    <div className="button1"><FontAwesomeIcon icon={faUserPlus}/></div>
                    <div className="button2"><FontAwesomeIcon icon={faUserAlt}/></div>
                </div>

            </div>

        );
    };
};

export default Header;