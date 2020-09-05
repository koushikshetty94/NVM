import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./home.scss";
import { addToCart } from "../../store/actions";

class Home extends Component {
  addToCart = i => {
    console.log("add to cart");
    let items = [
      {
        id: 0,
        name: "Time Pass",
        description: `1x Ticket
          1x Lucky Contest Entry
          English Subtitles
          Tulu / Kannada Language
          For Indian Users Only`,
        price: 1
      },
      {
        id: 1,
        name: "Group Pass",
        description: `Pay For 9 and Get 1 For Free
          10x Ticket
          10x Lucky Contest Entry
          English Subtitles
          Tulu / Kannada Language
          For Indian Users Only`,
        price: 2241
      },
      {
        id: 2,
        name: "NRI Pass",
        description: `1x Day Ticket
            1x Lucky Contest Entry
            English Subtitles
            Tulu / Kannada Language
            Broadcast Globally`,
        price: 349
      }
    ];

    return this.props.cart.some(item => item.id == i)
      ? ""
      : this.props.dispatch(addToCart(items[i]));
  };
  render() {
    return (
      <>
        <header className="header-section">
          <div className="container">
            <div className="logo">
              <a href="/">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
            <div className="nav-menu">
              <nav className="mainmenu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutUs">About</Link>
                  </li>
                  <li>
                    <a href="#contest">Lucky Contest</a>
                  </li>
                  <li>
                    <a href="#">Updates</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                </ul>
              </nav>
              <a
                href="https://web.whatsapp.com/send?phone=919141162169&text=Hello!"
                className="primary-btn top-btn"
              >
                <i className="fa fa-ticket"></i>Ticket
              </a>
            </div>
            <div id="mobile-menu-wrap"></div>
          </div>
        </header>

        <section
          className="hero-section set-bg"
          data-setbg="img/hero.jpg"
          style={{ backgroundImage: `url(img/hero.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-text">
                  <span>18th DECEMBER 2020</span>
                  <h2>
                    Pepperere Pererere
                    <br />
                    To be released soon
                  </h2>
                  <a
                    href="https://web.whatsapp.com/send?phone=919141162169&text=Hello!"
                    className="primary-btn"
                  >
                    Buy Ticket
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <img src="img/hero-right.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="counter-section bg-gradient">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="counter-text">
                  <span>Movie Date</span>
                  <h3>
                    Count Every Second <br />
                    Until the Movie
                  </h3>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="cd-timer" id="countdown">
                  <div className="cd-item">
                    <span>87</span>
                    <p>Days</p>
                  </div>
                  <div className="cd-item">
                    <span>18</span>
                    <p>Hours</p>
                  </div>
                  <div className="cd-item">
                    <span>46</span>
                    <p>Minutes</p>
                  </div>
                  <div className="cd-item">
                    <span>32</span>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-about-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="ha-pic">
                  <img src="img/nishan-varun-movies.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ha-text">
                  <h2>About Nishan Varun Movies</h2>
                  <p>
                    Nishan Varun Movies is a well reowned production company by
                    three friends who have been best Friends for over 20years.
                    They aim to produce more creative and great movies in tulu
                    industry over the coming years and want to entertain.
                    NishanVarun Movies will release their first movie in Tulu
                    industry "Pepperere Pererere" on December 18th 2020. The
                    movie has casted the best actors Tulunad has seen for
                    decades & is sure to be one among the best movies tulunad
                    has given us.
                  </p>
                  <ul>
                    <li>
                      <span className="icon_check"></span>100% Entertainment
                    </li>
                    <li>
                      <span className="icon_check"></span>Multi-language movie
                      (Kannada | Tulu)
                    </li>
                    <li>
                      <span className="icon_check"></span>Total Comedy
                      Entertainer
                    </li>
                  </ul>
                  <a
                    href="https://www.youtube.com/watch?v=B3P1xFNSFUI"
                    target="_blank"
                    className="ha-btn"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pricing-section set-bg spad"
          data-setbg="img/pricing-bg.jpg"
          style={{ backgroundImage: `url(img/pricing-bg.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Ticket Pricing</h2>
                  <p>Get your event ticket plan</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-8">
                <div className="price-item">
                  <h4>1 Time Pass</h4>
                  <div className="pi-price">
                    <h2>
                      <span>₹</span>249
                    </h2>
                  </div>
                  <ul>
                    <li>1x Ticket</li>
                    <li>1x Lucky Contest Entry</li>
                    <li>English Subtitles</li>
                    <li>Tulu / Kannada Language</li>
                    <li>For Indian Users Only</li>
                  </ul>
                  <button onClick={() => this.addToCart(0)}>Add to Cart</button>
                  <a href="https://imjo.in/rPg657" className="price-btn">
                    Get Ticket <span className="arrow_right"></span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div className="price-item top-rated">
                  <div className="tr-tag">
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>Group Pass</h4>
                  <div className="pi-price">
                    <h2>
                      <span>₹</span>2241
                    </h2>
                  </div>
                  <ul>
                    <li>Pay For 9 and Get 1 For Free</li>
                    <li>10x Ticket</li>
                    <li>10x Lucky Contest Entry</li>
                    <li>English Subtitles</li>
                    <li>Tulu / Kannada Language</li>
                    <li>For Indian Users Only</li>
                  </ul>
                  <button onClick={() => this.addToCart(1)}>Add to Cart</button>

                  <a href="https://imjo.in/FeTWcK" className="price-btn">
                    Get Ticket <span className="arrow_right"></span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
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
                    <li>English Subtitles</li>
                    <li>Tulu / Kannada Language</li>
                    <li>Broadcast Globally</li>
                  </ul>
                  <button onClick={() => this.addToCart(2)}>Add to Cart</button>

                  <a href="https://imjo.in/UWXVnc" className="price-btn">
                    Get Ticket <span className="arrow_right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="schedule-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Lucky Contest</h2>
                  <p>Participate and win super exciting prizes</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="schedule-tab">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-1"
                        role="tab"
                      >
                        <h5>Lucky Contest 1</h5>
                        <p>August 23, 2020</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-2"
                        role="tab"
                      >
                        <h5>Lucky Contest 2</h5>
                        <p>September 27, 2020</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-3"
                        role="tab"
                      >
                        <h5>Lucky Contest 3</h5>
                        <p>Octomber 25, 2020</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-4"
                        role="tab"
                      >
                        <h5>Lucky Contest 4</h5>
                        <p>November 29, 2020</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-5"
                        role="tab"
                      >
                        <h5>Lucky Contest 5</h5>
                        <p>December 18, 2020</p>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="st-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="sc-pic">
                                <img
                                  src="img/pepperere-pererere-tulu-movie-contest1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="sc-text">
                                <h4>Trailer Release</h4>
                                <ul>
                                  <li>
                                    <i className="fa fa-gift"></i> Samsung Tab
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <ul className="sc-widget">
                                <li>
                                  <i className="fa fa-clock-o"></i> 3:00pm
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i> Youtube
                                  Live
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                      <div className="st-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="sc-pic">
                                <img
                                  src="img/pepperere-pererere-tulu-movie-contest2.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="sc-text">
                                <h4>Trailer Release</h4>
                                <ul>
                                  <li>
                                    <i className="fa fa-gift"></i> Samsung
                                    Smartphone
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <ul className="sc-widget">
                                <li>
                                  <i className="fa fa-clock-o"></i> 3:00pm
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i> Youtube
                                  Live
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                      <div className="st-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="sc-pic">
                                <img
                                  src="img/pepperere-pererere-tulu-movie-contest3.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="sc-text">
                                <h4>Movie Release</h4>
                                <ul>
                                  <li>
                                    <i className="fa fa-gift"></i> Dell Laptop
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <ul className="sc-widget">
                                <li>
                                  <i className="fa fa-clock-o"></i> 3:00pm
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i> Youtube
                                  Live
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-4" role="tabpanel">
                      <div className="st-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="sc-pic">
                                <img
                                  src="img/pepperere-pererere-tulu-movie-contest4.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="sc-text">
                                <h4>Trailer Release</h4>
                                <ul>
                                  <li>
                                    <i className="fa fa-gift"></i> Suzuki Access
                                    125
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <ul className="sc-widget">
                                <li>
                                  <i className="fa fa-clock-o"></i> 3:00pm
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i> Youtube
                                  Live
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-5" role="tabpanel">
                      <div className="st-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="sc-pic">
                                <img
                                  src="img/pepperere-pererere-tulu-movie-contest5.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="sc-text">
                                <h4>Movie Release</h4>
                                <ul>
                                  <li>
                                    <i className="fa fa-gift"></i> Swift Car
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <ul className="sc-widget">
                                <li>
                                  <i className="fa fa-clock-o"></i> 3:00pm
                                </li>
                                <li>
                                  <i className="fa fa-map-marker"></i> Youtube
                                  Live
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="latest-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Latest News</h2>
                  <p>Do not miss anything topic abput the event</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="latest-item set-bg large-item"
                  data-setbg="img/blog/latest-b/latest-1.jpg"
                  style={{ background: `url(img/blog/latest-b/latest-1.jpg)` }}
                />
                <div className="li-tag">Song</div>
                <div className="li-text">
                  <h4>
                    <a href="https://www.youtube.com/watch?v=B3P1xFNSFUI">
                      800k Views
                    </a>
                  </h4>
                  <span>
                    <i className="fa fa-clock-o"></i> Atala vithala shoora video
                    song
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="latest-item set-bg"
                data-setbg="img/blog/latest-b/latest-2.jpg"
                style={{ background: `url(img/blog/latest-b/latest-2.jpg)` }}
              >
                <div className="li-tag">Song</div>
                <div className="li-text">
                  <h5>
                    <a href="https://www.youtube.com/watch?v=B3P1xFNSFUI">
                      800k Views.
                    </a>
                  </h5>
                  <span>
                    <i className="fa fa-clock-o"></i> Atala vithala shoora video
                    song
                  </span>
                </div>
              </div>
              <div
                className="latest-item set-bg"
                data-setbg="img/blog/latest-b/latest-3.jpg"
                style={{ background: `url(img/blog/latest-b/latest-3.jpg)` }}
              >
                <div className="li-tag">Song</div>
                <div className="li-text">
                  <h5>
                    <a href="https://www.youtube.com/watch?v=B3P1xFNSFUI">
                      800k Views.
                    </a>
                  </h5>
                  <span>
                    <i className="fa fa-clock-o"></i> Atala vithala shoora video
                    song
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newslatter-section">
          <div className="container">
            <div
              className="newslatter-inner set-bg"
              data-setbg="img/newslatter-bg.jpg"
              style={{ background: `url(img/newslatter-bg.jpg)` }}
            >
              <div className="ni-text">
                <h3>Subscribe To Our Whatsapp</h3>
                <p>
                  Dont miss out on anything! Get updates on Contest & Movies
                </p>
              </div>
              <form action="#" className="ni-form">
                <input type="number" placeholder="Whatsapp Number" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>Have any queries</h2>
                  <p>Feel free to get in touch with us!</p>
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
                  <div className="ct-links">
                    <span>Email:</span>
                    <a href="contact@nishanvarumovies.com" target="_blank">
                      {" "}
                      <p>contact@nishanvarumovies.com</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="cs-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.39881927885!2d74.7820230583424!3d12.922982868390962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1597689859183!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-section">
          <div className="container">
            <div className="partner-logo owl-carousel">
              <a href="#" className="pl-table">
                <div className="pl-tablecell">
                  <img src="img/v4-stream-best-tulu-movie.png" alt="" />
                </div>
              </a>
              <a href="#" className="pl-table">
                <div className="pl-tablecell">
                  <img src="img/anagha-suzuki-best-tulu-movie.png" alt="" />
                </div>
              </a>
              <a href="#" className="pl-table">
                <div className="pl-tablecell">
                  <img src="img/1.png" alt="" />
                </div>
              </a>
              <a href="#" className="pl-table">
                <div className="pl-tablecell">
                  <img src="img/2.png" alt="" />
                </div>
              </a>
              <a href="#" className="pl-table">
                <div className="pl-tablecell">
                  <img src="img/3.png" alt="" />
                </div>
              </a>
              <a href="#" className="pl-table">
                <div className="pl-tablecell">
                  <img src="img/4.png" alt="" />
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
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="/aboutus">About</a>
                    </li>
                    <li>
                      <a href="#contest">Lucky Contest</a>
                    </li>
                    <li>
                      <a href="#">Updates</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                  <div className="copyright-text">
                    <p>
                      Copyright &copy;
                      <script>
                        document.write(new Date().getFullYear());
                      </script>{" "}
                      All rights reserved | Developed by{" "}
                      <a href="http://alomitetechnologies.com/" target="_blank">
                        Alomite Technologies
                      </a>
                    </p>
                  </div>
                  <div className="ft-social">
                    <a
                      href="https://www.facebook.com/pepperere.pererere.movie/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/pepperere_pererere_/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCTzswaKr1frZTc6a484M6iQ"
                      target="_blank"
                    >
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

function mapToProps({ user, cart }) {
  return { user, cart };
}
export default connect(mapToProps)(Home);
