import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Thumbs, Controller, Autoplay } from "swiper";
SwiperCore.use([Pagination, Thumbs, Controller]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import TestiQoute from "../assets/images/shapes/testi-qoute-1-1.png";

import TestiImageOne from "../assets/images/resources/testi-1-1.jpg";
import TestiImageTwo from "../assets/images/resources/testi-1-2.jpg";
import TestiImageThree from "../assets/images/resources/testi-1-3.jpg";

const Testimonials = (props) => {
  const paramsTwo = {
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-one__pagination-wrap .swiper-pagination",
      clickable: true,
    },
  };

  const params = {
    speed: 1400,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      // renderBullet: (index, className) => {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // }
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    slidesPerView: 1,
    rebuildOnUpdate: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
  };

  const paramsOne = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1400,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  const productsList = [
    {
      id: 1,
      name: 'BASKET WIRE',
      image: TestiImageOne,
      description: `Kodai or plastic wire baskets are made from high-quality raw
      materials knitted by women in the southern part of the country.
      The diverse range of Koodai products is best to use for all
      purposes because of its strength to carry heavy loads,
      robustness, long-lasting colors, and the smooth fibre used in it.`,
      applications: [
        {id: 1, label: `Koodai baskets and handbag`},
      ],
      characteristics: [
        {id: 1, label: `Made from 100% PE virgin plastics`},
        {id: 2, label: `Free from hazardous metals`},
      ],
      availability: [
        {id: 1, label: `Available in various shades like Pearl, Metallic`},
        {id: 2, label: `Customization of size and shape is possible`},
        {id: 3, label: `Around 30 Shade Available`},
      ],
    },
    {
      id: 2,
      name: 'CHAIR WIRE',
      image: TestiImageTwo,
      description: `Kodai or plastic wire baskets are made from high-quality raw
      materials knitted by women in the southern part of the country.
      The diverse range of Koodai products is best to use for all
      purposes because of its strength to carry heavy loads,
      robustness, long-lasting colors, and the smooth fibre used in it.`,
      applications: [
        {id: 1, label: `Koodai baskets and handbag`},
      ],
      characteristics: [
        {id: 1, label: `Made from 100% PE virgin plastics`},
        {id: 2, label: `Free from hazardous metals`},
      ],
      availability: [
        {id: 1, label: `Available in various shades like Pearl, Metallic`},
        {id: 2, label: `Customization of size and shape is possible`},
        {id: 3, label: `Around 30 Shade Available`},
      ],
    },
  ];

  const _getQuote = (product) => {

  };

  return (
    <section className="testimonials-one" id="products">
      <Container>
      {productsList.map((product) => {
        return (
          <div className="content">
            <Row key={product.id}>
              <Col xl={4}>
                <div>
                  <BlockTitle
                    textAlign="center"
                    titleText={product.name}
                    paraText={''}
                  />
                  <img src={product.image} width="200" height="220" alt="rope" />
                </div>
                <div style={{justifyContent: 'center', margin: 10}}>
                  <button type="button" className="thm-btn banner-one__mc-btn" onClick={() => _getQuote(product)}>
                    <span>GET QUOTE</span>
                  </button>
                </div>
              </Col>
              <Col xl={8}>
                <div>
                  <h4>Product Details</h4>
                  <p>{product.description}</p>
                </div>
              </Col>
            </Row>
            <br />
            <hr />
            <br />
          </div>
        );
      })}
          {/* <Col xl={12}>
            <div className="testimonials-one__thumb-carousel-wrap">
              <Swiper {...params}>
                {productsList.map((product) => {
                  return (
                    <div className="testimonials-one__single" key={product.id}>
                      <BlockTitle
                        textAlign="center"
                        titleText={product.name}
                        paraText={product.description}
                      />
                      <Row>
                        <Col xl={4}>
                          <h4>APPLICATIONS</h4>
                          <ul>
                            {product.applications.map((application) => {
                              return <li key={application.id}>{application.label}</li>;
                            })}
                          </ul>
                        </Col>
                        <Col xl={4}>
                          <h4>CHARACTERISTICS</h4>
                          <ul>
                            {product.characteristics.map((characteristics) => {
                              return <li key={characteristics.id}>{characteristics.label}</li>;
                            })}
                          </ul>
                        </Col>
                        <Col xl={4}>
                          <h4>AVAILABITY</h4>
                          <ul>
                            {product.availability.map((availability) => {
                              return <li key={availability.id}>{availability.label}</li>;
                            })}
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </Col> */}
          {/* <Col xl={6}>
            <div className="testimonials-one__thumb-carousel-wrap">
              <div className="testimonials-one__icon">
                <div className="testimonials-one__icon-inner">
                  <img src={TestiQoute} alt="" />
                </div>
              </div>
              <div className="testimonials-one__thumb-carousel">
                <Swiper {...paramsOne}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageOne} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageTwo} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageThree} alt="Awesome Image" />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="my-auto">
              <BlockTitle
                textAlign="left"
                paraText="Our Products"
                titleText={`What Our Customers Are \n Talking About`}
              />
              <div className="testimonials-one__carousel">
                <Swiper {...paramsTwo}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>

                      <h3 className="testimonials-one__title">Joe Kolmer</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>

                      <h3 className="testimonials-one__title">Darrin Martos</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>

                      <h3 className="testimonials-one__title">Tammy Daniely</h3>
                    </div>
                  </div>
                </Swiper>
                <div className="testimonials-one__pagination-wrap">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </Col> */}
        {/* </Row> */}
      </Container>
    </section>
  );
};

export default Testimonials;
