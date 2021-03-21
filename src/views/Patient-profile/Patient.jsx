import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPatient from '../../components/Patient/Header-patient/Header-patient';
import axios from 'axios';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait, faBirthdayCake, faEnvelope, faVenusMars, faMobileAlt, faHome } from '@fortawesome/free-solid-svg-icons';

//Redux
import { connect } from 'react-redux';


const Patient = (props) => {

    const history = useHistory();

    // Creo el estado patient
    const [patient, setPatient] = useState({name: ''});


    useEffect(() => {
        const getPatient = async() => {

            let id = props.user?.id;
            let token = props.user?.token;
   
           if(!token){
               return;
           }
   
           let result = await axios.get(`http://localhost:3001/patients/${id}`, { headers: { authorization: token } });
           
            result.data.age = Math.floor(moment().diff(moment(result.data.birth),'years'));
           setPatient(result.data);
        }
       getPatient();
   },[]);

    //ver si esta logeado
    if(!props.user?.id){
        setTimeout(()=>{
             history.push('/');
        }, 200);
 
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
                        <div className='title-name'>
                            <span className='saludo'>Hola,</span> {patient.name} {patient.surname1} {patient.surname2}
                            </div>
                    </div>
                    <div className="body-card">
                        <div className="card-img">
                        </div>
                        <div className="data">
                            <ul className='data-ul'>
                                <li className='data-li'><FontAwesomeIcon icon={faPortrait} className='data-li-icon'/> {patient.id}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faBirthdayCake} className='data-li-icon'/> {patient.age}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faBirthdayCake} className='data-li-icon'/> {moment(patient.birth).format('DD/MM/YYYY')}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faVenusMars} className='data-li-icon'/> {patient.gender}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faMobileAlt} className='data-li-icon'/> {patient.phone}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faEnvelope} className='data-li-icon'/> {patient.email}</li>
                                <li className='data-li'><FontAwesomeIcon icon={faHome} className='data-li-icon'/> {patient.address}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps)(Patient);