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
import BurgerAdmin from './pages/Admin/BurgerAdmin/BurgerAdmin';
import AddProducts from './pages/Admin/AddProducts/AddProducts';
import UpdateProducts from './pages/Admin/UpdateProducts/UpdateProducts';
import SushiMenu from './pages/MainPage/components/SushiMenu/SushiMenu';
import MainMenu from './pages/MainPage/components/MainMenu/MainMenu';
import RollsMenu from './pages/MainPage/components/RollsMenu/RollsMenu';
import SaladsMenu from './pages/MainPage/components/SaladsMenu/SaladsMenu';
import DessertsMenu from './pages/MainPage/components/DessertsMenu/DessertsMenu';
import DrinksMenu from './pages/MainPage/components/DrinksMenu/DrinksMenu';


function App() {
  return (
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu/burger" element={<NewsContent/>}/>
        <Route path="/menu/pizza" element={<MainMenu/>}/>
        <Route path="/menu/sushi" element={<SushiMenu/>}/>
        <Route path="/menu/rolls" element={<RollsMenu/>}/>
        <Route path="/menu/salads" element={<SaladsMenu/>}/>
        <Route path="/menu/desserts" element={<DessertsMenu/>}/>
        <Route path="/menu/drinks" element={<DrinksMenu/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin/burgers" element={<BurgerAdmin/>}/>
        <Route path="/admin/add-products" element={<AddProducts/>}/>
        <Route path="/admin/update-product/:id" element={<UpdateProducts/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;