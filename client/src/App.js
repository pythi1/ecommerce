import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Shop from './pages/shop';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';

import menbanner from "./components/Assets/men_banner.jpg";
import womenbanner from "./components/Assets/women_banner.jpg";
import kidsbanner from "./components/Assets/kids_banner.jpg";


function App() {
  return (
    <div >
      <BrowserRouter>

        <Navbar />


        <Routes>

          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={menbanner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={womenbanner} category="womens" />} />
          <Route path="/kids" element={<ShopCategory banner={kidsbanner} category="kids" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />


        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
