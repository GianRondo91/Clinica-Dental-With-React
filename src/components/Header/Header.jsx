import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCalendar } from '@fortawesome/free-solid-svg-icons'
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
                        <li className='menu-list-ul-li'>Home</li>
                        <li className='menu-list-ul-li'>Promociones</li>
                        <li className='menu-list-ul-li'>Sobre Nosotros</li>
                        <li className='menu-list-ul-li'>Contacto</li>
                    </ul>
                </div>

                <div className="buttons">
                    <div className="button1">Entrar</div>
                    <div className="button2">Registrarme</div>
                </div>

            </div>

        );
    };
};

export default Header;