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
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ¿Quieres pedir una nueva cita?
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse show"     aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default AppointmentPatient;