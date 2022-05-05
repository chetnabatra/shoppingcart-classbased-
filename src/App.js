import React, { Component, lazy, Suspense } from "react";
import "./App.css";


import Header from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const Products = lazy(() => import("./components/Products"));
const Home = lazy(() => import("./components/Home"));
const Basket = lazy(() => import("./components/Basket"));

class App extends Component {
  render() {
    return (
      <>
        <Suspense
          fallback={
            <div>
              <h1>Loading...</h1>
            </div>
          }
        >
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Products />} />
            <Route path="/Basket" element={<Basket />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
