import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Lazy } from "swiper"; // Убрали Autoplay
import "swiper/css"; // Основные стили Swiper
import "swiper/css/bundle"; // Стили для эффекта coverflow

// Импортируем изображения
import Green from "../images/color_lent/Зеленый_8.jpg";
import Red from "../images/color_lent/Красный_9.jpg";
// import Azure from "../images/color_lent/Лазурный.png";
// import Orchid from "../images/color_lent/Орхидейный.png";
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

  // Состояние для активного слайда
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

  // Обработчик клика по кнопке "Заказать"
  const handleOrderClick = () => {
    setShowModal(true);
  };

  // Обработчики для hover-эффектов кнопки
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
    <section id="products" style={{ padding: "50px 0" }}>
      <Container>
        {/* Заголовок */}
        <Row>
          <Col>
            <div
              style={{
                textAlign: "center",
                marginTop: "50px", // Отступ от верхней границы контейнера
              }}
            >
              <h1
                style={{
                  fontSize: "78px",
                  color: "#FF5708",
                  marginTop: "0",
                }}
              >
                Ленты выпускника
              </h1>
              <h2
                style={{
                  fontSize: "48px",
                }}
              >
                с индивидуальным дизайном
              </h2>
            </div>
          </Col>
        </Row>

        {/* Слайдер Swiper */}
        <Row>
          <Col>
            <Swiper
              effect="coverflow" // Эффект coverflow
              grabCursor={true} // Курсор в виде руки
            //   centeredSlides={true} // Центрирование текущего слайда
              slidesPerView="auto" // Автоматическое количество видимых слайдов
              coverflowEffect={{
                rotate: 0, // Угол поворота слайдов
                stretch: 0, // Растяжение слайдов
                depth: 100, // Глубина эффекта
                modifier: 2, // Модификатор эффекта
                slideShadows: false, // Отключение теней
              }}
              //   loop={true} // Бесконечная прокрутка
              lazy={true} // Включение ленивой загрузки
              preloadImages={true} // Отключение предзагрузки всех изображений
              onSwiper={setSwiper} // Сохраняем инстанс Swiper
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Обновляем активный индекс
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={slide} // Используем data-src для ленивой загрузки
                    data-src={slide} // Используем data-src для ленивой загрузки
                    alt={`Slide ${index + 1}`}
                    className="swiper-lazy" // Класс для ленивой загрузки
                    style={{
                      width: "100%",
                      borderRadius: "10px", // Скругленные углы
                    }}
                  />
                  {/* Индикатор загрузки */}
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>

        {/* Текст "Цвет ленты" */}
        <Row className="justify-content-center" style={{ marginTop: "40px" }}>
          <Col xs="auto">
            <div
              style={{
                fontSize: "21px",
                color: "#000000",
                textTransform: "uppercase", // Все буквы заглавные
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
            <div
              style={{
                display: "flex",
                gap: "20px", // Расстояние между кнопками
              }}
            >
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (swiper) {
                      swiper.slideTo(index); // Переключаем слайдер
                    }
                  }}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    border: activeIndex === index ? "2px solid #000" : "none", // Активная кнопка
                    cursor: "pointer",
                  }}
                  aria-label={`Перейти к слайду ${index + 1}`} // Добавлено для доступности
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
                transition:
                  "background-color 0.3s, color 0.3s, border-color 0.3s",
              }}
              onMouseOver={handleHover}
              onMouseOut={handleLeave}
              onFocus={handleHover} // Добавлено для доступности
              onBlur={handleLeave} // Добавлено для доступности
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
