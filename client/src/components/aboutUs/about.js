
import React, { Component } from "react";
import Header from "../../header/Header";
import { connect } from "react-redux";
import Cart from "../../cart/Cart";

let items = [
  {
    id: 0,
    name: "Indian Ticket",
    description: `1x Ticket
      1x Lucky Contest Entry
      English Subtitles
      Tulu / Kannada Language
      For Indian Users Only`,
    price: 249
  },
  {
    id: 1,
    name: "NRI Ticket",
    description: `1x Day Ticket
        1x Lucky Contest Entry
        English Subtitles
        Tulu / Kannada Language
        Broadcast Globally`,
    price: 349
  }
];

class about extends Component {
  state = {
    showCart: false,
    activeItem: ""
  };

  handleCartShow = i => {
   // if (this.props.user.currentUser) {
      return this.setState({ showCart: true, activeItem: items[i] });
   // }
   // alert("Please Login");
  };
  render() {
    return (
      <>
        {this.state.showCart ? (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(152,152,152,0.1)",
              opacity: "0.9",
              zIndex: 1000000,
              background: "lightgray"
            }}
            className="cartDiv"
          >
            <p
              style={{
                cursor: "pointer",
                width: "fitContent",
                float: "right"
              }}
              className="closeIt"
              onClick={() => this.setState({ showCart: false })}
            >
              Close X
            </p>
            <Cart item={this.state.activeItem} />
          </div>
        ) : (
          ""
        )}
        <Header />
        <div>
          <div>
            {/* Header Section Begin */}
            {/* Header End */}
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="breadcrumb-text">
                      <h2>About Us</h2>
                      <div className="bt-option">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* About Section Begin */}
            <section className="about-section spad">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <h2>About Nishan Varun Movies</h2>
                      <p className="f-para">
                        Nishan Varun Movies is a well reowned production company by three friends who have been best Friends for over 20years. They aim to produce more creative and great movies in tulu industry over the coming years and want to entertain. NishanVarun Movies will release their first movie in Tulu industry "Pepperere Pererere" on December 18th 2020. The movie has casted the best actors Tulunad has seen for decades & is sure to be one among the best movies tulunad has given us.
                      </p>
                      
                       
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-pic">
                      <img src="img/about-us.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-text">
                      <h3>About The Movie</h3>
                      <p>
                       Pepperere Pererere Movie is a total Family entertainer filled with comedy & drama. The movie casts a bunch of stars to take you on a joyful ride of fun & entertainment. How do you book a ticket? Download V4 media App on Android app store & Appstore. Install the app & enter your Unique code to view the movie. NishanVarun Movie is also organizing contests. The lucky draw contest includes variety of gifts & prizes for the winners like Laptops, Car, Tabs, Mobile phones & more. Purchase a ticket and win exciting prizes now!.
                      </p>
                      <ul>
                        <li>
                          <span className="icon_check" style={{display: "none"}} /> 100% Entertainment
                        </li>
                        <li>
                          <span className="icon_check" style={{display: "none"}} /> Tulu language movie with english and kannada subtitles 
</li>
                        
                        <li>
                          <span className="icon_check" style={{display:"none"}}/> Total Comedy Entertainer
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* About Section End */}
            {/* Team Member Section Begin */}
            <section className="team-member-section" style={{display:"none"}}  >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <h2>Who’s speaking</h2>
                      <p>
                        These are our communicators, you can see each person
                        information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-1.jpg"
                style={{ backgroundImage: `url(img/team-member/member-1.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-2.jpg"
                style={{ backgroundImage: `url(img/team-member/member-2.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-3.jpg"
                style={{ backgroundImage: `url(img/team-member/member-3.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-4.jpg"
                style={{ backgroundImage: `url(img/team-member/member-4.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-5.jpg"
                style={{ backgroundImage: `url(img/team-member/member-5.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-6.jpg"
                style={{ backgroundImage: `url(img/team-member/member-6.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-7.jpg"
                style={{ backgroundImage: `url(img/team-member/member-7.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-8.jpg"
                style={{ backgroundImage: `url(img/team-member/member-8.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-9.jpg"
                style={{ backgroundImage: `url(img/team-member/member-9.jpg)` }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
              <div
                className="member-item set-bg"
                data-setbg="img/team-member/member-10.jpg"
                style={{
                  backgroundImage: `url(img/team-member/member-10.jpg)`
                }}
              >
                <div className="mi-social">
                  <div className="mi-social-inner bg-gradient">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="mi-text">
                  <h5>Emma Sandoval</h5>
                  <span>Speaker</span>
                </div>
              </div>
            </section>
            {/* Team Member Section End */}
            {/* Pricing Section Begin */}
            <section
              className="pricing-section set-bg spad"
              data-setbg="img/pricing-bg.jpg"
              style={{ backgroundImage: `url(img/pricing-bg.jpg)` }}
            >
              <div className="container">
                <div className="row" >
                  <div className="col-lg-12" style={{marginRight:"80px"}} >
                    <div className="section-title">
                      <h2>Ticket Pricing</h2>
                      <p>Get your Movie Ticket</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center" >
                  <div className="col-lg-4">
                    <div className="price-item">
                      <h4>Indian Pass</h4>
                      <div className="pi-price">
                        <h2>
                          <span>₹</span>249
                        </h2>
                      </div>
                      <ul>
                        <li>1x Ticket</li>
                        <li>1x Lucky Contest Entry</li>
                        <li>English / Kannda Subtitles</li>
                        <li>TULU language movie</li>
                        <li>For Indian Users Only</li>
                      </ul>
                      <button
                        onClick={() => this.handleCartShow(0)}
                        className="price-btn"
                     style={{fontSize:"20px"}}
			 >
                        Buy Ticket 
                      </button>
                    </div>
                  </div>
            
                  <div className="col-lg-4">
                    <div className="price-item">
                      <h4>NRI Pass</h4>
                      <div className="pi-price">
                        <h2>
                          <span>₹</span>349
                        </h2>
                      </div>
                      <ul>
                        <li>1x Day Ticket</li>
                        <li>1x Lucky Contest Entry</li>
                        <li>English / Kannada Subtitles</li>
                        <li>TULU language movie</li>
                        <li>Broadcast Globally</li>
                      </ul>

                      <button
                        onClick={() => this.handleCartShow(2)}
			style={{fontSize:"20px"}}
                        className="price-btn"
                      >
                        Buy Ticket 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Pricing Section End */}
            {/* Newslatter Section Begin */}
            <section className="newslatter-section about-newslatter" style={{display: "none"}}>
              <div className="container">
                <div
                  className="newslatter-inner set-bg"
                  data-setbg="img/newslatter-bg.jpg"
                  style={{ backgroundImage: `url(img/newslatter-bg.jpg)` }}
                >
                  <div className="ni-text">
                    <h3>Subscribe Newsletter</h3>
                    <p>Subscribe to our newsletter and don’t miss anything</p>
                  </div>
                  <form action="#" className="ni-form">
                    <input type="text" placeholder="Your email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </section>
            {/* Newslatter Section End */}
            {/* Contact Section Begin */}
            <section className="contact-section spad">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>Location</h2>
                      <p>Get directions to our event center</p>
                    </div>
                    <div className="cs-text">
                      <div className="ct-address">
                        <span>Address:</span>
                        <p>
                            Kankannady
                      <br />
                      Mangalore
                        </p>
                      </div>
                      
                  <ul>
                    <li>
                      <span>Phone:</span>
                      <a href="tel:+919141162169" target="_blank">
                        +91 91411 62169
                      </a>
                    </li>
                    <li>
                      <span>Whatsapp:</span>
                      <a
                        href="https://web.whatsapp.com/send?phone=919141162169&text=Hello!"
                        target="_blank"
                      >
                        +91 91411 62169
                      </a>
                    </li>
                  </ul>
</div>
                  <div className="ct-links">
                    <span>Email:</span>
                    <a href="contact@nishanvarumovies.com" target="_blank">
                      {" "}
                      <p>contact@nishanvarumovies.com</p>
                    </a>
                  </div>
                  </div>
                  <div className="col-lg-6" style={{display:"none"}}>
                    <div className="cs-map">
                      <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.39881927885!2d74.7820230583424!3d12.922982868390962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1597689859183!5m2!1sen!2sin"

                        height={400}
                        style={{ border: 0 }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact Section End */}
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
                      <ul style={{ display : "none"}}>
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
                      <div className="copyright-text" style={{ display: "none"}}>
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
                      <div className="ft-social" style={{display : "none"}}>
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

function mapToProps({ user, cart }) {
  return { user, cart };
}
export default connect(mapToProps)(about);
