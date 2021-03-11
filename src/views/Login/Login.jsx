import React, { useEffect, useState, useHistory } from 'react';
import axios from 'axios';

const Login = (props) => {
    
    const history = useHistory();

    const [dataLogin, setLogin] = useState ({
        email: '', 
        password: ''
    }) 

    const handleState = (event) => {
        let data = {...dataLogin, [event.target.name] : event.target.value};
        setLogin(data)
        console.log('update', dataLogin);
    }

    useEffect(() => {

    }, []);

    const enter = async () => {
        let result = await axios.post('http://localhost:3001/patients/login', dataLogin);

        //console.log('Esto es el resultado', result)

        localStorage.setItem('dataLogin', result);
        localStorage.setItem('login', true);

        console.log('esto es localstorage', localStorage);
        console.log({props});

    //    setTimeout(() => {
    //        const redic = () => {
    //            if(value === 'Patient'){
    //                 return history.push('/patient')
    //            }else{
    //                 return history.push('/employee')
    //            }
    //        }
    //    }, 5000);
    //     const history = useHistory();

    //     const redic = () => {
    //         if(props.value == 'Patient'){
    //             return history.push('/')
    //         }else{
    //             return history.push('/Employee')
    //         } 
    //     };

    };
 

    return(
        <div>
            <input type='email' name='email' title='email' lenght='30' onChange={handleState}></input>
            <input type='password' name='password' title='password' lenght='30' onChange={handleState}></input>
            <select name="userType" onChange={handleState}>
                <option value="Patient">{props.value}Patient</option>
                <option value="Employee">Employee</option>
            </select>
            <button name='button' type='button' onClick={() => enter()}>
                SOY EL BOTÓN, PÚLSAME
            </button>

        </div>

    );

};

export default Login;