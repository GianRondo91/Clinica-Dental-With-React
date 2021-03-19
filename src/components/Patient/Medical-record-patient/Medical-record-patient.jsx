import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table } from 'reactstrap';
import HeaderPatient from '../Header-patient/Header-patient';
import { connect } from 'react-redux';
import moment from 'moment';

let MrPatient = (props) => {
    
    const history = useHistory();
    
    //Creo variable en react
    const [medicalRecords, setMedicalRecords] = useState([]);

    //Meter las opciones que tengo de empleados en el formulario de cita
    const getMedicalRecordRows = () => {
        let items = [];

        medicalRecords.forEach(medicalRecord => {
            items.push(
                <tr>
                    <td>{moment(medicalRecord.createdAt).format('DD/MM/YYYY')}</td>
                    <td>{moment(medicalRecord.createdAt).format('HH:mm')}</td>
                    <td>{medicalRecord.Employee?.name} {medicalRecord.Employee?.surname1} {medicalRecord.Employee?.surname2}</td>
                    <td>{medicalRecord.allergy}</td>
                    <td className='medical-record-reason'>{medicalRecord.description}</td>
                </tr>
            );
        });
        
        return items;
    };

    //Effect
    useEffect(() => {

        const getMedicalRecords = async () => {

            let token = props.user?.token;

            if (!token) {
                return;
            }

            let result = await axios.get(`http://localhost:3001/medical-records`, { headers: { authorization: token } });

            setMedicalRecords(result.data);
        }
        getMedicalRecords();

    }, []);

    //ver si esta logeado
    if(props.user?.userType !== 'Patient'){
        setTimeout(()=>{
             history.push('/');
        }, 200);
 
        return null;
    }

    return (

        <div id='medical-record'>
            <div className="header-patient">
                <HeaderPatient />
            </div>
            <div classNam='body-medical-record'>
                <Table borderless 
                className='table-medical-record'>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Medico</th>
                            <th>Alergia</th>
                            <th className='medical-record-reason'>Motivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getMedicalRecordRows()}
                    </tbody>

                </Table>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
};
export default connect(mapStateToProps)(MrPatient);