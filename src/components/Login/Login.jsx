import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Login = () => {
    //Estado del Modal
    const [state, setState] = useState({
        open: false
    });

    const toggleLogin = () => {
        setState({ open: !state.open });
    }
    
    const history = useHistory();

    //Hook -> Estado del Login
    const [dataLogin, setLogin] = useState ({
        email: '', 
        password: '',
        userType: ''
    }) 


    //Handlers
    const handleState = (event) => {
        let data = {...dataLogin, [event.target.name] : event.target.value};
        setLogin(data);
        console.log(data)
    };


    //Effect
    useEffect(() => {

    }, []);

    const enter = async () => {
        let result = await axios.post('http://localhost:3001/patients/login', dataLogin);

        // //Manejo de errores
        // const [mensaje, setMensaje] = useState('');

        // setMensaje('');
        // let mensajeError = checkError(dataLogin);
        // setMensaje(mensajeError);
        
        // if(mensajeError){
        //     return;
        // }

        localStorage.setItem('dataLogin', result);
        localStorage.setItem('login', true);

       return setTimeout(() => {
            if(dataLogin.userType === 'Patient'){
                history.push('/patient')
            }else if(dataLogin.userType === 'Employee'){
                history.push('/employee')
            }else{
                alert('Eres un intruso!')
            }
        }, 5000);
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
                        <Input type='text' id='user' name='email' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Contraseña</Label>
                        <Input type='password' id='password' name='password' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='select'>Rango</Label>
                        <Input type='select' name='userType' id='selecrRango' onChange={handleState}>
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

export default Login;