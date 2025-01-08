import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';


const ServicesTeam = () => {
  return (

    <div>
      {/* <Header/> */}


      {/*Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: "url('/assets/img/banner/page-banner-2.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Services Team</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><a href="Index">Home</a></li>
                    <li><span>-</span>Services Team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/*Services Team Start */}
      <div className="services__team section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="services__team-item">
                <div className="services__team-item-image">
                  <img src="/assets/img/team/team-5.jpg" alt="" />
                  <div className="services__team-item-image-content">
                    <h5>Michelle Yeoh</h5>
                    <span>Senior Member</span>
                    <div className="services__team-item-image-content-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
              <div className="services__team-item">
                <div className="services__team-item-image">
                  <img src="/assets/img/team/team-6.jpg" alt="" />
                  <div className="services__team-item-image-content">
                    <h5>James Damian</h5>
                    <span>Senior Member</span>
                    <div className="services__team-item-image-content-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__team-item">
                <div className="services__team-item-image">
                  <img src="/assets/img/team/team-7.jpg" alt="" />
                  <div className="services__team-item-image-content">
                    <h5>Davinci Resolve</h5>
                    <span>Senior Member</span>
                    <div className="services__team-item-image-content-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
              <div className="services__team-item">
                <div className="services__team-item-image">
                  <img src="/assets/img/team/team-8.jpg" alt="" />
                  <div className="services__team-item-image-content">
                    <h5>David Fincher</h5>
                    <span>Senior Member</span>
                    <div className="services__team-item-image-content-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
              <div className="services__team-item">
                <div className="services__team-item-image">
                  <img src="/assets/img/team/team-9.jpg" alt="" />
                  <div className="services__team-item-image-content">
                    <h5>Michelle Reis</h5>
                    <span>Senior Member</span>
                    <div className="services__team-item-image-content-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="services__team-item">
                <div className="services__team-item-image">
                  <img src="/assets/img/team/team-10.jpg" alt="" />
                  <div className="services__team-item-image-content">
                    <h5>Amelia Jessica</h5>
                    <span>Senior Member</span>
                    <div className="services__team-item-image-content-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Team End */}



      {/* <Footer /> */}
    </div>
  )
}

export default ServicesTeam