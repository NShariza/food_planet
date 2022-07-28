import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Logo from './pages/Logo/Logo';
import Main from './pages/Main/Main';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import Contacts from './pages/Contacts/Contacts';
import Phone from './pages/Phone/Phone';
import ShopCart from './pages/ShopCart/ShopCart';
import Intro from './pages/Intro/Intro';
import News from './components/News/News';
import BurgerMenu from './pages/BurgerMenu/BurgerOne';


function App() {
  return (
    <>
    <Header/>
    <Intro/>
    <News/>
    <BurgerMenu/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/phone" element={<Phone/>}/>
        <Route path="/cart" element={<ShopCart/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
