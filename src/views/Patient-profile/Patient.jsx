import React from 'react';
import HeaderPatient from '../../components/Patient/Header-patient/Header-patient';

class Patient extends React.Component {

    // constructor(props){
    //     super(props)
    // };

    render() {
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
                                <div className="img">Imagen</div>
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

    }
};

export default Patient;