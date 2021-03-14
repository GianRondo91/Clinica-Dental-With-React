import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Register = () => {
    //Estado del Modal
    const [state, setState] = useState({
        open: false
    });

    const toggleRegister = () => {
        setState({ open: !state.open });
    }

    //
        //Hooks
        const [dataRegister, setRegister] = useState ({
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
            console.log('Componente montado por primera vez, HOLA !');
        }, []);
    
        useEffect(() => {
            
        });
    
        useEffect(() => {
            return() => {
                console.log('Me he desmontado, ADIOS !');
            }
        }, []);
    
        //Handlers
        const handleState = (event) => {
            let data = {...dataRegister, [event.target.name] : event.target.value};
            setRegister(data)
            console.log('update data', dataRegister);
        }
    
    
        //Función para traer los datos de Backend
        const btnRegister = async () => {
            
    
            //console.log('Esto es el resultado', result)
            let body = {
                name: dataRegister.name, 
                surname1 : dataRegister.surname1,
                surname2 : dataRegister.surname2, 
                age: dataRegister.age, 
                gender: dataRegister.gender, 
                address: dataRegister.address,
                phone: dataRegister.phone,
                email: dataRegister.email, 
                password: dataRegister.password, 
                birth: dataRegister.birth, 
                userType: dataRegister.userType
            };
            let result = await axios.post('http://localhost:3001/patients/register', body);
            console.log('Resultado', result.data);
    

            localStorage.setItem('dataRegister', result);
            localStorage.setItem('register', true);

        
            console.log('esto es dataRegister', dataRegister);
            console.log('esto es result', result);
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
                        <Label form='email'>Nombre:</Label>
                        <Input type='text' id='user' name='name' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='surname'>Primer Apellido:</Label>
                        <Input type='text' id='user' name='surname1' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='surname'>Segundo Apellido:</Label>
                        <Input type='text' id='user' name='surname2' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='age'>Edad:</Label>
                        <Input type='number' id='user' name='age' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='date'>Fecha de nacimiento:</Label>
                        <Input type='date' name='birth' id='user' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='address'>Dirección : </Label>
                        <Input type='text' id='address' name='address' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='phone'>Teléfono : </Label>
                        <Input type='number' id='phone' name='phone' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='select'>Rango:</Label>
                        <Input type='select' name='userType' id='selecrRango' onChange={handleState}>
                            <option></option>
                            <option>Patient</option>
                            <option>Employee</option>
                        </Input>
                    </FormGroup> 
                    <FormGroup>
                        <Label for='select'>Rango:</Label>
                        <Input type='select' name='gender' id='selecrRango' onChange={handleState}>
                            <option></option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </Input>
                    </FormGroup> 
                    <FormGroup>
                        <Label form='email'>Email:</Label>
                        <Input type='text' id='user' name='email' onChange={handleState}/>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Password:</Label>
                        <Input type='password' id='password' name='password' onChange={handleState}/>
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

export default Register;