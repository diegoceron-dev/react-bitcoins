import "./App.css";
import Navigate from "./components/Navigate";
import Home from "./pages/Home";
import About from "./pages/About";
import More from "./pages/More";
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className="full-container">
        <Navigate />
      </div>
      <div className="container">
      <Switch>
          <Route path='/about' component={About}/>
          <Route path='/more' component={More}/>
          <Route path='/' component={Home}/>
      </Switch>

      </div>
    </div>
  );
}

export default App;