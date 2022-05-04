import React, { Component } from "react";
import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg  navbar-static-top fixed-top navbar-dark bg-success">
          <a class="navbar-brand font-weight-bold" href="/">
            SHOPZY
          </a>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link font-weight-bold" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link font-weight-bold" href="/Product">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link font-weight-bold" href="/Basket">
                  Basket
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
