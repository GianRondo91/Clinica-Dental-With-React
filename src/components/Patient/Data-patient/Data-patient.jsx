import React from 'react';
// import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import axios from 'axios';
import HeaderPatient from '../Header-patient/Header-patient';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

//Redux
import { connect } from 'react-redux';


let DataPatient = (props) => {
    const history = useHistory();


    //ver si esta logeado

    if(!props.user?.token){
       setTimeout(()=>{
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
                <div className="text-center">
                    <div className="d-flex justify-content-center"><img src="..." className="rounded" alt="..."/></div>
                    <div><Label for='patient-name'> Nombre completo Paciente</Label></div>
                    <FormGroup>
                        <Label for="exampleFile">Modificar Imagen de Perfil</Label>
                        <div><Input type="file" name="file" id="exampleFile" className="d-flex justify-content-center"></Input>
                        </div>
                    </FormGroup>
                </div>
                <Form className='form-data'>
                    <FormGroup>
                        <Label for="exampleNumber">Edad:</Label>
                        <Input
                            type="number"
                            name="age"
                            id="exampleAge"
                            placeholder="45"
                        />
                    </FormGroup>
                    <FormGroup>
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Género</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                        <label className="form-check-label" for="gridRadios1">
                                            Hombre
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        <label className="form-check-label" for="gridRadios2">
                                            Mujer
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </FormGroup>

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
            </Form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps)(DataPatient);

