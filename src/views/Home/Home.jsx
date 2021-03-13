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
                        <div className="tittle">Let´s Connect</div>
                        <div className="description">fehdgdfhsfdhfdhd</div>
                        <div className="button">GET IN TOUCH</div>
                    </div>

                </div>
            </div>

        )
    }
};

export default Home;