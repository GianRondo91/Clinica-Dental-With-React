import React from 'react';
import HeaderEmployee from '../../components/Employee/Header-employee/Header-employee';

class Employee extends React.Component {

    // constructor(props){
    //     super(props)
    // };

    render() {
        return (
            <div className="employee">
                <div className="header-employee">
                    <HeaderEmployee/>
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
                                    <li>ID Empleado</li>
                                    <li>Especialidad</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
};

export default Employee;