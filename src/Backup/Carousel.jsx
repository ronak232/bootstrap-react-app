import React from "react";
import data from "../Components/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import styles from "../Components/Card.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Col } from "reactstrap";

function CarouselSlider() {
  return (
    <Col>
      <Swiper
        tag="div"
        modules={[Navigation, EffectFade]}
        slidesPerView={1}
        effect={"fade"}
        speed={800}
        navigation={true}
        autoplay={true}
        loop={true}
        className={styles.mySlider}
      >
        {data.carosuelSlider.map((item, index) => {
          const style = {
            background: `url(${item.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "cover",
            width: "100%",
            position: "relative",
            objectFit: "cover",
          };
          return (
            <SwiperSlide key={index} tag="div" className="col-12">
              <div className={`h-100 ${styles.sliderImages}`} style={style}>
                <div className={`container h-100 ${styles.bannerContainer}`}>
                  <div className="text-center">
                    <h2 className={styles.centerText}>{item.text}</h2>
                    <h1 className={styles.centerHeading}>{item.text2}</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Col>
  );
}

export default CarouselSlider;
