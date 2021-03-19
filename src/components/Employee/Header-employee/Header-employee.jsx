import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { LOGOUT } from '../../../redux/types/userType';

let HeaderEmployee = (props) => {

    const history = useHistory();

    const exit = () => {
        props.dispatch({ type: LOGOUT });
        history.push('/');
    }

    return (
        <div id="header" className="header-employee cell-3">
            <div className="img"></div>

            <div className="menu-list">
                <ul className="menu-list-ul">
                    <li className='menu-list-ul-li'><Link to='/employee'>Perfil</Link></li>
                    <li className='menu-list-ul-li'><Link to='/employee/data'>Mis datos</Link></li>
                    <li className='menu-list-ul-li'><Link to='/employee/calendar'>Calendario</Link></li>
                    <li className='menu-list-ul-li'><Link to='/employee'>Otro</Link></li>
                </ul>
            </div>

            <div className="buttons">
                <div className="button-exit button" onClick={exit}> Salir <FontAwesomeIcon icon={faUserTimes} /></div>
            </div>
        </div>
    )
};

export default HeaderEmployee;