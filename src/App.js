import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Login from './Component/Login';
import { Routes, Route } from 'react-router-dom';
import Details from './Component/Details';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Details' element={<Details />} />
      </Routes>

    </>
  );
}

export default App;
