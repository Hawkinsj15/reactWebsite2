import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Header1 from './components/Header1';
import Body from './components/Body';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div>
      <Header1/>
      <Header/>
      <Body/>
      {/* <About/> */}
    </div>
  );
}

export default App;
