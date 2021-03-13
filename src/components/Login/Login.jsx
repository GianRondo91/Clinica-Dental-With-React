import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import checkError from '../../uti';


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

    //const [mensaje, setMensaje] = useState('');

    //Handlers
    const handleState = (event) => {
        let data = {...dataLogin, [event.target.name] : event.target.value};
        
        setLogin(data);
        //console.log('update', data);
    };

    //Effect
    useEffect(() => {
        console.log('Soy el componente montado de LOGIN!')
    }, []);

    const enter = async () => {
        
        console.log('Estamos dentro de la función enter');
        //Manejo de errores
        // setMensaje('');
        // let mensajeError = checkError(dataLogin);
        // setMensaje(mensajeError);
        
        // if(mensajeError){
        //     return;
        // }

        let result = await axios.post('http://localhost:3001/patients/login', dataLogin);
        console.log('Dentro de enter, después de axios', dataLogin);

        //Guardamos los datos en localStorage
        localStorage.setItem('dataLogin', result);
        localStorage.setItem('login', true);

        //Redireccionamos según el perfil elegido
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
                        <Input type='text' id='user' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>user</Label>
                        <Input type='password' id='password' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='select'>Rango</Label>
                        <Input type='select' name='select' id='selecrRango' onChange={handleState}>
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