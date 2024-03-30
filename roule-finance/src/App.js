import './App.css';
//import Header from './layout/Header';
//import {Route, Routes} from "react-router-dom"
import Home from './app/home/home_page';
// import Stake from './app/stake/stake_page';
// import Play from './app/play/play_page';
// import Dashboard from './app/dashboard/dashboard_page';


function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stake" element={<Stake/>} />
        <Route path="/play" element={<Play/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <Home/> */}
      <Home/>
    </div>
  );
}

export default App;
