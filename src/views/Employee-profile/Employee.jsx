import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import HeaderEmployee from '../../components/Employee/Header-employee/Header-employee';

let Employee = () => {

    const history = useHistory();

    //
    const [employee, setEmployee] = useState({name: ''});

    useEffect(() => {
         const getEmployee = async() => {

            let id = localStorage.getItem('userId');
    
            let token = localStorage.getItem('token');
    
            if(!token){
                return;
            }
    
            let result = await axios.get(`http://localhost:3001/employees/${id}`, { headers: { authorization: token } });
            
            setEmployee(result.data);
        }
        getEmployee();
    });

    //ver si esta logeado
    if (localStorage.getItem('login') !== 'Employee') {
        setTimeout(()=>{
            history.push('/');
        },0);
        
        return null;
    }

    return (
        <div className="employee">
            <div className="header-employee">
                <HeaderEmployee />
            </div>

            <div className="box">
                <div className="card">
                    <div className="title">
                        <div className='title-name'>{employee.name} {employee.surname1} {employee.surname2}</div>
                    </div>
                    <div className="body-card">
                        <div className="card-img">
                            <div className="img">Imagen</div>
                        </div>
                        <div className="data">
                            <ul>
                                <li>Id: {employee.id}</li>
                                <li>Edad: {employee.age}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Employee;