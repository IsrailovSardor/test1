import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homee from "./pages/Home/Homee"
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Test from './Test';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/tasks" element={<Homee/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
