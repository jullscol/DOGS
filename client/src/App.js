import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import DogCreate from './components/DogCreate'
/* import {DogDetail} from '/components/DogDetail'; */

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component={LandingPage}/>
        <Route path = '/home' component={Home}/>
        {/* <Route path ="/home/:id" component={DogDetail} /> */}
        <Route path ="/dogs" component={DogCreate} /> 

        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
