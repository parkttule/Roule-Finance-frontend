import './App.css';
import Header from './layout/Header';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Stake from './pages/Stake';
import Play from './pages/Play';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Stake" element={<Stake/>} />
        <Route path="/Play" element={<Play/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
      <Home/> 
    </div>
  );
}

export default App;
