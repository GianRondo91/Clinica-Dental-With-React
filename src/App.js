//CSS
import './css/main.css';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

//
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Imports Views
import Home from './views/Home/Home';
import Employee from './views/Employee-profile/Employee';
import Patient from './views/Patient-profile/Patient';
import Login from './views/Login/Login';
import Register from './views/Register/Register';

//Imports Components
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Header/> 
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/employee' exact component={Employee}/>
          <Route path='/patient' exact component={Patient}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
        </Switch>

        <Body/>
        
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
