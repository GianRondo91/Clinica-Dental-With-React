import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {validateField,validateFields, isValid}  from '../../uti';

//Redux
import { connect } from 'react-redux';
import { REGISTER } from '../../redux/types/userType';

const Register = (props) => {
    //Estado del Modal
    const [state, setState] = useState({
        open: false
    });

    //Creo el estado que se llama validationResult donde se mantiene el estado de validez de 
    //cada uno de los componentes del formulario y una propiedad (validated) que indica 
    //si ya se intento enviar el formulario
    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    //Cabia el estado de abierto del modal
    const toggleRegister = () => {
        setState({ open: !state.open });
    }

    //dataRegister -> Crea el estado del formulario
    const [dataRegister, setRegister] = useState({
        name: '',
        surname1: '',
        surname2: '',
        age: '',
        gender: '',
        address: '',
        phone: '',
        birth: '',
        email: '',
        password: '',
        userType: ''
    });

    //const [mensaje, setMensaje] = useState('');


    //UseEffect
    useEffect(() => {
        console.log('Componente montado en el registro!');
    }, []);

    useEffect(() => {

    });

    useEffect(() => {
        return () => {
            console.log('Me he desmontado, ADIOS !');
        }
    }, []);

    

    //Handlers
    const handleState = (event) => {

        //
        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });

        let data = { ...dataRegister, [event.target.name]: event.target.value };
        setRegister(data)
        console.log('update data', dataRegister);
    }


    //Función para traer los datos de Backend
    const btnRegister = async () => {
        console.log('entre');

        let validationResult = validateFields(dataRegister);

        //Setea el estado de validación
        setValidationResult({
            ...validationResult,
            validated: true
        });

        if(!isValid(validationResult)){
            return;
        };

        let role = dataRegister.userType === 'Patient' ? 'patients' : 'employees';

        let result = await axios.post(`http://localhost:3001/${role}/register`, dataRegister);
        console.log('Resultado', result.data);


        //Mandamos los datos de register por Redux a store
        props.dispatch({ type: REGISTER, payload: result });

        setState({ open: false });

        console.log('esto es props', props);
    };


    return (
        <div className="register">

            <div className="button-register button" onClick={toggleRegister}>Registarse <FontAwesomeIcon icon={faUserPlus} /></div>

            <Modal isOpen={state.open}>
                <ModalHeader>
                    Registrarse
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for='name'>Nombre:</Label>
                        <Input type='text' id='name' name='name' onChange={handleState} valid={validationResult.validated && !validationResult.name} invalid={validationResult.validated && validationResult.name} />
                        <FormFeedback>{validationResult.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='surname1'>Primer Apellido:</Label>
                        <Input type='text' id='surname1' name='surname1' onChange={handleState} valid={validationResult.validated && !validationResult.surname1} invalid={validationResult.validated && validationResult.surname1} />
                        <FormFeedback>{validationResult.surname1}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='surname2'>Segundo Apellido:</Label>
                        <Input type='text' id='surname2' name='surname2' onChange={handleState} valid={validationResult.validated && !validationResult.surname2} invalid={validationResult.validated && validationResult.surname2} />
                        <FormFeedback>{validationResult.surname2}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='birth'>Fecha de nacimiento:</Label>
                        <Input type='date' name='birth' id='birth' onChange={handleState} valid={validationResult.validated && !validationResult.birth} invalid={validationResult.validated && validationResult.birth} />
                        <FormFeedback>{validationResult.birth}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='address'>Dirección : </Label>
                        <Input type='text' id='address' name='address' onChange={handleState} valid={validationResult.validated && !validationResult.address} invalid={validationResult.validated && validationResult.address} />
                        <FormFeedback>{validationResult.address}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='phone'>Teléfono : </Label>
                        <Input type='number' id='phone' name='phone' onChange={handleState} valid={validationResult.validated && !validationResult.phone} invalid={validationResult.validated && validationResult.phone} />
                        <FormFeedback>{validationResult.phone}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='gender'>Sexo:</Label>
                        <Input type='select' name='gender' id='gender' onChange={handleState} valid={validationResult.validated && !validationResult.gender} invalid={validationResult.validated && validationResult.gender} >
                            <option></option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                            <option>Indefinido</option>
                        </Input>
                        <FormFeedback>{validationResult.gender}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='userType'>Rango:</Label>
                        <Input type='select' name='userType' id='userType' onChange={handleState} valid={validationResult.validated && !validationResult.userType} invalid={validationResult.validated && validationResult.userType} >
                            <option></option>
                            <option>Patient</option>
                            <option>Employee</option>
                        </Input>
                        <FormFeedback>{validationResult.userType}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='email'>Email:</Label>
                        <Input type='text' id='email' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                        <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Password:</Label>
                        <Input type='password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                        <FormFeedback>{validationResult.password}</FormFeedback>
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={btnRegister}>Registrarse</Button>
                    <Button color='secundary' onClick={toggleRegister}>Salir</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default connect()(Register);