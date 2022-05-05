import React from "react";
import "./style.css";



class Home extends React.Component {
  render() {
    return (
      <>
        <div class="card bg-dark text-white border-0">
          <img
            className="card-img pic"
            src="bg.jpg"
          
                   alt="Card image"
            
          />
          <div class="card-img-overlay  d-flex flex-coloumn  align-items-center ">
            <div className="container ">
              <h5 class="card-title display-3 c fw-bolder justify-content-center mb-0">
                SHOP THE LATEST TRENDS
              </h5>
              <p class=" line card-text cf justify-content-center lead ">
                Comfy.Elegant.Smart
              </p>
              <center>
                <a
                  href="/Product"
                  className="btn btn-success  cf text-center"
                  aria-current="page"
                >
                  {" "}
                  ORDER ONLINE
                </a>
              </center>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
