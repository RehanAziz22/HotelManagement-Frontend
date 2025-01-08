import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>  {/* Footer Section */}
    <footer className="footer__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <div className="footer__area-widget-about">
                <div className="footer__area-widget-about-logo">
                  <Link to="/"><img src="/assets/img/logo.png" alt="Logo" /></Link>
                </div>
                <p>Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus</p>
                <div className="footer__area-widget-about-social">
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
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              <h5>Information</h5>
              <div className="footer__area-widget-contact">
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <p>+123-456-789</p>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <p>info@example.com</p>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="far fa-map-marker-alt"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <p>123 Street, City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <h5>Quick Links</h5>
              <div className="footer__area-widget-links">
                <ul>
                  <li><Link to="/About">About Us</Link></li>
                  <li><Link to="/ServicesDetails">Services</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
                  <li><Link to="/ServicesTeam">Terms & Conditions</Link></li>
                  <li><Link to="/Privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
         {/* Footer Area End */}</div>
  )
}

export default Footer