import React from 'react';

class Body extends React.Component {
    // constructor (props){
    //     super(props)
    //  };

    render(){
        return(
            <div id="body">
                <div className="img"></div>
                <div className="connect">
                    <div className="tittle">Let´s Connect</div>
                    <div className="description"></div>
                    <div className="button">GET IN TOUCH</div>
                </div>
            </div>
        )
    }
};

export default Body;