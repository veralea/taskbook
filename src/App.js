import React from 'react';
import { BrowserRouter as Router, Route} from '../node_modules/react-router-dom';
import HomePage from './components/HomePage';
import TasksList from './components/TasksList';
import RegisterPage from './components/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  
      <Router>
       <div className="container pt-3">
         
        <Route exact={true} path='/' component={HomePage}/>
        <Route  path='/tasklist' component={TasksList} />
        <Route path='/register' component={RegisterPage}/> 
        </div>
      </Router>
  );
}

export default App;
