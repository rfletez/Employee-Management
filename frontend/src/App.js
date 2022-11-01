import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployees from './components/ListEmployees';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <ListEmployees/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;