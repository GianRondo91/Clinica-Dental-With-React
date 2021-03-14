import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPatient from '../../components/Patient/Header-patient/Header-patient';
import axios from 'axios';


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
   });

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
                        <div className='title-name'>{patient.name}{patient.surname1}{patient.surname2}</div>
                    </div>
                    <div className="body-card">
                        <div className="card-img">
                            <div className="img">Imagen</div>
                        </div>
                        <div className="data">
                            <ul>
                                <li>Id: {patient.id}</li>
                                <li>Email: {patient.email}</li>
                                <li>Edad: {patient.age}</li>
                                <li>Género: {patient.gender}</li>
                                <li>Teléfono: {patient.phone}</li>
                                <li>Dirección: {patient.address}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

};

export default Patient;