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
import Header from './components/Header/Header';
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
        </Switch>
        
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
