import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutUs = () => {
  return (
    <div>
        {/* <Header/> */}

      {/* Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: "url('/assets/img/banner/page-banner-1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>About Us</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><a href="Index">Home</a></li>
                    <li><span>-</span>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Company Offers Start */}
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Company Offers</span>
                <h2>Book now and save up to 35% On hotel rooms</h2>
                <p>Hasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus felis. Nulla non pulvinar enim, vel viverra nunc. Integer condimentum vulputate justo. Morbi rhoncus elit in tellus viverra, vel fermentum orci dictum.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <img className="img__full" src="/assets/img/features/offers.jpg" alt="Offers Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company Offers End */}

      {/* Services Two Start */}
      <div className="services__two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <img src="/assets/img/icon/cleaning-1.png" alt="Room Cleaning Icon" />
                </div>
                <div className="services__two-item-content">
                  <h4>Room Cleaning</h4>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <img src="/assets/img/icon/car-parking.png" alt="Car Parking Icon" />
                </div>
                <div className="services__two-item-content">
                  <h4>Car Parking</h4>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <img src="/assets/img/icon/swimming-pool.png" alt="Swimming Pool Icon" />
                </div>
                <div className="services__two-item-content">
                  <h4>Swimming Pool</h4>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <img src="/assets/img/icon/location-1.png" alt="PickUp & Drop Icon" />
                </div>
                <div className="services__two-item-content">
                  <h4>PickUp & Drop</h4>
                  <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Two End */}

      {/* Gallery Area Start */}
      <div className="gallery__area section-padding pb-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm-3 sm-mb-10">
              <div className="gallery__area-item">
                <a className="img-popup" href="/assets/img/features/gallery-1.jpg"><img className="img__full" src="/assets/img/features/gallery-1.jpg" alt="Gallery Image 1" /></a>
              </div>
            </div>
            <div className="col-sm-3 sm-mb-10">
              <div className="gallery__area-item">
                <a className="img-popup" href="/assets/img/features/gallery-2.jpg"><img className="img__full" src="/assets/img/features/gallery-2.jpg" alt="Gallery Image 2" /></a>
              </div>
            </div>
            <div className="col-sm-3 sm-mb-10">
              <div className="gallery__area-item">
                <a className="img-popup" href="/assets/img/features/gallery-3.jpg"><img className="img__full" src="/assets/img/features/gallery-3.jpg" alt="Gallery Image 3" /></a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="gallery__area-item">
                <a className="img-popup" href="/assets/img/features/gallery-4.jpg"><img className="img__full" src="/assets/img/features/gallery-4.jpg" alt="Gallery Image 4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area End */}
        {/* Team Area Start */}
        <div className="team__area section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="team__area-title">
                <span className="subtitle__one">Our Team</span>
                <h2>Meet Our Experts</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Team Member 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6 sm-mb-30">
              <div className="team__area-item">
                <div className="team__area-item-image">
                  <img className="img__full" src="/assets/img/team/team-1.jpg" alt="Team Member 1" />
                </div>
                <div className="team__area-item-content">
                  <h4>John Doe</h4>
                  <p>CEO & Founder</p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6 sm-mb-30">
              <div className="team__area-item">
                <div className="team__area-item-image">
                  <img className="img__full" src="/assets/img/team/team-2.jpg" alt="Team Member 2" />
                </div>
                <div className="team__area-item-content">
                  <h4>Jane Smith</h4>
                  <p>Manager</p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-xl-3 col-lg-4 col-md-6 sm-mb-30">
              <div className="team__area-item">
                <div className="team__area-item-image">
                  <img className="img__full" src="/assets/img/team/team-3.jpg" alt="Team Member 3" />
                </div>
                <div className="team__area-item-content">
                  <h4>Emily Johnson</h4>
                  <p>Marketing Director</p>
                </div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team__area-item">
                <div className="team__area-item-image">
                  <img className="img__full" src="/assets/img/team/team-4.jpg" alt="Team Member 4" />
                </div>
                <div className="team__area-item-content">
                  <h4>Michael Brown</h4>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Area End */}

     {/* <Footer/> */}
    
    </div>
  );
};

export default AboutUs;
