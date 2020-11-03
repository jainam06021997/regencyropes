import React from "react";
import { Container, Row } from "react-bootstrap";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import appImage1 from "../assets/images/app-shots/app-shot-n-1-1.png";
import appImage2 from "../assets/images/app-shots/app-shot-n-1-2.png";
import appImage3 from "../assets/images/app-shots/app-shot-n-1-3.png";
import appImage4 from "../assets/images/app-shots/app-shot-n-1-4.png";
import appImage5 from "../assets/images/app-shots/app-shot-n-1-5.png";
import PPROPE from "../assets/images/pprope.jpg";
import HDPEROPE from "../assets/images/hdperope.jpg";
import PLASTICSUTLI from "../assets/images/plasticsutli.jpg";

const AppScreen = (props) => {
  const params = {
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
    slidesPerView: 3,
    rebuildOnUpdate: true,
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      767: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
      991: {
        slidesPerGroup: 2,
        slidesPerView: 3,
      },
      1499: {
        slidesPerGroup: 5,
        slidesPerView: 5,
      },
    },
  };

  const IMGS = [
    {id: 1, image: PPROPE},
    {id: 2, image: HDPEROPE},
    {id: 3, image: PLASTICSUTLI},
    {id: 4, image: appImage1},
    {id: 5, image: appImage2},
    {id: 6, image: appImage3},
  ];

  return (
    <section className="app-shot-one" id="gallery">
      <Container fluid>
        <BlockTitle
          textAlign="center"
          paraText=""
          titleText={`Checkout Our Product Look`}
        />
        <div className="app-shot-one__carousel">
          <Swiper {...params}>
            {IMGS.map((img) => {
              return (
                <div className="item" key={img.id}>
                  <img src={img.image} alt="Awesome Image" />
                </div>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default AppScreen;
