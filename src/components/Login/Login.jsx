import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label,FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {validateField, validateFields, isValid } from '../../uti';

//Redux
import { LOGIN } from '../../redux/types/userType';
import { connect } from 'react-redux';


const Login = (props) => {
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

    const toggleLogin = () => {
        setState({ open: !state.open });
    }

    const history = useHistory();

    //Hook -> Estado del Login
    const [dataLogin, setLogin] = useState({
        email: '',
        password: '',
        userType: 'Patient'
    })

    //Handlers
    const handleState = (event) => {
        let data = { ...dataLogin, [event.target.name]: event.target.value };
        setLogin(data);
        // console.log(data)

        //
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

    const enter = async () => {
        console.log('Estamos dentro de la función enter');

        let validationResult = validateFields(dataLogin);

        //Setea el estado de validación
        setValidationResult({
            ...validationResult,
            validated: true
        });

        if(!isValid(validationResult)){
            return;
        };

        let role = dataLogin.userType === 'Patient' ? 'patients' : 'employees';


        try {

             //Redireccionamos según el perfil elegido
    

                if (dataLogin.userType === 'Patient') {
                    console.log('estamos en el if patient')
                    let result = await axios.post(`http://localhost:3001/patients/login`, dataLogin);
                    console.log(result.data, 'esto es result.data')

                    props.dispatch({ type: LOGIN, payload: result.data })
                    history.push('/patient');
                } else {
                    let result = await axios.post(`http://localhost:3001/employees/login`, dataLogin);
                    

                    props.dispatch({ type: LOGIN, payload: result.data })
                    //console.log('estamos en el if employee')
                    history.push('/employee');
                } 

           
        } catch (error) {
            // if(error.isAxiosError & error.response.status === 403){
                alert('El usuario no existe');
            
        }
    };

    return (
        <div className="login">

            <div className="button-login button" onClick={toggleLogin}>Acceder <FontAwesomeIcon icon={faUserAlt} /></div>

            <Modal isOpen={state.open}>
                <ModalHeader>
                    Iniciar Sesion
                    </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label form='email'>Email</Label>
                        <Input type='text' id='user' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                        <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Contraseña</Label>
                        <Input type='password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                        <FormFeedback>{validationResult.password}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='select'>Rango</Label>
<<<<<<< HEAD
                        <Input type='select' name='userType' id='selecrRango' onChange={handleState} valid={validationResult.validated && !validationResult.userType} invalid={validationResult.validated && validationResult.userType}>     
=======
                        <Input type='select' name='userType' id='selecrRango' onChange={handleState} valid={validationResult.validated && !validationResult.userType} invalid={validationResult.validated && validationResult.userType}>
                            <option></option>
>>>>>>> 263d2159eb06b61d25c28ed7de04cbfb7e7a8106
                            <option>Patient</option>
                            <option>Employee</option>
                        </Input>
                        <FormFeedback>{validationResult.userType}</FormFeedback>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={enter}>Entrar</Button>
                    <Button color='secundary' onClick={toggleLogin}>Salir</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

const mapDipatchToProps = state => {
    return {
        user: state.userReducer.user
    }
};

export default connect(mapDipatchToProps)(Login);
