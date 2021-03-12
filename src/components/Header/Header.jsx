import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Header extends React.Component {
    // constructor (props){
    //     super(props)
<<<<<<< HEAD
    //  };
    state = {
        open: false,
    }

    openModal = () => {
        this.setState({ open: !this.state.open });
    }
=======

    // };

>>>>>>> e37563bd8c650ba2a8bb5af5b2e08c3dfa510f61

    render() {
        return (

            <div id="header" className="cell-3">
                <div className="img"></div>

                <div className="menu-list">
                    <ul className="menu-list-ul">
                        <li className='menu-list-ul-li'><a href="">Home</a></li>
                        <li className='menu-list-ul-li'><a href="">Promociones</a></li>
                        <li className='menu-list-ul-li'><a href="">Sobre Nosotros</a></li>
                        <li className='menu-list-ul-li'><a href="">Contacto</a></li>
                    </ul>
                </div>

                <div className="buttons">
<<<<<<< HEAD
                    <div className="button-register button" onClick={this.openModal}>Registarse <FontAwesomeIcon icon={faUserPlus} /></div>
                    <div className="button-login button" onClick={this.openModal}>Acceder <FontAwesomeIcon icon={faUserAlt} /></div>
                    <div>
                        <Modal isOpen={this.state.open}>
                            <ModalHeader>
                                Iniciar Sesion
                            </ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label form='user'>user</Label>
                                    <Input type='text' id='user'/>
                                </FormGroup>
                                <FormGroup>
                                    <Label form='pwd'>user</Label>
                                    <Input type='text' id='pwd'/>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color='primary'>ini</Button>
                                <Button color='secundary' onClick={this.openModal}>Exi</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
=======
                    <div className="button-register button" >Registarse <FontAwesomeIcon icon={faUserPlus}/></div>
                    <div className="button-login button" >Acceder <FontAwesomeIcon icon={faUserAlt}/></div>
>>>>>>> e37563bd8c650ba2a8bb5af5b2e08c3dfa510f61
                </div>
            </div>
        );
    };
};

export default Header;