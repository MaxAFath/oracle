import logo from './logo.svg';
import './App.css';
import Auth from "../../utils/auth";
import Nav from './components/Nav/index';
import Search from './components/Search/index';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <main>
        <Search></Search>
      </main>
    </div>
  );
}

export default App;
