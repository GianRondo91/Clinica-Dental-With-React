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
import MedicalRecordPatient from './components/Patient/Medical-record-patient/Medical-record-aptient';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/employee' exact component={Employee}/>
          <Route path='/patient' exact component={Patient}/>
          <Route path='/patient/data' exact component={PatientData}/>
          <Route path='/patient/appointment' exact component={PatientApointment}/>
          <Route path='/patient/medical-record' exact component={MedicalRecordPatient}/>
        </Switch>
        
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
