import React from 'react';
import Header from '../../components/Header/Header';

class Home extends React.Component {
    // constructor (props){
    //     super(props)
    // }

    render() {
        return (
            <div className='body-Home'>
                <div className='header-Home'>
                    <Header />
                </div>

                <div id="body">
                    <div className="img"></div>
                    <div className="connect">
                        <div className="tittle">Test COVID-19</div>
                        <div className="description">Acceso exclusivo a precios reducidos, solo para asegurados de Adelas o Sanitas</div>
                        <div className="button">Más información</div>
                    </div>

                </div>
            </div>

        )
    }
};

export default Home;