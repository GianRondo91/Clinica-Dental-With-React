import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { validateField, validateFields, isValid } from '../../uti';

import { connect } from 'react-redux';

const NewAppointment = (props) => {
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
        reason: '',
        idEmployee: '',
        time: '',
        date: ''
    })

    //Creo variable en react
    const [employees, setEmployees] = useState([]);

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

    //Meter las opciones que tengo de empleados en el formulario de cita
    const getEmployeeOptions = () => {
        let items = [];

        employees.forEach(employee => {
            items.push(<option key={employee.id} value={employee.id}>{employee.name}</option>);
        });
        
        return items;
    };

    //Effect
    useEffect(() => {

        const getEmployees = async () => {

            let token = props.user?.token;

            if (!token) {
                return;
            }

            let result = await axios.get(`http://localhost:3001/employees`, { headers: { authorization: token } });

            setEmployees(result.data);
        }
        getEmployees();

    }, []);

    const btnCreate = async () => {

        //Manejo de errores
        let errors = validateFields(dataNewAppointment);

        //Setea el estado de validación
        setValidationResult({
            ...errors,
            validated: true
        });

        if (!isValid(errors)) {
            return;
        };

        try {

            dataNewAppointment.idPatient = props.user?.id;

            await axios.post(`http://localhost:3001/appointments`, dataNewAppointment,{ headers: { authorization: props.user?.token } });

            alert('Cita creada');

            //Cierro modal al guardar
            toggleNewAppointment();

        } catch (error) {
            console.log(error);
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
                        <Label form='reason'>Motivo : </Label>
                        <Input type='text' id='reason' name='reason' onChange={handleState} valid={validationResult.validated && !validationResult.reason} invalid={validationResult.validated && validationResult.reason} />
                        <FormFeedback>{validationResult.reason}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for='employee'>Médico : </Label>
                        <Input type='select' name='idEmployee' id='gender'  onChange={handleState}  valid={validationResult.validated && !validationResult.idEmployee} invalid={validationResult.validated && validationResult.idEmployee}>
                            <option>Seleccione su medico favorito</option>
                            {getEmployeeOptions()}
                        </Input>
                        <FormFeedback>{validationResult.idEmployee}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDatetime">Hora : </Label>
                                    <Input
                                        type="time"
                                        name="time"
                                        id="time"
                                        placeholder=""
                                        onChange={handleState}  valid={validationResult.validated && !validationResult.time} invalid={validationResult.validated && validationResult.time} />
                                    <FormFeedback>{validationResult.time}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDate">Fecha : </Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="date"
                                        placeholder="date"
                                        onChange={handleState}  valid={validationResult.validated && !validationResult.date} invalid={validationResult.validated && validationResult.date} />
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

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(NewAppointment);