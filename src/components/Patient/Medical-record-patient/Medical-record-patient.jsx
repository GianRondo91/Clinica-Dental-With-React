import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Toast, ToastBody, ToastHeader, Button, Input } from 'reactstrap';
import HeaderPatient from '../Header-patient/Header-patient';


let MrPatient = (props) => {
    
    const history = useHistory();

    const { buttonLabel } = props;
    const [show, setShow] = useState(false);

    const toggle = () => setShow(!show);


    //ver si esta logeado
    
    if (localStorage.getItem('login') !== 'Patient') {
        setTimeout(()=>{
            history.push('/');
        },0);
        
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
                            <th>Nombre</th>
                            <th>Medico</th>
                            <th className='medical-record-reason'>Motivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">24-3-2020</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td className='medical-record-reason'>Dolor de muela</td>
                        </tr>
                        <tr>
                            <th scope="row">12-05-2020</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td className='medical-record-reason'>Limpieza</td>
                        </tr>
                        <tr>
                            <th scope="row">22-05-2021</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td className='medical-record-reason'>Extracion muela del juicio</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td className='medical-record-reason'></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td className='medical-record-reason'></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td className='medical-record-reason'></td>
                        </tr>
                    </tbody>

                    <div className="d-flex justify-content-center">
                        <Button color="primary" onClick={toggle}>{buttonLabel}OTRA INFORMACIÓN DE INTERÉS</Button>
                        <br />
                        <br />
                        <Toast isOpen={show}>
                            <ToastHeader toggle={toggle}>Alergias</ToastHeader>
                            <ToastBody>
                                <Input plaintext value='medicalrecords-allergy'></Input>
                                <Button>MODIFICAR DATOS</Button>
                                {/* onClick={() => updateData()} */}
                            </ToastBody>
                        </Toast>
                    </div>

                </Table>
 

            </div>

            
        </div>
    )

};

export default MrPatient;