import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home</a></li>
      
      <li class="active"><a href="/Basket">Basket</a></li>

      </ul>
     
  </div>
</nav>


      </div>
    )
  }
}
