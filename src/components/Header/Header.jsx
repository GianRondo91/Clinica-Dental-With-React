import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


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
                        <li>Home</li>
                        <li>Promociones</li>
                        <li>Sobre Nosotros<FontAwesomeIcon icon={faCoffee} /></li>
                        <li>Contacto</li>
                    </ul>
                </div>

                <div className="buttons">
                    <div className="button1">Login</div>
                    <div className="button2">Register <FontAwesomeIcon icon={["fal", "coffee"]}/></div>
                </div>

            </div>

        );
    };
};

export default Header;