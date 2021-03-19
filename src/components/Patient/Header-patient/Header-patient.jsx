import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import NewAppointment from '../../New-appointment/New-appointment';
import { connect } from 'react-redux';
import { LOGOUT } from '../../../redux/types/userType';


let HeaderPatient = (props) => {

    const history = useHistory();

    const exit = () => {
        props.dispatch({ type: LOGOUT });
        history.push('/');
    }

    return (
        <div id="header" className="header-patient cell-3">
            <div className="img"></div>

            <div className="menu-list">
                <ul className="menu-list-ul">
                    <li className='menu-list-ul-li'><Link to='/patient'>Perfil</Link></li>
                    <li className='menu-list-ul-li'><Link to='/patient/data'>Mis datos</Link></li>
                    <li className='menu-list-ul-li'><Link to='/patient/medical-record'>Ficha medica</Link></li>
                    <li className='menu-list-ul-li'><Link to='/patient/appointments'>Mis citas</Link></li>
                </ul>
            </div>

            <div className="buttons">
                <div className="button-exit button" onClick={exit}> Salir <FontAwesomeIcon icon={faUserTimes} /></div>
                <NewAppointment/>
            </div>
        </div>
    )
};

export default connect(HeaderPatient);