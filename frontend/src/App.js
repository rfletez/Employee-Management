import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployees from './components/ListEmployees';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={ListEmployees}/>
                <Route path='/employees' component={ListEmployees}/>
                <Route path='/add-employee' component={CreateEmployee}/>
              </Switch>
            </div>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;