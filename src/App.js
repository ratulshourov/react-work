import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
// import About from './components/About';
import ReactDomWork from './components/ReactDomWork';
import FindDomNodeWork from './components/FindDomNodeWork';
import FormWork from './components/FormWork';
import TexAreaWork from './components/TexAreaWork';
import JsonArrayListWork from './components/JsonArrayListWork';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
        
        {/* <JsonArrayListWork></JsonArrayListWork> */}
        {/* <TexAreaWork></TexAreaWork> */}
        {/* <FormWork></FormWork> */}
        {/* <FindDomNodeWork></FindDomNodeWork> */}
        {/* <Home title="Home"></Home>
      <About title="About"></About>
      <ReactDomWork></ReactDomWork> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloads.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </Router>
  );
}

export default App;
