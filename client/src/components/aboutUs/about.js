import React, { Component } from 'react'

export default class about extends Component {
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
        {/* Breadcrumb Section Begin */}
        <section className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <h2>About Us</h2>
                  <div className="bt-option">
                    <a href="#">Home</a>
                    <span>About</span>
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
                  <h2>Something About Us</h2>
                  <p className="f-para">There are several ways people can make money online. From selling products to advertising. In this article I am going to explain the concept of contextual advertising.</p>
                  <p>First I will explain what contextual advertising is. Contextual advertising means the advertising of products on a website according to the content the page is displaying. For example if the content of a website was information on a Ford truck then the advertisements would be for Ford trucks for sale, or Ford servicing etc. It picks up the words on the page and displays ads that are similar to those words. Then when someone either performs an action or clicks on your page you will get paid.</p>
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
                  <h3>The 2019 Conference</h3>
                  <p>When I first got into the online advertising business, I was looking for the magical combination that would put my website into the top search engine rankings, catapult me to the forefront of the minds or individuals looking to buy my product, and generally make me rich beyond my wildest dreams! After succeeding in the business for this long, I’m able to look back on my old self with this kind of thinking and shake my head. </p>
                  <ul>
                    <li><span className="icon_check" /> Write On Your Business Card</li>
                    <li><span className="icon_check" /> Advertising Outdoors</li>
                    <li><span className="icon_check" /> Effective Advertising Pointers</li>
                    <li><span className="icon_check" /> Kook 2 Directory Add Url Free</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}
        {/* Team Member Section Begin */}
        <section className="team-member-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Who’s speaking</h2>
                  <p>These are our communicators, you can see each person information</p>
                </div>
              </div>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-1.jpg"
          style={{backgroundImage : `url(img/team-member/member-1.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-2.jpg"
          style={{backgroundImage : `url(img/team-member/member-2.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-3.jpg"
          style={{backgroundImage : `url(img/team-member/member-3.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-4.jpg"
          style = {{backgroundImage : `url(img/team-member/member-4.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-5.jpg"
          style={{backgroundImage : `url(img/team-member/member-5.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-6.jpg"
          style={{backgroundImage : `url(img/team-member/member-6.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-7.jpg"
          style={{backgroundImage:`url(img/team-member/member-7.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-8.jpg"
          style={{backgroundImage:`url(img/team-member/member-8.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-9.jpg"
          style={{backgroundImage : `url(img/team-member/member-9.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Emma Sandoval</h5>
              <span>Speaker</span>
            </div>
          </div>
          <div className="member-item set-bg" data-setbg="img/team-member/member-10.jpg"
          style={{backgroundImage : `url(img/team-member/member-10.jpg)`}}>
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
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
        <section className="pricing-section set-bg spad" data-setbg="img/pricing-bg.jpg"
        style={{backgroundImage : `url(img/pricing-bg.jpg)`}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Ticket Pricing</h2>
                  <p>Get your event ticket plan</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="price-item">
                  <h4>1 Day Pass</h4>
                  <div className="pi-price">
                    <h2><span>$</span>129</h2>
                  </div>
                  <ul>
                    <li>One Day Conference Ticket</li>
                    <li>Coffee-break</li>
                    <li>Lunch and Networking</li>
                    <li>Keynote talk</li>
                    <li>Talk to the Editors Session</li>
                  </ul>
                  <a href="#" className="price-btn">Get Ticket <span className="arrow_right" /></a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="price-item top-rated">
                  <div className="tr-tag">
                    <i className="fa fa-star" />
                  </div>
                  <h4>Full Pass</h4>
                  <div className="pi-price">
                    <h2><span>$</span>199</h2>
                  </div>
                  <ul>
                    <li>One Day Conference Ticket</li>
                    <li>Coffee-break</li>
                    <li>Lunch and Networking</li>
                    <li>Keynote talk</li>
                    <li>Talk to the Editors Session</li>
                    <li>Lunch and Networking</li>
                    <li>Keynote talk</li>
                  </ul>
                  <a href="#" className="price-btn">Get Ticket <span className="arrow_right" /></a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="price-item">
                  <h4>Group Pass</h4>
                  <div className="pi-price">
                    <h2><span>$</span>79</h2>
                  </div>
                  <ul>
                    <li>One Day Conference Ticket</li>
                    <li>Coffee-break</li>
                    <li>Lunch and Networking</li>
                    <li>Keynote talk</li>
                    <li>Talk to the Editors Session</li>
                  </ul>
                  <a href="#" className="price-btn">Get Ticket <span className="arrow_right" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section End */}
        {/* Newslatter Section Begin */}
        <section className="newslatter-section about-newslatter">
          <div className="container">
            <div className="newslatter-inner set-bg" data-setbg="img/newslatter-bg.jpg"
            style={{backgroundImage : `url(img/newslatter-bg.jpg)`}}>
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
              <div className="col-lg-6">
                <div className="cs-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38789495531!2d-118.19465514866786!3d34.03523211493029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9f%3A0x518b28657f4543b7!2sEast%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579763856144!5m2!1sen!2sbd" height={400} style={{border: 0}} allowFullScreen />
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
