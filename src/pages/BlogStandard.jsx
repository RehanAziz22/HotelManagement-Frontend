import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';


const BlogStandard = () => {
  return (
    
    <div>
    
    <Header/>
  
  {/* Page Banner Start */}
<div className="page__banner" style={{ backgroundImage: 'url( /assets/img/banner/page-banner-7.jpg)' }}>
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="page__banner-title">
                    <h1>Blog Standard</h1>
                    <div className="page__banner-title-menu">
                        <ul>
                            <li><a href="index">Home</a></li>
                            <li><span>-</span>Blog Standard</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Page Banner End */}

{/* Blog Standard Start */}
<div className="blog__standard section-padding">
    <div className="container">
        <div className="row">
            <div className="col-xxl-9 col-xl-8 col-lg-8 lg-mb-30">
                <div className="blog__standard-left">
                    <div className="blog__standard-left-item">
                        <div className="blog__standard-left-item-image">
                            <a href="BlogDetails"><img src=" /assets/img/blog/blog-7.jpg" alt="" /></a>
                        </div>
                        <div className="blog__standard-left-item-content">
                            <div className="blog__standard-left-item-content-meta">
                                <ul>
                                    <li><a href="#"><i className="fal fa-user"></i>By- Admin</a></li>
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i>07, March 2022</a></li>
                                    <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                </ul>
                            </div>
                            <h3><a href="BlogDetails">Get best taxi fares in your city with our booking service</a></h3>
                            <p className="mb-40">Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus,</p>
                            <a className="theme-border-btn" href="BlogDetails">Read More<i className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="blog__standard-left-item">
                        <div className="blog__standard-left-item-image">
                            <a href="BlogDetails"><img src=" /assets/img/blog/blog-8.jpg" alt="" /></a>
                        </div>
                        <div className="blog__standard-left-item-content">
                            <div className="blog__standard-left-item-content-meta">
                                <ul>
                                    <li><a href="#"><i className="fal fa-user"></i>By- Admin</a></li>
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i>07, March 2022</a></li>
                                    <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                </ul>
                            </div>
                            <h3><a href="BlogDetails">Get best taxi fares in your city with our booking service</a></h3>
                            <p className="mb-40">Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus,</p>
                            <a className="theme-border-btn" href="BlogDetails">Read More<i className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="blog__standard-left-item">
                        <div className="blog__standard-left-item-image">
                            <a href="BlogDetails"><img src=" /assets/img/blog/blog-9.jpg" alt="" /></a>
                        </div>
                        <div className="blog__standard-left-item-content">
                            <div className="blog__standard-left-item-content-meta">
                                <ul>
                                    <li><a href="#"><i className="fal fa-user"></i>By- Admin</a></li>
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i>07, March 2022</a></li>
                                    <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                </ul>
                            </div>
                            <h3><a href="BlogDetails">Get best taxi fares in your city with our booking service</a></h3>
                            <p className="mb-40">Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus,</p>
                            <a className="theme-border-btn" href="BlogDetails">Read More<i className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="theme__pagination mt-50">
                    <ul>
                        <li><a className="active" href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#"><i className="far fa-ellipsis-h"></i></a></li>
                        <li><a href="#">05</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4">
                <div className="all__sidebar-item-search mb-40">
                    <form action="#">
                        <input type="text" placeholder="Search....." />
                        <button type="submit"><i className="fal fa-search"></i></button>
                    </form>
                </div>
                <div className="all__sidebar">
                    <div className="all__sidebar-item">
                        <h5>Category</h5>
                        <div className="all__sidebar-item-category">
                            <ul>
                                <li><a href="#"><i className="far fa-angle-double-right"></i>Luxury Room<span>(08)</span></a></li>
                                <li><a href="#"><i className="far fa-angle-double-right"></i>Small Suite<span>(06)</span></a></li>
                                <li><a href="#"><i className="far fa-angle-double-right"></i>Single<span>(05)</span></a></li>
                                <li><a href="#"><i className="far fa-angle-double-right"></i>Family<span>(09)</span></a></li>
                                <li><a href="#"><i className="far fa-angle-double-right"></i>Double Room<span>(03)</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="all__sidebar-item">
                        <h5>Recent Post</h5>
                        <div className="all__sidebar-item-post">
                            <div className="all__sidebar-item-post-item">
                                <div className="all__sidebar-item-post-item-image">
                                    <a href="BlogDetails"><img src=" /assets/img/blog/post-1.jpg" alt="" /></a>
                                </div>
                                <div className="all__sidebar-item-post-item-content">
                                    <span><i className="fal fa-calendar-alt"></i>05 June, 2022</span>
                                    <h6><a href="BlogDetails">Book your next Trip today!</a></h6>
                                </div>
                            </div>
                            <div className="all__sidebar-item-post-item">
                                <div className="all__sidebar-item-post-item-image">
                                    <a href="BlogDetails"><img src=" /assets/img/blog/post-2.jpg" alt="" /></a>
                                </div>
                                <div className="all__sidebar-item-post-item-content">
                                    <span><i className="fal fa-calendar-alt"></i>02 June, 2022</span>
                                    <h6><a href="BlogDetails">Booking is an Easy way to find</a></h6>
                                </div>
                            </div>
                            <div className="all__sidebar-item-post-item">
                                <div className="all__sidebar-item-post-item-image">
                                    <a href="BlogDetails"><img src=" /assets/img/blog/post-3.jpg" alt="" /></a>
                                </div>
                                <div className="all__sidebar-item-post-item-content">
                                    <span><i className="fal fa-calendar-alt"></i>04 June, 2022</span>
                                    <h6><a href="BlogDetails">Book instantly And also get</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all__sidebar-item">
                        <h5>Tag'g</h5>
                        <div className="all__sidebar-item-tag">
                            <ul>
                                <li><a href="#">Hotel</a></li>
                                <li><a href="#">Booking Now</a></li>
                                <li><a href="#">Luxury</a></li>
                                <li><a href="#">Single room</a></li>
                                <li><a href="#">Small suite</a></li>
                                <li><a href="#">Family</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Blog Standard End */}




<Footer/>
    </div>
  )
}

export default BlogStandard