import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import HeaderEmployee from '../../components/Employee/Header-employee/Header-employee';

import { connect } from 'react-redux';

let Employee = (props) => {

    const history = useHistory();

    //
    const [employee, setEmployee] = useState({name: ''});

    useEffect(() => {
         const getEmployee = async() => {

            let id = props.user?.id;
            let token = props.user?.token;
    
            if(!token){
                return;
            }
    
            let result = await axios.get(`http://localhost:3001/employees/${id}`, { headers: { authorization: token } });
            
            setEmployee(result.data);
        }
        getEmployee();
    },[]);

    //ver si esta logeado
    if(props.user?.userType !== 'Employee'){
        setTimeout(()=>{
             history.push('/');
        }, 200);
 
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
                                <li>Email: {employee.email}</li>
                                <li>Dirección: {employee.address}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
};
export default connect(mapStateToProps)(Employee);