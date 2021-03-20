import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import HeaderPatient from '../Header-patient/Header-patient';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {validateField, validateFields, isValid } from '../../../uti';

import 'bootstrap/dist/css/bootstrap.css';

//Redux
import { connect } from 'react-redux';


let DataPatient = (props) => {
    const history = useHistory();

    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    // Creo el estado dataPatient
    const [data, setDataPatient] = useState({ name: '' });

    useEffect(() => {
        const getPatient = async () => {

            let id = props.user?.id;
            let token = props.user?.token;

            if (!token) {
                return;
            }

            let result = await axios.get(`http://localhost:3001/patients/${id}`, { headers: { authorization: token } });

            setDataPatient(result.data);
        }
        getPatient();
    }, []);


    const handleState = (event) => {
        let newData = { ...data, [event.target.name]: event.target.value };
        setDataPatient(newData);
  
        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });
    };

    const updatePatient = async () => {
        let validationResult = validateFields(data);

        setValidationResult({
            ...validationResult,
            validated: true
        });

        if(!isValid(validationResult)){
            return;
        };

        try {

            let id = props.user?.id;
            let token = props.user?.token;

            if (!token) {
                return;
            }

            await axios.put(`http://localhost:3001/patients/${id}`, data, { headers: { authorization: token } });

            alert('Guardado con éxito!!!')
        } catch (error) {
            console.log(error);
        }
    };

    //ver si esta logeado
    if (!props.user?.token) {
        setTimeout(() => {
            history.push('/');
        }, 200);

        return null;
    }


    return (

        <div id='data-patient'>
            <div className="header-patient">
                <HeaderPatient />
            </div>
            <div className='body-data body-data-patient'>

                <Form className='form-data'>
                    <FormGroup>
                        <Label for="name">{data.name} {data.surname1} {data.surname2}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email : </Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder={data.email}
                            onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                            <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleNumber">Telefono : </Label>
                        <Input
                            type="number"
                            name="number"
                            id="exampleNumber"
                            placeholder={data.phone}
                            onChange={handleState} valid={validationResult.validated && !validationResult.number} invalid={validationResult.validated && validationResult.number} />
                            <FormFeedback>{validationResult.number}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleDatetime">Fecha de Nacimiento : </Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value= {data.birth}
                                        onChange={handleState} valid={validationResult.validated && !validationResult.date} invalid={validationResult.validated && validationResult.date} />
                                        <FormFeedback>{validationResult.date}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for='gender'>Sexo : </Label>
                                    <Input type='select' name='gender' id='gender' onChange={handleState} valid={validationResult.validated && !validationResult.gender} invalid={validationResult.validated && validationResult.gender} >
                                        <option>{data.gender}</option>
                                        <option>Hombre</option>
                                        <option>Mujer</option>
                                    </Input>
                                    <FormFeedback>{validationResult.gender}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleAddress">Dirección : </Label>
                        <Input
                            type="text"
                            name="address"
                            id="exampleAddress"
                            placeholder={data.address}
                            onChange={handleState} valid={validationResult.validated && !validationResult.address} invalid={validationResult.validated && validationResult.address} />
                            <FormFeedback>{validationResult.address}</FormFeedback>
                    </FormGroup>
                    <Row form>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="city">Ciudad : </Label>
                                <Input
                                    type="text"
                                    name="city"
                                    id="city" 
                                    placeholder={data.city}
                                    onChange={handleState} valid={validationResult.validated && !validationResult.city} invalid={validationResult.validated && validationResult.city} />
                                    <FormFeedback>{validationResult.city}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="state">Provincia : </Label>
                                <Input
                                    type="text"
                                    name="state"
                                    id="state" 
                                    placeholder={data.state}
                                    onChange={handleState} valid={validationResult.validated && !validationResult.state} invalid={validationResult.validated && validationResult.state} />
                                    <FormFeedback>{validationResult.state}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="cp">Codigo Postal : </Label>
                                <Input
                                    type="cp"
                                    name="cp"
                                    id="cp"
                                    placeholder={data.cp}
                                    onChange={handleState} valid={validationResult.validated && !validationResult.cp} invalid={validationResult.validated && validationResult.cp} />
                                    <FormFeedback>{validationResult.cp}</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button onClick={updatePatient}>Guardar</Button>
                </Form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(DataPatient);

