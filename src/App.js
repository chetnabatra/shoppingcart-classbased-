import React, { Component } from "react";

import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";

import "./App.css";

import Home from "./components/Home";
import Header from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <>
       
     <Header />
       
     <Routes>
     <Route path='/' element={<Home />} />

   
     <Route path='/Filter' element={<Filter />} />
             
              <Route path='/Product' element={<Products />} />       
              <Route path='/Basket' element={<Basket />} />
         
     
     
      
      
       
        
        </Routes>
      </>
    );
  }
}

export default App;
