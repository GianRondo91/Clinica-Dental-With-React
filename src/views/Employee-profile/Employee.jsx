import React, {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderEmployee from '../../components/Employee/Header-employee/Header-employee';
import { faPortrait, faBirthdayCake, faEnvelope, faVenusMars, faMobileAlt, faHome } from '@fortawesome/free-solid-svg-icons';
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
                        <div className='title-name'>
                            <span className='saludo'>Hola,</span> {employee.name} {employee.surname1} {employee.surname2}
                        </div>
                    </div>
                    <div className="body-card">
                        <div className="card-img"></div>
                        <div className="data">
                            <ul className='data-ul'>
                                <li className='data-li'><FontAwesomeIcon icon={faPortrait} className='data-li-icon'/> {employee.id}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faBirthdayCake} className='data-li-icon'/> {employee.age}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faBirthdayCake} className='data-li-icon'/> {moment(employee.birth).format('DD/MM/YYYY')}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faVenusMars} className='data-li-icon'/> {employee.gender}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faMobileAlt} className='data-li-icon'/> {employee.phone}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faEnvelope} className='data-li-icon'/> {employee.email}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faHome} className='data-li-icon'/> {employee.address}</li>
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