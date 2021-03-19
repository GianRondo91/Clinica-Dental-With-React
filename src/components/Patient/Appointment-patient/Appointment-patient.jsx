import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import HeaderPatient from '../Header-patient/Header-patient';
import { Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';

let AppointmentPatient = (props) => {
    const history = useHistory();

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    //Creo variable en react
    const [appointments, setAppointments] = useState([]);

    const getAppointments = async () => {

        let token = props.user?.token;

        if (!token) {
            return;
        }

        let result = await axios.get(`http://localhost:3001/appointments/next`, { headers: { authorization: token } });

        setAppointments(result.data);
    }

    const btnCancelAppointment = async (id) => {
        await axios.delete(`http://localhost:3001/appointments/${id}`, { headers: { authorization: props.user.token } });
        toggleCancelModal();
        getAppointments();
    }

    //Meter las opciones que tengo de empleados en el formulario de cita
    const getAppointmentCards = () => {
        let items = [];

        appointments.forEach(appointment => {
            items.push(

                <Toast>
                    <ToastHeader>
                        {appointment.reason}
                        </ToastHeader>
                    <ToastBody>
                        <Row form>
                            <Col>
                                <p>Dia:</p><em>{moment(appointment.createdAt).format('DD/MM/YYYY')}</em>
                                <p>Hora:</p><em>{moment(appointment.createdAt).format('HH:mm')}</em>
                            </Col>
                            <Col>
                                <Button color="danger" onClick={toggleCancelModal}>{buttonLabel} Cancelar</Button>
                            </Col>
                        </Row>

                        <Modal isOpen={modal} toggle={toggleCancelModal} className={className}>
                            <ModalHeader toggle={toggleCancelModal}>Cancelación</ModalHeader>
                            <ModalBody>
                                ¿Estas seguro que quieres cancelarla la cita?
                                </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => btnCancelAppointment(appointment.id)}>Aceptar</Button>{' '}
                                <Button color="secondary" onClick={toggleCancelModal}>Cancelar</Button>
                            </ModalFooter>
                        </Modal>
                    </ToastBody>
                </Toast>

            );
        });

        return items;
    };

    //Effect
    useEffect(() => {
        getAppointments();

    }, []);

    //ver si esta logeado
    if (props.user?.userType !== 'Patient') {
        setTimeout(() => {
            history.push('/');
        }, 200);

        return null;
    }

    const toggleCancelModal = () => setModal(!modal);

    return (

        <div id='appointment-patient'>
            <div className="header-patient">
                <HeaderPatient />
            </div>
            <div className='body-paient'>
                <div className="p-3 bg-info my-2 rounded">
                    <h4>Citas Pedientes</h4>
                    {getAppointmentCards()}

                </div>
            </div>
        </div>
    )

};
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
};
export default connect(mapStateToProps)(AppointmentPatient);