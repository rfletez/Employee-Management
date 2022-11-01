import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployees from './components/ListEmployees';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
            <div className='container'>
              <Switch>
                <Route path='/' component={ListEmployees}/>
                <Route path='/employees' component={ListEmployees}/>
                <ListEmployees/>
              </Switch>
            </div>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;