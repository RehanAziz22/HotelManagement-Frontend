import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  console.log(user);
  // State to hold form data
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    message: "",
  });
  const submitfeedback = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (!user) {
      navigate('/loginpage')
    } else {

      try {
        const response = await axios.post("https://hotel-management-backend-ruby.vercel.app/api/feedback/create", formData);
        console.log(response)
        if (response.data.status) {
          toast.success("Feedback submitted successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          }); // Reset form after successful submission
        }
      } catch (error) {
        console.error("Error submitting feedback", error);
        toast.error("Error submitting feedback");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (

    <div>
      {/* <Header/> */}

      {/* Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: "url('/assets/img/banner/page-banner-9.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Contact Us</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><span>-</span>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Contact Area Start */}
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">Get In Touch</h3>
                <p>Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus felis. Nulla non pulvinar enim, vel viverra nunc</p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Emergency Help</span>
                    <h6><a href="tel:+123(458)896895">+123 ( 458 ) 896 895</a></h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Quick Email</span>
                    <h6><a href="mailto:support@gamil.com">support@gamil.com</a></h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Office Address</span>
                    <h6><a href="#">GXF4+8HQ Chippenham United Kingdom</a></h6>
                  </div>
                </div>
              </div>
              <div className="contact__area-social">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-behance"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="contact__area-form">
                <h3 className="mb-35">Send Message</h3>
                <form onSubmit={submitfeedback}>
                  <div className="row">
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="fal fa-user"></i>
                        <input type="text" defaultValue={formData.name} name="name" onChange={handleInputChange} placeholder="Full Name" required />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-envelope-open"></i>
                        <input type="email" defaultValue={formData?.email || ''} name="email" onChange={handleInputChange} placeholder="Email Address" required />
                      </div>
                    </div>

                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-comments"></i>
                        <textarea name="message" onChange={handleInputChange} placeholder="Type your comments...."></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact__area-form-item">
                        <button className="theme-btn" type="submit">Submit Now<i className="fal fa-long-arrow-right"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__area-map section-padding">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Area End */}



      {/* <Footer/> */}
    </div>
  )
}

export default Contact