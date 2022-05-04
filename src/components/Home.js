import React from "react";
import "./style.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div class="card bg-dark text-white border-0">
          <img
            class="card-img  pic cropped"
            src="https://media.istockphoto.com/photos/mens-accessories-picture-id626085868?k=20&m=626085868&s=612x612&w=0&h=M0UpHDmzleAF3NpPdGW5mhQ2XXrUQIRABrGp2koAUiI="
            alt="Card image"
            height="550px"
          />
          <div class="card-img-overlay d-flex flex-coloumn  align-items-center h-100">
            <div className="container ">
              <h5 class="card-title display-3  c fw-bolder justify-content-center mb-0">
                SHOP THE LATEST TRENDS
              </h5>
              <p class=" line card-text cf justify-content-center lead  ">
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
