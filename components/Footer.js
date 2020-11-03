import React from "react";

import FooterLogo from "../assets/images/logo-1-1.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__upper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-widget footer-widget__about">
                <a href="index.html">
                  <img src={FooterLogo} width="129" alt="" />
                </a>
                <p>
                  Ridhi Sidhi Poly Ropes having experience over 50 years in the stream of Plastic Ropes,Yarn, Twines etc which are widely praised and preferred in the market. Th e utilization of the finest raw materials and modern machines,make the product sturdy,durable, resistant to heat and gives it a fine finishing. 
                </p>
              </div>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-4">
              <div className="footer-widget__links-wrap">
                <div className="footer-widget">
                  <h3 className="footer-widget__title">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>   Location</span>
                  </h3>
                  <p>
                    133/5, Aruna Ramesh Building,
                    <br />
                    Mamulpet. Bangalore - 560053.
                  </p>

                  <br/>

                  <h3 className="footer-widget__title">
                    <i className="fas fa-envelope"></i>
                    <span>   Email</span>
                  </h3>
                  <ul className="list-unstyled footer-widget__links-list">
                    <li>
                      <span>deepak@regencyropes.in</span>
                    </li>
                    <li>
                      <span>info@regencyropes.in</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
              <div className="footer-widget">
                <div className="footer-widget__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container text-center">
          <p>© copyright 2020 by M.M. PLASTIC INDUSTRIES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
