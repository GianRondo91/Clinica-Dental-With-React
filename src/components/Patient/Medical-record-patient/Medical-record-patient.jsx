import React from 'react';
import { Table } from 'reactstrap';
import HeaderPatient from '../Header-patient/Header-patient';


let MrPatient = () => {

    return (

        <div>
            <div className="header-patient">
                <HeaderPatient />
            </div>
            <div classNam='body-medical-record'>
                <Table borderless className='table-medical-record'>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Medico</th>
                            <th>Motivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )

};

export default MrPatient;