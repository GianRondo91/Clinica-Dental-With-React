import React from 'react';
//
import { useHistory } from 'react-router-dom';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes,  faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
//
import 'bootstrap/dist/css/bootstrap.css';

let HeaderPatient = () => {

    const history = useHistory();

    const exit = () => {
        localStorage.clear();
        history.push('/');
    }

    let state = {
        open: false,
    }

    const openLogin = () => {
        setState({ open: !state.open });
    }
    const openRegister = () => {
        setState({ open: !state.open });
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
                <div className="button-new-appointment button"> Pedir Cita <FontAwesomeIcon icon={faCalendarCheck} /></div>
            </div>
        </div>
    )
};

export default HeaderPatient;