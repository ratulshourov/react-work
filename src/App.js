import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ReactDomWork from './components/ReactDomWork';
import FindDomNodeWork from './components/FindDomNodeWork';
import FormWork from './components/FormWork';
import TexAreaWork from './components/TexAreaWork';
function App() {
  return (
    <div className="App">
      <TexAreaWork></TexAreaWork>
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
  );
}

export default App;
