import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import axios from 'axios';
import HeaderPatient from '../Header-patient/Header-patient';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

let DataPatient = () => {
    const history = useHistory();

    //ver si esta logeado

    if (localStorage.getItem('login') !== 'Patient') {
        setTimeout(() => {
            history.push('/');
        }, 0);

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
                        <Label for="exampleEmail">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="@"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleNumber">Telefono:</Label>
                        <Input
                            type="number"
                            name="number"
                            id="exampleNumber"
                            placeholder="611616161515"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleNumber">Edad:</Label>
                                    <Input
                                        type="number"
                                        name="age"
                                        id="exampleAge"
                                        placeholder=""
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for='gender'>Sexo:</Label>
                                    <Input type='select' name='gender' id='gender'>
                                        <option></option>
                                        <option>Hombre</option>
                                        <option>Mujer</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDatetime">Fecha de Nacimiento:</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">Dirección</Label>
                        <Input
                            type="text"
                            name="address"
                            id="exampleAddress"
                            placeholder="Av.cataluya 1234" />
                    </FormGroup>
                    <Row form>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="ciudad">Ciudad</Label>
                                <Input
                                    type="text"
                                    name="ciudad"
                                    id="ciudad" />
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="provincia">Provincia:</Label>
                                <Input
                                    type="text"
                                    name="provincia"
                                    id="provincia" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="cp">Codigo Postal:</Label>
                                <Input
                                    type="cp"
                                    name="cp"
                                    id="cp" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button>Guardar</Button>
                </Form>
            </div>
        </div>
    )

};

export default DataPatient;