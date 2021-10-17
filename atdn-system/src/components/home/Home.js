import React from "react";

import "./Home.css";

import image1 from "../../assets/images/img_1.png";
import image2 from "../../assets/images/img_2.png";
import image3 from "../../assets/images/img_3.png";

function Home() {
  return (
    <header className="hiro-header home-header">
      <div className="container wow fadeInUp">
        <div
          id="hiroHeaderCarousel"
          className="hiro-header-carousel carousel slide"
          data-ride="carousel"
          data-interval="3500"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <h1
                    className="carousel-item-title"
                    data-animation="animated fadeInRight"
                    data-number="01"
                  >
                    <span>Remarkable Digital Products</span>
                  </h1>
                  <p
                    className="carousel-item-description"
                    data-animation="animated fadeInRight"
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src={image1}
                    alt="Remarkable Digital Products"
                    className="img-fluid w-100 rounded"
                    width="372px"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <h1
                    className="carousel-item-title"
                    data-animation="animated fadeInRight"
                    data-number="02"
                  >
                    <span>Remarkable Digital Products</span>
                  </h1>
                  <p
                    className="carousel-item-description"
                    data-animation="animated fadeInRight"
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src={image2}
                    alt="Remarkable Digital Products"
                    className="img-fluid w-100 rounded"
                    width="372px"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <h1
                    className="carousel-item-title"
                    data-animation="animated fadeInRight"
                    data-number="03"
                  >
                    <span>Remarkable Digital Products</span>
                  </h1>
                  <p
                    className="carousel-item-description"
                    data-animation="animated fadeInRight"
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src={image3}
                    alt="Remarkable Digital Products"
                    className="img-fluid w-100 rounded"
                    width="372px"
                  />
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#hiroHeaderCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#hiroHeaderCarousel" data-slide-to="1"></li>
            <li data-target="#hiroHeaderCarousel" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </header>
  );
}
export default Home;
