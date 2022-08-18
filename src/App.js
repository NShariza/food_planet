import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Menu from "./pages/MainPage/components/NewsList/NewsList";
import Footer from './components/Footer/Footer';
import NotFound from './pages/MainPage/components/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import NewsContent from './pages/MainPage/components/NewsContent/NewsContent';


function App() {
  return (
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu/burger" element={<NewsContent/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;