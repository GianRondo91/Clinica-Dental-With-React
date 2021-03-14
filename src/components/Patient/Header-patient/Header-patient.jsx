import React from 'react';
//
import { useHistory } from 'react-router-dom';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
//
import 'bootstrap/dist/css/bootstrap.css';

let HeaderPatient = () => {

    const history = useHistory();

    const exit = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div id="header" className="header-patient cell-3">
            <div className="img"></div>

            <div className="menu-list">
                <ul className="menu-list-ul">
                <li className='menu-list-ul-li'><a href="/patient">Perfil</a></li>
                    <li className='menu-list-ul-li'><a href="/patient/data">Mis datos</a></li>
                    <li className='menu-list-ul-li'><a href="/patient/medical-record">Ficha medica</a></li>
                    <li className='menu-list-ul-li'><a href="/patient/appointments">Mis citas</a></li>
                </ul>
            </div>

            <div className="buttons">
            <div className="button-exit button" onClick={exit}> Salir <FontAwesomeIcon icon={faUserTimes} /></div>
            </div>
        </div>
    )
};

export default HeaderPatient;