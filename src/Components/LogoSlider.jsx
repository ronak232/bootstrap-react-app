import React from "react";
import { Col, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import styles from "../Components/Card.module.css";
import data from "../Components/data.json";
import "swiper/css";
import "swiper/css/navigation";

function LogoSlider() {
  // We can use it's core functionality
  // To configue the Slider as we want to it to be
  SwiperCore.use([Autoplay]);
  return (
    <section className={styles.sliderSection}>
      <div className="container">
        <Row>
          <Col md={12}>
            <Swiper
              tag="div"
              modules={[Navigation]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,

                  navigation: "true",
                },
              }}
            >
              {data.slider.map((item, index) => {
                return (
                  <SwiperSlide key={index} tag="div">
                    <img
                      src={`${item.image}`}
                      alt=""
                      className={styles.sliderImgs}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default LogoSlider;
