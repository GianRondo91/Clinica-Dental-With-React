import React from 'react';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';

class HeaderEmployee extends React.Component {
    state = {
        open: false,
    }

    openLogin = () => {
        this.setState({ open: !this.state.open });
    }
    openRegister = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        return(
            <div id="header" className="header-employee cell-3">
                <div className="img"></div>

                <div className="menu-list">
                <ul className="menu-list-ul">
                    <li className='menu-list-ul-li'><a href="">Perfil</a></li>
                        <li className='menu-list-ul-li'><a href="">Mis datos</a></li>
                        <li className='menu-list-ul-li'><a href="">Otro</a></li>
                        <li className='menu-list-ul-li'><a href="">Calendario</a></li>
                    </ul>
                </div>

                <div className="buttons">
                <div className="button-exit button"> Salir <FontAwesomeIcon icon={faUserTimes} /></div>
                </div>
            </div>
        )
    }
};

export default HeaderEmployee;