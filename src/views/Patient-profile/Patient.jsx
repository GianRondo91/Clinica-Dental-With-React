import React from 'react';
import { useHistory } from 'react-router-dom';

import HeaderPatient from '../../components/Patient/Header-patient/Header-patient';

const Patient = () => {

    const history = useHistory();

    //ver si esta logeado
    if(localStorage.getItem('login') !== 'Patient'){
        history.push('/');
        return null;
    }

    return (
        <div className="patient">
            <div className="header-patient">
                <HeaderPatient />
            </div>

            <div className="box">

                <div className="card">
                    <div className="title">
                        <div className='title-name'>Nombre y Apellidos</div>
                    </div>
                    <div className="body-card">
                        <div className="card-img">
                            <div className="img"></div>
                        </div>
                        <div className="data">
                            <ul>
                                <li>DNI</li>
                                <li>Email</li>
                                <li>Teléfono</li>
                                <li>Dirección</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

};

export default Patient;