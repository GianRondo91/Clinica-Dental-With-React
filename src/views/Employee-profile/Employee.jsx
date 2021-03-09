import React from 'react'; 

class Employee extends React.Component {

    constructor(props){
        super(props)
    };

    render(){
        return(
            <div className="employeeProfile">
                Perfil del Empleado
                <div className="employeeCard">

                </div>
            </div>
        )

    }
};

export default Employee;