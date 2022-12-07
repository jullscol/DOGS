import './App.css';
import {BrowserRouter, Route, Swich} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <switch>
        <Route exact path = '/' component={LandingPage}/>
        <Route path ='/home' component={Home}/>
      </switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
