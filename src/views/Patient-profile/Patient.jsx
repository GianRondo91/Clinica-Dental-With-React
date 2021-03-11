import React from 'react'; 
//import './Patient.scss';

class Patient extends React.Component {

    constructor(props){
        super(props)
    };

    render(){
        return(
            <div className="patientProfile">
                Perfil del Paciente
                <div className="patientCard">
                   <div className="patientName">
                       <div className='name'>Nombre y Apellidos</div>
                    </div>
                   <div className="patientD">
                       <div className="patientImg">
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
        )

    }
};

export default Patient;