import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { validateField, validateFields, isValid } from '../../uti';


const NewAppointment = () => {
    //Estado del Modal
    const [state, setState] = useState({
        open: false
    });

    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
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

    //Handlers
    const handleState = (event) => {
        let data = { ...dataNewAppointment, [event.target.name]: event.target.value };
        setNewAppointment(data);
        console.log(data);

        //Actualiza el estado de validacion del input que cambio
        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });
    };


    //Effect
    useEffect(() => {
        console.log('Soy el componente montado de LOGIN!')
    }, []);

    const btnCreate = async () => {

        console.log('Estamos en create new appointment');
        //Manejo de errores
        let validationResult = validateFields(dataNewAppointment);

        //Setea el estado de validación
        setValidationResult({
            ...validationResult,
            validated: true
        });

        if (!isValid(validationResult)) {
            return;
        };

        try {

            let result = await axios.post(`http://localhost:3001/appointments/create`, dataNewAppointment);

            console.log('Dentro de enter, después de axios', dataNewAppointment);

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
                        <Label form='reason'>Motivo</Label>
                        <Input type='text' id='reason' name='reason' onChange={handleState} valid={validationResult.validated && !validationResult.reason} invalid={validationResult.validated && validationResult.reason} />
                        <FormFeedback>{validationResult.reason}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for='gender'>Médico:</Label>
                        <Input type='select' name='gender' id='gender' valid={validationResult.validated && !validationResult.gender} invalid={validationResult.validated && validationResult.gender}>

                            <option></option>
                            <option>AAA</option>
                            <option>BB</option>
                        </Input>
                        <FormFeedback>{validationResult.gender}</FormFeedback>
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
                                        valid={validationResult.validated && !validationResult.time} invalid={validationResult.validated && validationResult.time} />
                                    <FormFeedback>{validationResult.time}</FormFeedback>
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
                                        valid={validationResult.validated && !validationResult.date} invalid={validationResult.validated && validationResult.date} />
                                    <FormFeedback>{validationResult.date}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={btnCreate}>Guardar</Button>
                    <Button color='secundary' onClick={toggleNewAppointment}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default NewAppointment;