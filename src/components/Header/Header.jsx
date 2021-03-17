import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';

class Header extends React.Component {
    // constructor (props){
    //     super(props)
    //  };
    state = {
        open: false,
    }

    openLogin = () => {
        this.setState({ open: !this.state.open });
    }
    openRegister = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (

            <div id="header" className="cell-3">
                <div className="img"></div>

                <div className="menu-list">
                    <ul className="menu-list-ul">
                        <li className='menu-list-ul-li'><a href="/">Home</a></li>
                        <li className='menu-list-ul-li'><a href="/promotion">Promociones</a></li>
                        <li className='menu-list-ul-li'><a href="/about-tisdenplus">Sobre Nosotros</a></li>
                        <li className='menu-list-ul-li'><a href="/contact">Contacto</a></li>
                    </ul>
                </div>
            
                <div className="buttons">
                    <Login/>
                    <Register/>
                </div>
            </div>
        );
    };
};

export default Header;