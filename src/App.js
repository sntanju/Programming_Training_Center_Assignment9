import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Cources from './components/Cources/Cources';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Course from './components/Course/Course';
import NotFound from './components/NotFound/NotFound'
import ContactUs from './ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      {/* Routing Starts Here(Used More Than Four Route) */}
      <Router>
      <Header path="/header"></Header>
        <Switch>

          <Route exact path="/">        
            <Home></Home>           
          </Route>

          <Route exact path="/home">       
            <Home></Home>          
          </Route>


          <Route exact path="/course">         
           <Course></Course>            
          </Route>

          <Route exact path="/about">          
            <About></About>          
          </Route>
          
          <Route exact path="/contactus">        
            <ContactUs></ContactUs>           
          </Route>

          <Route exact path="*">          
            <NotFound></NotFound>           
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      

    </div>
  );
}

export default App;
