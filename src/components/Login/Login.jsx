import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import checkError from '../../uti';

//Redux
import { LOGIN } from '../../redux/types/userType';
import { connect } from 'react-redux';


const Login = (props) => {
    //Estado del Modal
    const [state, setState] = useState({
        open: false
    });

    const toggleLogin = () => {
        setState({ open: !state.open });
    }

    const history = useHistory();

    //Hook -> Estado del Login
    const [dataLogin, setLogin] = useState({
        email: '',
        password: '',
        userType: '',
        simplePasswordValidation: true
    })

    const [mensaje, setMensaje] = useState('');

    //Handlers
    const handleState = (event) => {
        let data = { ...dataLogin, [event.target.name]: event.target.value };
        setLogin(data);
        console.log(data)
    };


    //Effect
    useEffect(() => {
        console.log('Soy el componente montado de LOGIN!')
    }, []);

    const enter = async () => {

        console.log('Estamos dentro de la función enter');
        //Manejo de errores
        setMensaje('');
        let mensajeError = checkError(dataLogin);
        setMensaje(mensajeError);
        console.log(mensajeError, 'Este es el mensajeError');
        console.log(mensaje, 'Este es el mensaje');
        console.log(setMensaje, 'Esto es setMensaje');

        if (mensajeError) {
            return;
        }

        let role = dataLogin.userType === 'Patient' ? 'patients' : 'employees';


        try {

            let result = await axios.post(`http://localhost:3001/${role}/login`, dataLogin);
            console.log('Dentro de enter, después de axios', dataLogin);

            //Guardamos los datos en localStorage
            // localStorage.setItem('userId', result.data.id);
            // localStorage.setItem('token', result.data.token);
            // localStorage.setItem('login', dataLogin.userType);


            //Mandamos los datos de Login por Redux a store
            props.dispatch({type: LOGIN, payload: result});


            //Redireccionamos según el perfil elegido
            return setTimeout(() => {
                if (dataLogin.userType === 'Patient') {
                    history.push('/patient')
                } else if (dataLogin.userType === 'Employee') {
                    history.push('/employee')
                } else {
                    alert('Eres un intruso!')
                }
            }, 2000);
        } catch (error) {
            if(error.isAxiosError & error.response.status === 403){
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
                        <Input type='text' id='user' name='email' onChange={handleState} />
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Contraseña</Label>
                        <Input type='password' id='password' name='password' onChange={handleState} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='select'>Rango</Label>
                        <Input type='select' name='userType' id='selecrRango' onChange={handleState}>
                            <option></option>
                            <option>Patient</option>
                            <option>Employee</option>
                        </Input>
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

export default connect()(Login);