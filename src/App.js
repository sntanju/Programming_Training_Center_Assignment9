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

      <Router>
      
        <Switch>

          <Route exact path="/">
          <Header path="/header"></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>

          <Route exact path="/home">
          <Header path="/header"></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>


          <Route exact path="/course">
          <Header path="/header"></Header>
            <Course></Course>
            <Footer></Footer>
          </Route>

          <Route exact path="/about">
          <Header path="/header"></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          
          <Route exact path="/contactus">
          <Header path="/header"></Header>
            <ContactUs></ContactUs>
            <Footer></Footer>
          </Route>


          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
