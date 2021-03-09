import React from 'react'; 


class Patient extends React.Component {

    constructor(props){
        super(props)
    };

    render(){
        return(
            <div className="patientProfile">
                Perfil del Paciente
                <div className="patientCard">

                </div>

            </div>
        )

    }
};

export default Patient;