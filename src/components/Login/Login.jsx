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
        userType: ''
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
<<<<<<< HEAD
        //Manejo de errores
        setMensaje('');
        // let mensajeError = checkError(dataLogin);
        // setMensaje(mensajeError);
=======
>>>>>>> 9c1f594d09917abcf559695e64825d4f17f43707

        let validationResult = validateFields(dataLogin);

        //Setea el estado de validación
        setValidationResult({
            ...validationResult,
            validated: true
        });

<<<<<<< HEAD
        // if (mensajeError) {
        //     return;
        // }
=======
        if(!isValid(validationResult)){
            return;
        };
>>>>>>> 9c1f594d09917abcf559695e64825d4f17f43707

        let role = dataLogin.userType === 'Patient' ? 'patients' : 'employees';


        try {

            let result = await axios.post(`http://localhost:3001/${role}/login`, dataLogin);
        

<<<<<<< HEAD
            //Guardamos en un objeto los datos del token y id y los de dataLogin(correo, contraseña...)
           

            //Mandamos los datos de Login por Redux a store
            props.dispatch({type: LOGIN, payload: result.data});

            console.log(props.payload, 'esto es el payload');


            
            //console.log(validation, 'esto es validation')

            console.log(result.data, 'ESTO ES RESULT.DATA')

            console.log('Dentro de enter, después de dispatch, esto es DATALOGIN', dataLogin);

       

            console.log(state, 'esto es state')
            //console.log(state.user, 'STATE.USER')
=======
            result.data.userType = dataLogin.userType;

            //Mandamos los datos de Login por Redux a store
            props.dispatch({ type: LOGIN, payload: result.data });
>>>>>>> 9c1f594d09917abcf559695e64825d4f17f43707

            console.log(props, 'esto son las PROPS');

            //Redireccionamos según el perfil elegido
            return setTimeout(() => {

                if (dataLogin.userType === 'Patient') {
                    // console.log('estamos en el if patient')
                    history.push('/patient');
                } else if (dataLogin.userType === 'Employee') {
                    // console.log('estamos en el if employee')
                    history.push('/employee');
                } else {
                    alert('Eres un intruso!');
                }
            }, 200);
        } catch (error) {
            // if(error.isAxiosError & error.response.status === 403){
            if(error.isAxiosError & error.response?.status === 403){
                alert('El usuario no existe');
            }
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
                        <Input type='select' name='userType' id='selecrRango' onChange={handleState} valid={validationResult.validated && !validationResult.userType} invalid={validationResult.validated && validationResult.userType}>

                            <option></option>
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

<<<<<<< HEAD
const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user, 
        validation: state.userReducer.payload
    }

}



export default connect(mapStateToProps)(Login);
=======
export default connect()(Login);
>>>>>>> 9c1f594d09917abcf559695e64825d4f17f43707
