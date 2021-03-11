import React from 'react'; 
//import './Employee.scss';

class Employee extends React.Component {

    // constructor(props){
    //     super(props)
    // };

    render(){
        return(
            <div className="employeeProfile">
                Perfil del Empleado
                <div className="employeeCard">
                    <div className="employeeName">
                        <div className='name'>Nombre y Apellidos</div>
                        </div>
                    <div className="employeeD">
                        <div className="employeeImg">
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
        )

    }
};

export default Employee;