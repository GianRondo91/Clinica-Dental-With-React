import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import checkError from '../../uti';


const NewAppointment = () => {
    //Estado del Modal
    const [state, setState] = useState({
        open: false
    });

    const toggleNewAppointment = () => {
        setState({ open: !state.open });
    }

    const history = useHistory();

    //Hook -> Estado del NewAppointment
    const [dataNewAppointment, setNewAppointment] = useState({
        email: '',
        password: '',
        userType: '',
        simplePasswordValidation: true
    })

    const [mensaje, setMensaje] = useState('');

    //Handlers
    const handleState = (event) => {
        let data = { ...dataNewAppointment, [event.target.name]: event.target.value };
        setNewAppointment(data);
        console.log(data)
    };


    //Effect
    useEffect(() => {
        console.log('Soy el componente montado de LOGIN!')
    }, []);

    const save = async () => {

        console.log('Estamos dentro de la función enter');
        //Manejo de errores
        setMensaje('');
        let mensajeError = checkError(dataNewAppointment);
        setMensaje(mensajeError);
        console.log(mensajeError, 'Este es el mensajeError');
        console.log(mensaje, 'Este es el mensaje');
        console.log(setMensaje, 'Esto es setMensaje');

        if (mensajeError) {
            return;
        }

        let role = dataNewAppointment.userType === 'Patient' ? 'patients' : 'employees';

        try {

            let result = await axios.post(`http://localhost:3001/${role}/login`, dataNewAppointment);
            console.log('Dentro de enter, después de axios', dataNewAppointment);

            //Guardamos los datos en localStorage
            localStorage.setItem('userId', result.data.id);
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('login', dataNewAppointment.userType);

            //Redireccionamos según el perfil elegido
            return setTimeout(() => {
                if (dataNewAppointment.userType === 'Patient') {
                    history.push('/patient')
                } else if (dataNewAppointment.userType === 'Employee') {
                    history.push('/employee')
                } else {
                    alert('Eres un intruso!')
                }
            }, 2000);
        } catch (error) {
            if (error.isAxiosError & error.response.status === 403) {
                alert('El usuario no existe');
            }
        }
    };

    return (
        <div className="login">
            <div className="button-new-appointment button" onClick={toggleNewAppointment}> Pedir Cita <FontAwesomeIcon icon={faCalendarCheck} /></div>

            <Modal isOpen={state.open}>
                <ModalHeader>
                    Nueva Cita
                    </ModalHeader>
                <ModalBody>

                    <FormGroup>
                        <Label form='email'>Motivo</Label>
                        <Input type='text' id='user' name='email' onChange={handleState} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='gender'>Médico:</Label>
                        <Input type='select' name='gender' id='gender'>
                            <option></option>
                            <option>AAA</option>
                            <option>BB</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDatetime">Hora: </Label>
                                    <Input
                                        type="time"
                                        name="time"
                                        id="time"
                                        placeholder=""
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDate">Fecha: </Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="date"
                                        placeholder="date"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={save}>Guardar</Button>
                    <Button color='secundary' onClick={toggleNewAppointment}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default NewAppointment;