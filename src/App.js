import Portfolio from "./components/Portfolio/Portfolio"
import './App.css';
import Home from "./components/Header/Header";
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/portfolio" component={Portfolio}/>
     
     


    </Router>



  );
}

export default App;
