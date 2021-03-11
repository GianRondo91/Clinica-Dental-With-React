import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    
    const history = useHistory();

    const [dataLogin, setLogin] = useState ({
        email: '', 
        password: '',
        userType: ''
    }) 

    const handleState = (event) => {
        let data = {...dataLogin, [event.target.name] : event.target.value};
        
        setLogin(data);
        //console.log('update', data);
    }

    useEffect(() => {

    }, []);

    const enter = async () => {
        let result = await axios.post('http://localhost:3001/patients/login', dataLogin);

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
 

    return(
        <div>
            <input type='email' name='email' title='email' lenght='30' onChange={handleState}></input>
            <input type='password' name='password' title='password' lenght='30' onChange={handleState}></input>
            <select name="userType" onChange={handleState}>
                <option value="">Selecciona</option>
                <option value="Patient">Patient</option>
                <option value="Employee">Employee</option>
            </select> 
            <button name='button' type='button' onClick={() => enter()}>
                SOY EL BOTÓN, PÚLSAME
            </button>

        </div>

    );

};

export default Login;