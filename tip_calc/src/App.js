import './App.css';
import logo from './assets/logo.svg'
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <img className='logo' src={logo} alt='logo'></img>
      <Content/>
    </div>
  );
}

export default App;
