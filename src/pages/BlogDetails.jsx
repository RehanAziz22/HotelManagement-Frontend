import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';


const BlogDetails = () => {
  return (
    
   <div>
        <Header/>

      {/* Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: 'url(/assets/img/banner/page-banner-8.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Blog Details</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><a href="Index">Home</a></li>
                    <li><span>-</span>Blog Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Blog Details Start */}
      <div className="blog__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 col-lg-8 lg-mb-30">
              <div className="blog__details-left">
                <img src="/assets/img/blog/blog-10.jpg" alt="Blog Image" />
                <div className="blog__details-left-meta">
                  <ul>
                    <li><a href="#"><i className="fal fa-user"></i>By - Admin</a></li>
                    <li><a href="#"><i className="fal fa-calendar-alt"></i>07, March 2022</a></li>
                    <li><a href="#"><i className="fal fa-comments"></i>3 Comments</a></li>
                  </ul>
                </div>
                <h3 className="mb-20">Booking is an easy way to find the best hotels for you</h3>
                <p className="mb-25">Detailed content goes here...</p>

                {/* Comment Section */}
                <div className="blog__details-left-comment mb-45">
                  <h4 className="mb-40">Comments (2)</h4>
                  <div className="blog__details-left-comment-item">
                    <div className="blog__details-left-comment-item-comment">
                      <div className="blog__details-left-comment-item-comment-image">
                        <img src="/assets/img/avatar/comment-1.jpg" alt="Commenter" />
                      </div>
                      <div className="blog__details-left-comment-item-comment-content">
                        <h5>Justin Bieber <a href="#"><i className="far fa-reply-all"></i>Reply</a></h5>
                        <span>20 May, 2022 At 9:PM</span>
                        <p>Comment text here...</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog__details-left-comment-item ml-65 sm-ml-0">
                    <div className="blog__details-left-comment-item-comment">
                      <div className="blog__details-left-comment-item-comment-image">
                        <img src="/assets/img/avatar/comment-2.jpg" alt="Commenter" />
                      </div>
                      <div className="blog__details-left-comment-item-comment-content">
                        <h5>Camila Cabello <a href="#"><i className="far fa-reply-all"></i>Reply</a></h5>
                        <span>22 May, 2022 At 7:PM</span>
                        <p>Comment text here...</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Comment Form */}
                <div className="blog__details-left-contact">
                  <h4 className="mb-40">Add Comment</h4>
                  <div className="blog__details-left-contact-form">
                    <form action="#">
                      <div className="row">
                        <div className="col-sm-6 mb-30">
                          <div className="blog__details-left-contact-form-item">
                            <i className="fal fa-user"></i>
                            <input type="text" name="name" placeholder="Full Name" required />
                          </div>
                        </div>
                        <div className="col-sm-6 sm-mb-30">
                          <div className="blog__details-left-contact-form-item">
                            <i className="fal fa-envelope"></i>
                            <input type="email" name="email" placeholder="Email Address" required />
                          </div>
                        </div>
                        <div className="col-sm-12 mb-30">
                          <div className="blog__details-left-contact-form-item">
                            <i className="fal fa-globe"></i>
                            <input type="text" name="subject" placeholder="Website URL" required />
                          </div>
                        </div>
                        <div className="col-sm-12 mb-30">
                          <div className="blog__details-left-contact-form-item">
                            <i className="fal fa-pen"></i>
                            <textarea name="message" placeholder="Type your comments...."></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="blog__details-left-contact-form-item">
                            <button className="theme-btn" type="submit">Post Comment</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="all__sidebar">
                <div className="all__sidebar-item">
                  <h5>Category</h5>
                  <ul>
                    <li><a href="#">Luxury Room</a></li>
                    <li><a href="#">Small Suite</a></li>
                    <li><a href="#">Single</a></li>
                    <li><a href="#">Family</a></li>
                    <li><a href="#">Double Room</a></li>
                  </ul>
                </div>
                <div className="all__sidebar-item">
                  <h5>Recent Posts</h5>
                  <ul>
                    <li><a href="BlogDetails">Book your next Trip today!</a></li>
                    <li><a href="BlogDetails">Booking is an Easy way to find</a></li>
                    <li><a href="BlogDetails">Book instantly And also get</a></li>
                  </ul>
                </div>
                <div className="all__sidebar-item">
                  <h5>Tags</h5>
                  <ul>
                    <li><a href="#">Hotel</a></li>
                    <li><a href="#">Booking Now</a></li>
                    <li><a href="#">Luxury</a></li>
                    <li><a href="#">Single room</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Details End */}

    <Footer/>
    </div>




  );
};

export default BlogDetails