import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

//Redux
import { connect } from 'react-redux';
import { REGISTER } from '../../redux/types/userType';

const Register = (props) => {
    //Estado del Modal
    const [state, setState] = useState({
        open: false
    });

    //
    const [validationResult, setValitationResult] = useState({
        validated: false,
        name: null
    });

    const toggleRegister = () => {
        setState({ open: !state.open });
    }

    //Hooks
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

    //
    const validate = (inputName, inputValue) => {
        //
        switch (inputName) {
            case 'name':
            case 'surname1':
            case 'surname2':
            case 'age':
            case 'birth':
            case 'address':
            case 'phone':
            case 'gender':
            case 'userType':
            case 'email':
            case 'password':
                return /^\s*$/.test(inputValue) ? 'Campo vacio' : null;
            default:
                break;
        }
    };

    //
    const checkErrors = (datosCheck) => {
        let results = {};

        //
        for (let field in datosCheck) {
            //
            results[field] = validate(field, datosCheck[field]);
        }

        return results;
    };

    //Handlers
    const handleState = (event) => {

        //
        setValitationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validate(event.target.name, event.target.value)
        });

        let data = { ...dataRegister, [event.target.name]: event.target.value };
        setRegister(data)
        console.log('update data', dataRegister);
    }


    //Función para traer los datos de Backend
    const btnRegister = async () => {
        console.log('entre');
        setValitationResult({
            ...checkErrors(dataRegister),
            validated: true
        });

        let role = dataRegister.userType === 'Patient' ? 'patients' : 'employees';

        let result = await axios.post(`http://localhost:3001/${role}/register`, dataRegister);
        console.log('Resultado', result.data);

        
        // localStorage.setItem('dataRegister', result);
        // localStorage.setItem('register', true);

<<<<<<< HEAD
            // localStorage.setItem('dataRegister', result);
            // localStorage.setItem('register', true);
=======
>>>>>>> 802830361f2cee34f8977ce871e245cdd907663e

        //Mandamos los datos de register por Redux a store
        props.dispatch({ type: REGISTER, payload: result });



<<<<<<< HEAD

=======
>>>>>>> 802830361f2cee34f8977ce871e245cdd907663e
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
                        <Label for='age'>Edad:</Label>
                        <Input type='number' id='age' name='age' onChange={handleState} valid={validationResult.validated && !validationResult.age} invalid={validationResult.validated && validationResult.age} />
                        <FormFeedback>{validationResult.age}</FormFeedback>
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