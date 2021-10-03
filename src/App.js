import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Cources from './components/Cources/Cources';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cources></Cources>
      <Footer></Footer>
    </div>
  );
}

export default App;
