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
import Content from './components/Content/Content';
import NewsContent from './components/NewsContent/NewsContent';
import MainMenu from './components/MainMenu/MainMenu';
import WhyUs from './components/WhyUs/WhyUs';


function App() {
  return (
    <>
    <Header/>
    <Content/>
    <NewsContent/>
    <MainMenu/>
    <WhyUs/>
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