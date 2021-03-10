import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
    
    const [dataLogin, setLogin] = useState ({
        email: '', 
        password: ''
    }) 

    const handleState = (event) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === 'number' + event.target.value})
    }

    useEffect(() => {

    }, []);

    const enter = async () => {
        let resultado = await axios.post('http://localhost:3001/patients/login', dataLogin);
        console.log('Esto es el resultado', resultado)
        
    }
    
    console.log('Esto es el enter', enter)
    return(
        <div>
            <input type='email' name='email' title='email' lenght='30' onChange={handleState}></input>
            <input type='password' name='password' title='password' lenght='30' onChange={handleState}></input>

            <button name='button' type='button' onClick={() => enter()}>SOY EL BOTÓN, PÚLSAME</button>
        </div>
    );
}

export default Login;