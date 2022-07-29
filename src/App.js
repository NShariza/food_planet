import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
  <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;