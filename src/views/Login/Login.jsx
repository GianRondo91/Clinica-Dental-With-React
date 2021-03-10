import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
    
    const [dataLogin, setLogin] = useState ({
        email: '', 
        password: ''
    }) 

    const handleState = (event) => {
<<<<<<< HEAD
        setLogin({...dataLogin, [event.target.name]: event.target.value})
=======
        let data = {...dataLogin, [event.target.name] : event.target.value};
        setLogin(data)
        console.log(dataLogin);
>>>>>>> 750f025a7bd43637fc3930d233b5b4068c8285bd
    }

    useEffect(() => {

    }, []);

    const enter = async () => {
        let resultado = await axios.post('http://localhost:3001/patients/login', dataLogin);

        console.log('Esto es el resultado', resultado)
    }
    
    console.log('Esto es el enter', enter);

    return(
        <div>
            <input type='email' name='email' title='email' lenght='30' onChange={handleState}></input>
            <input type='password' name='password' title='password' lenght='30' onChange={handleState}></input>
            <button name='button' type='button' onClick={() => enter()}>SOY EL BOTÓN, PÚLSAME</button>
        </div>
    );
}

export default Login;