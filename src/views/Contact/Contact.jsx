import React from 'react';
import GoogleMapReact from 'google-map-react';
import Header from '../../components/Header/Header';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import LocationPin from '../../components/Location-pin/Location-Pin';

const key = 'AIzaSyD2Y3xvv9d632_fErNLelJkZ8FYoLrSmHA';

const location = {
    address: 'Clinica Dental Tisden - Wayco',
    lat: 39.4626527,
    lng: -0.3747468,
};

const initialZoom = 15;

let Contact = () => {

    return (
        <div className='contact'>
            <div className="header-home">
                <Header />
            </div>
            <div className="body-contact">
                <div className="form">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Formulario de contacto:</Label>
                        </FormGroup>

                        <FormGroup row>
                            <Label for='name' sm={2}>Nombre: </Label>
                            <Col sm={10}>
                                <Input type='name' name='name' id='name'></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for='email' sm={2}>Email: </Label>
                            <Col sm={10}>
                                <Input type='email' name='email' id='email'></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for='mobile' sm={2}>Telefono: </Label>
                            <Col sm={10}>
                                <Input type='mobile' name='number' id='number'></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Comentario:</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="exampleText" />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button>Enviar</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>

                <div className="map">
                    <div className="google-map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: key }}
                            defaultCenter={location}
                            defaultZoom={initialZoom}
                        >
                            <LocationPin
                                lat={location.lat}
                                lng={location.lng}
                                text={location.address}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;