import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';


const BlogGrid = () => {
  return (
    
    <div>
   
   <Header/>
  
          {/* Page Banner Start */}
<div className="page__banner" style={{ backgroundImage: "url('/assets/img/banner/page-banner-10.jpg')" }}>
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="page__banner-title">
                    <h1>Blog Grid</h1>
                    <div className="page__banner-title-menu">
                        <ul>
                            <li><a href="Index">Home</a></li>
                            <li><span>-</span>Blog Grid</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  {/* Page Banner End */}

  {/* Blog Grid Start */}
<div className="blog__grid section-padding">
    <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="blog__two-item">
                    <div className="blog__two-item-image">
                        <img src="/assets/img/blog/blog-4.jpg" alt="" />
                        <div className="blog__two-item-image-date">
                            <h5>19</h5>
                            <span>Aug</span>
                        </div>
                    </div>
                    <div className="blog__two-item-content">
                        <h6>Post by - Admin</h6>
                        <h4><a href="blog-details.html">Find cheap hotels in the best locations</a></h4>
                        <a className="simple-btn" href="blog-details.html"><i className="far fa-chevron-right"></i>Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 lg-mb-30">
                <div className="blog__two-item">
                    <div className="blog__two-item-image">
                        <img src="/assets/img/blog/blog-5.jpg" alt="" />
                        <div className="blog__two-item-image-date">
                            <h5>15</h5>
                            <span>Aug</span>
                        </div>
                    </div>
                    <div className="blog__two-item-content">
                        <h6>Post by - Admin</h6>
                        <h4><a href="BlogDetailS">Book a room Today most Affordable Rates.</a></h4>
                        <a className="simple-btn" href="BlogDetails"><i className="far fa-chevron-right"></i>Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 md-mb-30">
                <div className="blog__two-item">
                    <div className="blog__two-item-image">
                        <img src="/assets/img/blog/blog-6.jpg" alt="" />
                        <div className="blog__two-item-image-date">
                            <h5>12</h5>
                            <span>Aug</span>
                        </div>
                    </div>
                    <div className="blog__two-item-content">
                        <h6>Post by - Admin</h6>
                        <h4><a href="BlogDetails">Our expertise covers all Aspects of the industry</a></h4>
                        <a className="simple-btn" href="BlogDetails"><i className="far fa-chevron-right"></i>Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 xl-mb-30">
                <div className="blog__two-item">
                    <div className="blog__two-item-image">
                        <img src="/assets/img/blog/blog-13.jpg" alt="" />
                        <div className="blog__two-item-image-date">
                            <h5>19</h5>
                            <span>Aug</span>
                        </div>
                    </div>
                    <div className="blog__two-item-content">
                        <h6>Post by - Admin</h6>
                        <h4><a href="BlogDetails">Sheraton Broadway Plantation Resort Villas</a></h4>
                        <a className="simple-btn" href="BlogDetails"><i className="far fa-chevron-right"></i>Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 lg-mb-30">
                <div className="blog__two-item">
                    <div className="blog__two-item-image">
                        <img src="/assets/img/blog/blog-14.jpg" alt="" />
                        <div className="blog__two-item-image-date">
                            <h5>15</h5>
                            <span>Aug</span>
                        </div>
                    </div>
                    <div className="blog__two-item-content">
                        <h6>Post by - Admin</h6>
                        <h4><a href="BlogDetails">Find cheap hotels in the best locations</a></h4>
                        <a className="simple-btn" href="BlogDetails"><i className="far fa-chevron-right"></i>Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog__two-item">
                    <div className="blog__two-item-image">
                        <img src="/assets/img/blog/blog-15.jpg" alt="" />
                        <div className="blog__two-item-image-date">
                            <h5>12</h5>
                            <span>Aug</span>
                        </div>
                    </div>
                    <div className="blog__two-item-content">
                        <h6>Post by - Admin</h6>
                        <h4><a href="BlogDetails">Book a room Today most Affordable Rates.</a></h4>
                        <a className="simple-btn" href="BlogDetails"><i className="far fa-chevron-right"></i>Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12">
                <div className="theme__pagination t-center mt-50">
                    <ul>
                        <li><a className="active" href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#"><i className="far fa-ellipsis-h"></i></a></li>
                        <li><a href="#">05</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  {/* Blog Grid End */}





  <Footer/>
    </div>
  )
}

export default BlogGrid