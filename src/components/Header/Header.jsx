import React from 'react';

class Header extends React.Component {
    // constructor (props){
    //     super(props)
    //  };

    render(){
        return(
            <div className="headerComponent">
                {/* Vista Component Header */}
                <div id="menu">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                    <div className="button1">Login</div>
                    <div className="button2">Login</div>
                </div>

            </div>
        )
    }
};

export default Header;