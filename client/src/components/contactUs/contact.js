
import React, { Component } from "react";
import Header from "../../header/Header";

export default class contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <div>
            {/* Header Section Begin */}
            {/* Header End */}
            {/* Contact Top Content Section Begin */}
            <section className="contact-content-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="cc-text set-bg"
                      data-setbg="img/contact-content-bg.jpg"
                      style={{
                        backgroundImage: `url(img/contact-content-bg.jpg)`
                      }}
                    >
                      <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                          <div className="section-title">
                            <h2>Location</h2>
                            <p>Get directions to our event center</p>
                          </div>
                          <div className="cs-text">
                            <div className="ct-address">
                              <span>Address:</span>
                              <p>
                               Kankannady <br />
                                Mangalore
                              </p>
                            </div>
                            <ul>
                              <li>
                                <span>Phone:</span>
                                +91 91411 62169
                              </li>
                              <li>
                                <span>Email:</span>
                                contact@nishanvarunmovies.com
                              </li>
                            </ul>
                            <div className="ct-links">
                              <span>Website:</span>
                              <p>www.nishanvarunmovies.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6" style={{display:"none"}}>
                    <div className="cc-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.39881927885!2d74.7820230583424!3d12.922982868390962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1597689859183!5m2!1sen!2sin"
                        height={580}
                        style={{ border: 0 }}
                        allowFullScreen
                      />
                      <div className="map-hover" style={{display: "none"}}>
                        <i className="fa fa-map-marker" />
                        <div className="map-hover-inner">
                          <h5>01 Pascale SP Apt. 339</h5>
                          <p>NewYork City, US</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact Top Content Section End */}
            {/* Contact Form Section Begin */}
            <section className="contact-from-section spad">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <h2>Contact Us By Email!</h2>
                      <p>
                        contact us for more details about the movie
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <form action="#" className="comment-form contact-form">
                      <div className="row">
                        <div className="col-lg-4">
                          <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-lg-4">
                          <input type="text" placeholder="Email" />
                        </div>
                        <div className="col-lg-4">
                          <input type="text" placeholder="Phone" />
                        </div>
                        <div className="col-lg-12 text-center">
                          <textarea placeholder="Messages" defaultValue={""} />
                          <button type="submit" className="site-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact Form Section End */}
            {/* Footer Section Begin */}
            <footer className="footer-section">
              <div className="container">
                <div className="partner-logo owl-carousel">
                  <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                      <img src="img/partner-logo/logo-1.png" alt="" />
                    </div>
                  </a>
                  <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                      <img src="img/partner-logo/logo-2.png" alt="" />
                    </div>
                  </a>
                  <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                      <img src="img/partner-logo/logo-3.png" alt="" />
                    </div>
                  </a>
                  <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                      <img src="img/partner-logo/logo-4.png" alt="" />
                    </div>
                  </a>
                  <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                      <img src="img/partner-logo/logo-5.png" alt="" />
                    </div>
                  </a>
                  <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                      <img src="img/partner-logo/logo-6.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-text">
                      <div className="ft-logo">
                        <a href="#" className="footer-logo">
                          <img src="img/footer-logo.png" alt="" />
                        </a>
                      </div>
                      <ul style={{display: "none" }}>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">Speakers</a>
                        </li>
                        <li>
                          <a href="#">Schedule</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                      <div className="copyright-text" style={{display: "none"}}>
                        <p>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          Copyright © All rights reserved | This template is
                          made with{" "}
                          <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                          <a href="https://colorlib.com" target="_blank">
                            Colorlib
                          </a>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                      </div>
                      <div className="ft-social" style={{display: "none"}}>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-youtube-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}
