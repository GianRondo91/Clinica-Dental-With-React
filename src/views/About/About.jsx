import React from 'react';
import Header from '../../components/Header/Header';

let About = () => {
    return (
        <div id='about'>
            <div className="header-home">
                <Header />
            </div>
            <div className="body-about">
                <div class="card mb-3">
                    <img class="card-img-top"/>
                    <div class="card-body">
                        <h1 class="card-title">Tu sonrisa es la nuestra desde 1993</h1>
                        <p class="card-text"></p>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img className= "img-profesional"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Nuestros profesionales</h3>
                                <p class="card-text">El equipo de Tisden Plus cuenta con el personal más preparado para atender tus necesidades y sacarte una sonrisa</p>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img className= "img-install"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Nuestras instalaciones</h3>
                                <p class="card-text">Contamos con las últimas teconologías y avances en el campo de la odontología en el centro de Valencia</p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img className= "img-about"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Te ayudamos a dibujar tu sonrisa</h3>
                                <p class="card-text">Nuestros profesionales te brindarán un trato individualizado y un plan personalizado basado en tratamientos mínimamente invasivos y en estética dental</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default About;