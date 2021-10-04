import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Cources from './components/Cources/Cources';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
      <Header path="/header"></Header>
        <Switch>

          <Route exact path="/courses">
            <Cources></Cources>

          </Route>

        </Switch>
      </Router>
      <Cources></Cources>
      <Footer></Footer>

    </div>
  );
}

export default App;
