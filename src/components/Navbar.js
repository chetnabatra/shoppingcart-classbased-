import React, { Component } from "react";
import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark navbar-fixed-top ">

  <a class="navbar-brand" href="/">SHOPZY</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/product">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/basket">Cart</a>
      </li>
    </ul>
  </div>
</nav>
       
    );
  }
}
