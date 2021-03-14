import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPatient from '../Header-patient/Header-patient';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

let AppointmentPatient = (props) => {
    const history = useHistory();

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    //ver si esta logeado
    
    if (localStorage.getItem('login') !== 'Patient') {
        setTimeout(()=>{
            history.push('/');
        },0);
        
        return null;
    }


    const toggle = () => setModal(!modal);
    return (

        <div id='appointment-patient'>
            <div className="header-patient">
                <HeaderPatient />
            </div>
            <div className='body-paient'>
                <div className="p-3 bg-info my-2 rounded">
                    <h4>Citas Pedientes</h4>
                    <Toast>
                        <ToastHeader>
                            Extracción
                        </ToastHeader>
                        <ToastBody>
                            <div>
                                <Button color="danger" onClick={toggle}>{buttonLabel} Cancelar</Button>
                                <Modal isOpen={modal} toggle={toggle} className={className}>
                                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        ¿Estas seguro que quieres cancelarla la cita?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </ToastBody>
                    </Toast>
                </div>
                <div className="p-3 bg-warning my-2 rounded">
                    <h4>Citas Proximas</h4>
                    <Toast>
                        <ToastHeader>
                            Limpieza
                        </ToastHeader>
                        <ToastBody>
                            <div>
                                <Button color="danger" onClick={toggle}>{buttonLabel} Cancelar</Button>
                                <Modal isOpen={modal} toggle={toggle} className={className}>
                                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        ¿Estas seguro que quieres cancelarla la cita?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </ToastBody>
                    </Toast>
                </div>
                <div className="p-3 bg-danger my-2 rounded">
                    <h4>Citas Vencidas y canceladas</h4>
                    <Toast>
                        <ToastHeader>
                            Revision
                        </ToastHeader>
                        <ToastBody>
                            <div>
                                <Button color="danger" onClick={toggle}>{buttonLabel} Eliminar</Button>
                                <Modal isOpen={modal} toggle={toggle} className={className}>
                                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        ¿Estas seguro que quieres eliminarlo?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </ToastBody>
                    </Toast>
                </div>
            </div>
        </div>
    )

};

export default AppointmentPatient;