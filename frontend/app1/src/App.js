import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Products from './pages/product';
import Login from './pages/loginSignup';
import Cart from './pages/cart';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<Shopcategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<Shopcategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<Shopcategory banner={kid_banner} category="kid" />} />
            <Route path="/product/:productID" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;