import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import { NewsApp } from './components/NewsApp';

function App() {
  return (
    <div className="App">
       <NewsApp/>
    </div>
  );
}

export default App;
