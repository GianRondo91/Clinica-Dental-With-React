import React from 'react';

class Header extends React.Component {
    // constructor (props){
    //     super(props)
    //  };

    render() {
        return (

            <div id="header" className="cell-3">
                <div className="img">
                    Logo
                    </div>

                <div className="menu-list">
                    <ul className="menu-list-ul">
                        <li>Home</li>
                        <li>Promociones</li>
                        <li>Sobre Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                </div>

                <div className="buttons">
                    <div className="button1">Login</div>
                    <div className="button2">Logout</div>
                </div>

            </div>

        );
    };
};

export default Header;