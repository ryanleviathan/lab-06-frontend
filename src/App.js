import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Generate from './Generate.js'
import Create from './Create.js';
import Detail from './Detail.js';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => 
                  <Home {...routerProps} />} 
              />
              <Route 
                  path="/garage" 
                  exact
                  render={(routerProps) => 
                  <Generate {...routerProps} />} 
              />
              <Route 
                  path="/add" 
                  exact
                  render={(routerProps) => 
                  <Create {...routerProps} />} 
              />
              <Route 
                  path="/detail/:car" 
                  exact
                  render={(routerProps) => 
                  <Detail {...routerProps} />} 
              />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
