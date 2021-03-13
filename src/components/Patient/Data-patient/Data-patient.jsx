import React, { useState } from 'react';
//import axios from 'axios';
import HeaderPatient from '../Header-patient/Header-patient';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

let DataPatient = () => {
    const [state, setState] = useState({
        open: false
    });

    // const toggleRegister = () => {
    //     setState({ open: !state.open });
    // }

    return (

        <div>


            <div className="header-patient">
                <HeaderPatient />
            </div>
            <div className='body-data body-data-patient'>
                <Form className='form-data'>
                    <FormGroup>
                        <Label for='patient-name'>Nombre completo Paciente</Label>
                        <Input plaintext value='Datos Modificables'></Input>
                    </FormGroup>
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
                        <Label for="examplePassword">Contraseña:</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="****"
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
                        <Label for="exampleDatetime">Fecha de Nacimiento:</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
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
                        <Col md={6}>
                            <FormGroup>
                                <Label for="ciudad">Ciudad</Label>
                                <Input 
                                type="text" 
                                name="ciudad" 
                                id="ciudad" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
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
                    <FormGroup>
                        <Label for="exampleFile">Adjuntar Imagen</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <Button>Guardar</Button>
                </Form>
            </div>
        </div>
    )

};

export default DataPatient;