import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {

    //Hooks
    const [dataRegister, setRegister] = useState ({
        name: '', 
        surname1: '', 
        surname2: '', 
        age: '', 
        gender: '', 
        address: '',
        phone: '',
        email: '', 
        password: ''
    });
    
    const [mensaje, setMensaje] = useState('');
    

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
        // console.log('update data', dataRegister);
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
            password: dataRegister.password
        };
        let result = await axios.post('http://localhost:3001/patients/register', body);
        console.log('Resultado', result.data);

        localStorage.setItem('dataRegister', result);
        localStorage.setItem('register', true);
        console.log('esto es localstorage', localStorage);
    }


    return(
        <div>
            <pre>{JSON.stringify(dataRegister, null, 2)}</pre>
            <div>
                <p>Name:</p>
                <input type='text' name='name' title='name' lenght='30' onChange={handleState}></input>
                <p>Surname1:</p>
                <input type='text' name='surname1' title='surname1' lenght='30' onChange={handleState}></input>
                <p>Surname2:</p>
                <input type='text' name='surname2' title='surname2' lenght='30' onChange={handleState}></input>
                <p>Age:</p>
                <input type='number' name='age' title='age' lenght='10' onChange={handleState}></input>
                <p>Gender:</p>
                <input type='text' name='gender' title='gender' lenght='20' onChange={handleState}></input>
                <p>Address:</p>
                <input type='address' name='address' title='address' lenght='50' onChange={handleState}></input>
                <p>Phone:</p>
                <input type='phone' name='phone' title='phone' lenght='30' onChange={handleState}></input>
                <p>Email:</p>
                <input type='email' name='email' title='email' lenght='30' onChange={handleState}></input>
                <p>Password:</p>
                <input type='password' name='password' title='password' lenght='30' onChange={handleState}></input>
            </div>
           

            <button name='button' type='button' onClick={() => btnRegister()}>SOY EL BOTÓN, PÚLSAME</button>
        </div>
    );
};

export default Register;