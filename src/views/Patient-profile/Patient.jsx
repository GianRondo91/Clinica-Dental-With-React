import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPatient from '../../components/Patient/Header-patient/Header-patient';
import axios from 'axios';

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait, faBirthdayCake, faEnvelope, faVenusMars, faMobile, faHome } from '@fortawesome/free-solid-svg-icons';

const Patient = () => {

    const history = useHistory();

    const [patient, setPatient] = useState({name: ''});


    useEffect(() => {
        const getPatient = async() => {

           let id = localStorage.getItem('userId');
   
           let token = localStorage.getItem('token');
   
           if(!token){
               return;
           }
   
           let result = await axios.get(`http://localhost:3001/patients/${id}`, { headers: { authorization: token } });
           
           setPatient(result.data);
       }
       getPatient();
   },[]);

    //ver si esta logeado
    if (localStorage.getItem('login') !== 'Patient') {
        setTimeout(()=>{
            history.push('/');
        },0);
        
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
                        <div className='title-name'><span className='saludo'>Hola,</span> {patient.name} {patient.surname1} {patient.surname2}</div>
                    </div>
                    <div className="body-card">
                        <div className="card-img">
                            <div className="img">Imagen</div>
                        </div>
                        <div className="data">
                            <ul className='data-ul'>
                                <li><FontAwesomeIcon icon={faPortrait} /> {patient.id}</li>
                                <li><FontAwesomeIcon icon={faBirthdayCake} /> {patient.age}</li>
                                <li><FontAwesomeIcon icon={faVenusMars} /> {patient.gender}</li>
                                <li><FontAwesomeIcon icon={faMobile} /> {patient.phone}</li>
                                <li><FontAwesomeIcon icon={faEnvelope} /> {patient.email}</li>
                                <li><FontAwesomeIcon icon={faHome} /> {patient.address}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

};

export default Patient;