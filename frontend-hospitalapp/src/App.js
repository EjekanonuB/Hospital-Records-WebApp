import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

// MY COMPONENTS
import Navbar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Admin from './components/Units/Admin';
import Paediatric from './components/Units/Paediatric';
import Physiotherapy from './components/Units/Physiotherapy';
import Commed from './components/Units/Commed';
import Medicine from './components/Units/Medicine';
import Surgery from './components/Units/Surgery';
import Labouratory from './components/Units/Labouratory';
import Footer from './components/Footer';
import PatientsForm from './components/Units/PatientsForm';
import PatientsForm2 from './components/Units/PatientsForm2';
import CommonLogin from './components/CommonLogin';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/commonlogin' exact component={CommonLogin} />
        <Route path='/about' component={About} />
        <Route path='/departments/admin' component={Admin} />
        <Route path='/departments/paediatric' component={Paediatric} />
        <Route path='/departments/physiotherapy' component={Physiotherapy} />
        <Route path='/departments/commed' component={Commed} />
        <Route path='/departments/medicine' component={Medicine} />
        <Route path='/departments/surgery' component={Surgery} />
        <Route path='/departments/labouratory' component={Labouratory} />
        <Route path='/contact' component={Contact} />
        <Route path='/patientsform' component={PatientsForm} />
        <Route path='/patientsform2' component={PatientsForm2} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
