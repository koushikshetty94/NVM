import React, { Component } from 'react'

export default class contact extends Component {
    render() {
        return (
            <div>
                <div>
        
        {/* Header Section Begin */}
        <header className="header-section">
          <div className="container">
            <div className="logo">
              <a href="./index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
            <div className="nav-menu">
              <nav className="mainmenu mobile-menu">
                <ul>
                  <li className="active"><a href="./index.html">Home</a></li>
                  <li><a href="./about-us.html">About</a></li>
                  <li><a href="index.html #contest">Contest</a></li>
                  <li><a href="#">Updates</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </nav>
              <a href="#" className="primary-btn top-btn"><i className="fa fa-ticket" />Ticket</a>
            </div>
            <div id="mobile-menu-wrap" />
          </div>
        </header>
        {/* Header End */}
        {/* Contact Top Content Section Begin */}
        <section className="contact-content-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="cc-text set-bg" data-setbg="img/contact-content-bg.jpg"
                style={{backgroundImage : `url(img/contact-content-bg.jpg)`}}>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-4">
                      <div className="section-title">
                        <h2>Location</h2>
                        <p>Get directions to our event center</p>
                      </div>
                      <div className="cs-text">
                        <div className="ct-address">
                          <span>Address:</span>
                          <p>01 Pascale Springs Apt. 339, NY City <br />United State</p>
                        </div>
                        <ul>
                          <li>
                            <span>Phone:</span>
                            (+12)-345-67-8910
                          </li>
                          <li>
                            <span>Email:</span>
                            info.colorlib@gmail.com
                          </li>
                        </ul>
                        <div className="ct-links">
                          <span>Website:</span>
                          <p>https://conference.colorlib.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cc-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105718.20476932525!2d-118.28504975143346!3d34.10298127166687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6badc8521ad%3A0x7ad323479ca23922!2sNortheast%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579884986183!5m2!1sen!2sbd" height={580} style={{border: 0}} allowFullScreen />
                  <div className="map-hover">
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
                  <p>Fill out the form below to recieve a free and confidential intial consultation.</p>
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
                      <button type="submit" className="site-btn">Send Message</button>
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
                    <a href="#" className="footer-logo"><img src="img/footer-logo.png" alt="" /></a>
                  </div>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Speakers</a></li>
                    <li><a href="#">Schedule</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                  <div className="copyright-text"><p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p></div>
                  <div className="ft-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-linkedin" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                    <a href="#"><i className="fa fa-youtube-play" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

            </div>
        )
    }
}
