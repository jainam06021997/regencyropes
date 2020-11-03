import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";
import PPROPE from '../assets/images/pprope.jpg';

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  const aboutUs = `M.M. Plastic Industries having experience over 40 years in
  the stream of Plastic strapping Broom Wire, Plastic basket
  Wire, Monofilament Yarn, etc which are widely praised and
  preferred in the market. The utilization of the finest raw
  materials and modern machines, make the product sturdy,
  durable, resistant to heat and gives it a fine finishing.`;

  const aboutUs1 = `The facility equipped with all the necessary machinery and
  equipment, helps us in the attainment of several of the
  firm's goals and objectives, in the most effective manner. In
  addition to these, the firm's abidance of ethics and industry
  standards, have helped us generate a huge highly reputed
  client base. Our products are widely used in Government
  Institution; garment Industry, imitation, and fashion
  industry, sports equipment, packing, and packaging
  industry`;

  return (
    <section className="banner-one" id="home">
      {/* <img src={BannerShape} className="banner-one__bg-shape-1" alt="" /> */}
      {/* <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div> */}
      <div className="container">
        {/* <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        />
        <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div> */}
        {/* <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div> */}
        <div className="row">
          <div className="col-md-3">
            {/* <div className="banner-one__content"> */}
              <img src={PPROPE} alt="founder" />
            {/* </div> */}
          </div>
          <div className="col-md-9">
            {/* <div className="banner-one__content"> */}
              {/* <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                <input type="text" name="email" placeholder="Email address" />
                <button type="submit" className="thm-btn banner-one__mc-btn">
                  <span>Free Trial</span>
                </button>
              </form> */}
              {/* <div className="mc-form__response"></div> */}
              {/* <h3>
                Manage Your <br /> Project with <br /> Application
              </h3> */}
              <p>
                {aboutUs}
                {/* Ridhi Sidhi Poly Ropes having experience over 50 years in the stream of Plastic Ropes,Yarn, Twines etc which are widely praised and preferred in the market. Th e utilization of the finest raw materials and modern machines,make the product sturdy,durable, resistant to heat and gives it a fine finishing. */}
                <br />
                {aboutUs1}
                {/* The facility equipped with all the necessary machinery and equipment, helps us in the attainment of several of the firm's goals and objectives, in the most effective manner. In addition to these, the firm's abidance of ethics and industry standards,have helped us generate a huge highly reputed client base. Our products are widely used in Marine Institution; garment Industry,Polutry Industry , sports equipment, packing, and packaging industry. */}
              </p>
              {/* <a href="#" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
