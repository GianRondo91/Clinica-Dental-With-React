import React from 'react';
//
import { useHistory } from 'react-router-dom';
import HeaderEmployee from '../Header-employee/Header-employee';
//big-calendar
import { Calendar, momentLocalizer } from 'react-big-calendar/dist/react-big-calendar';
import moment from 'moment/dist/moment';
import { connect } from 'react-redux';

require('moment/dist/locale/es.js');

let CalendarEmployee = (props) => {
    const history = useHistory();

    //ver si esta logeado
    if(props.user?.userType !== 'Employee'){
        setTimeout(()=>{
             history.push('/');
        }, 200);
 
        return null;
    }

    //Configurar el localizador
const localizer = momentLocalizer(moment);


//array de eventos
const myEventsList = [{
    title: "Presentation",
    start: new Date('2021-03-14 10:22:00'),
    end: new Date('2021-03-14 10:42:00')
},
{
    title: "Class",
    start: new Date('2021-03-16 09:22:00'),
    end: new Date('2021-03-16 14:42:00')
}]

    return (
        <div className='calendar-employee'>
            <div className="header-employee">
                <HeaderEmployee />
            </div>

            <div className="body-calendar-employee">
                {/* Agrega el componente BigCalendar, */}
                <div style={{ height: `${400}px` }} className="bigCalendar-container">
                    <Calendar
                        localizer={localizer}
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                        messages={{
                            next: "sig",
                            previous: "ant",
                            today: "Hoy",
                            month: "Mes",
                            week: "Semana",
                            day: "Día"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
};
export default connect(mapStateToProps)(CalendarEmployee);