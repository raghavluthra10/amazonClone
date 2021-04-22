import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header  />
        <Switch>
          <Route path='/checkout' > <h1> checkout </h1>  </Route>
          <Route path='/login' > <h1> Login </h1>  </Route>
          <Route path='/' > <h1> Home Page </h1>  </Route>
        </Switch>
      </div>
    </Router>
   );
  }

export default App;
