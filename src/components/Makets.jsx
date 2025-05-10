import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

// Импортируем изображения
import Green from "../images/color_lent/Зеленый_8.jpg";
import Red from "../images/color_lent/Красный_9.jpg";
import PinkLilac from "../images/color_lent/Розовый_5.jpg";
import Silver from "../images/color_lent/Серебристый_3.jpg";
import Blue from "../images/color_lent/Синий_7.jpg";
import Purple from "../images/color_lent/Фиолетовый_4.jpg";
import RequestModal from "./RequestModal";

// Инициализация модулей Swiper
SwiperCore.use([EffectCoverflow, Lazy]);

const Makets = () => {
  // Массив с изображениями для слайдов
  const slides = [Green, Red, PinkLilac, Silver, Blue, Purple];

  const [showModal, setShowModal] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Цвета для кнопок
  const colors = [
    "#4CAF50", // Зеленый
    "#F44336", // Красный
    "#E91E63", // Розово-лиловый
    "#9E9E9E", // Серебристый
    "#2196F3", // Синий
    "#673AB7", // Фиолетовый
  ];

  const handleOrderClick = () => {
    setShowModal(true);
  };

  const handleHover = (e) => {
    e.target.style.backgroundColor = "#FF5708";
    e.target.style.color = "white";
    e.target.style.borderColor = "white";
  };

  const handleLeave = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#FF5708";
    e.target.style.borderColor = "#FF5708";
  };

  return (
    <section id="products" style={{ padding: "50px 0", overflow: "hidden" }}>
      {/* Заголовок в контейнере */}
      <Container>
        <Row>
          <Col>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1 style={{ fontSize: "78px", color: "#FF5708", marginTop: "0" }}>
                Ленты выпускника
              </h1>
              <h2 style={{ fontSize: "48px" }}>
                с индивидуальным дизайном
              </h2>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Слайдер на всю ширину */}
      <div style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          lazy={true}
          preloadImages={true}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{
            padding: "40px 0",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide 
              key={index}
              style={{
                width: "100%",
                // maxWidth: "600px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={slide}
                data-src={slide}
                alt={`Лента выпускника ${index + 1}`}
                className="swiper-lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Остальной контент в контейнере */}
      <Container>
        {/* Текст "Цвет ленты" */}
        <Row className="justify-content-center" style={{ marginTop: "40px" }}>
          <Col xs="auto">
            <div
              style={{
                fontSize: "21px",
                color: "#000000",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Цвет ленты
            </div>
          </Col>
        </Row>

        {/* Кастомные кнопки-кружочки */}
        <Row className="justify-content-center" style={{ marginTop: "20px" }}>
          <Col xs="auto">
            <div style={{ display: "flex", gap: "20px" }}>
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => swiper?.slideTo(index)}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    border: activeIndex === index ? "2px solid #000" : "none",
                    cursor: "pointer",
                  }}
                  aria-label={`Цвет ${index + 1}`}
                />
              ))}
            </div>
          </Col>
        </Row>

        {/* Кнопка "Заказать" */}
        <Row className="justify-content-center" style={{ marginTop: "40px" }}>
          <Col xs="auto">
            <button
              onClick={handleOrderClick}
              style={{
                backgroundColor: "white",
                color: "#FF5708",
                border: "2px solid #FF5708",
                borderRadius: "10px",
                padding: "10px 30px",
                fontSize: "22px",
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
              }}
              onMouseOver={handleHover}
              onMouseOut={handleLeave}
              onFocus={handleHover}
              onBlur={handleLeave}
            >
              Заказать
            </button>
          </Col>
        </Row>
      </Container>

      <RequestModal show={showModal} onHide={() => setShowModal(false)} />
    </section>
  );
};

export default Makets;