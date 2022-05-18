import React from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import DetailProduct from "./Components/DetailProduct";
import Cart from "./Components/Cart";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DataProvider from "./Components/DataProvider";
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
import Login from "./Components/Login";
import WomenProducts from "./Components/WomenProducts";
import DetailWomenProduts from "./Components/DetailWomenProduts";
import kidProduct from "./Components/kidProduct";





function App() {
  return (
    <div className="App">
   <DataProvider>
   <Router>
     <Header/>
     {/* <Home/> */}
     <section>
      
          <Routes>
            <Route path="products" element={<Products/>} />
            <Route path="detailproduct/:id" element={<DetailProduct/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="login" element={<Login/>} />
            <Route path="womenproducts" element={<WomenProducts/>} />
            <Route path="kidproducts" element={<kidProduct/>} />
            <Route path="womendetailproduct/:id" element={<DetailWomenProduts/>} />



          </Routes>
      
     </section>
     {/* <Footer/> */}
     </Router>
   </DataProvider>

    </div>
  );
}

export default App;
