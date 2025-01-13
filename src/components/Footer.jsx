import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>  {/* Footer Section */}
    <footer className="footer__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 sm-mb-30">
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
          <div className="col-xl-2 col-lg-6 col-md-12 col-sm-12 sm-mb-30">
            <div className="footer__area-widget">
              <h5 style={{marginLeft:25}}>Quick Links</h5>
              <div className="footer__area-widget-links">
                <ul style={{ listStyle: 'none' }}>
                  <li className="text-white"><Link to="/About">About Us</Link></li>
                  <li className="text-white"><Link to="/ServicesDetails">Services</Link></li>
                  <li className="text-white"><Link to="/Contact">Contact</Link></li>
                  <li className="text-white"><Link to="/ServicesTeam">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 lg-mb-30">
            <div className="footer__area-widget">
              <h5>Information</h5>
              <div className="footer__area-widget-contact" style={{ display: 'flex', flexDirection: 'row',justifyContent:"space-between", alignItems:"center" }}>
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <p className="text-white">+123-456-789</p>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <p className="text-white">info@example.com</p>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="far fa-map-marker-alt"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <p className="text-white">123 Street, City, Country</p>
                  </div>
                </div>
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