import React from 'react';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let Promotion = () => {
    return (
        <div className='Promotion'>
            <div className="header-home">
                <Header />
            </div>
            <div className="body-Promotion">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card-promotion">
                            <div class="promo ortodoncia"></div>
                            <div class="card-body-promotion">
                                <h5 class="card-title">Presupuestos personalizados en Ortodoncias</h5>
                                <p class="card-text">La ortodoncia es una especialidad de la odontología que corrige la malposición de los dientes para colocarlos en su lugar correcto</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-promotion">
                        <div class="promo smile"></div>
                        <div class="card-body-promotion">
                            <h5 class="card-title">Descuentos en Estética Dental</h5>
                            <p class="card-text">Se trata de un tratamiento mínimamente invasivo, con altas propiedades estéticas y muy predecible</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-promotion">
                        <div class="promo protesis"></div>
                        <div class="card-body-promotion">
                            <h5 class="card-title">Protesis Dental</h5>
                            <p class="card-text">Las prótesis dentales son los dientes postizos que sustituyen a los dientes naturales. Cuando falta uno o varios dientes</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-promotion">
                        <div class="promo kid"></div>
                        <div class="card-body-promotion">
                            <h5 class="card-title">Odontología Infantil</h5>
                            <p class="card-text">En septiembre, con la vuelta al cole, descuentos en el presupuesto de ortodoncias para los más peques de la familia.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion;