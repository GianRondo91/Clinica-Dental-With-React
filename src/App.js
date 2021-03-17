//CSS
import './css/main.css';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Imports Views
import Home from './views/Home/Home';
import Employee from './views/Employee-profile/Employee';
import Patient from './views/Patient-profile/Patient';

//Imports Components
import Footer from './components/Footer/Footer';
import PatientData from './components/Patient/Data-patient/Data-patient';
import PatientApointment from './components/Patient/Appointment-patient/Appointment-patient';
import MedicalRecordPatient from './components/Patient/Medical-record-patient/Medical-record-patient';
import EmployeeData from './components/Employee/Data-employee/Data-employee';
import EmployeeCalendar from './components/Employee/Calendar-employee/Calendar-employee';
import Contact from './views/Contact/Contact';
import Promotion from './views/Promotion/Promotion';
import About from './views/About/About';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/promotion' exact component={Promotion}/>
          <Route path='/about-tisdenplus' exact component={About}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/patient' exact component={Patient}/>
          <Route path='/patient/data' exact component={PatientData}/>
          <Route path='/patient/appointments' exact component={PatientApointment}/>
          <Route path='/patient/medical-record' exact component={MedicalRecordPatient}/>
          <Route path='/employee' exact component={Employee}/>
          <Route path='/employee/data' exact component={EmployeeData}/>
          <Route path='/employee/calendar' exact component={EmployeeCalendar}/>
        </Switch>
        
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;