import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

// Импортируем изображения
import One from "../images/examples/1.png";
import Two from "../images/examples/2.png";
import Three from "../images/examples/3.png";
import Four from "../images/examples/4.png";
import Five from "../images/examples/5.png";
import Six from "../images/examples/6.png";
import Seven from "../images/examples/7.png";
import Eight from "../images/examples/8.png";
import Nine from "../images/examples/9.png";
import Ten from "../images/examples/10.png";
import Eleven from "../images/examples/11.png";
import Twelve from "../images/examples/12.png";
import Thirteen from "../images/examples/13.png";
import Fourteen from "../images/examples/14.png";
import Fifteen from "../images/examples/15.png";
import Sixteen from "../images/examples/16.png";
import Seventeen from "../images/examples/17.png";

// Инициализация модулей Swiper
SwiperCore.use([Autoplay, EffectCoverflow, Lazy]);

const PhotoSlider = () => {
  // Массив с изображениями для слайдов
  const slides = [
    One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
    Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen
  ];

  return (
    <section style={{ backgroundColor: "#F5F2F1", padding: "50px 0" }}>
      <Container>
        {/* Слайдер Swiper */}
        <Swiper
          effect="coverflow" // Эффект coverflow
          grabCursor={true} // Курсор в виде руки
          centeredSlides={true} // Центрирование текущего слайда
          slidesPerView="auto" // Автоматическое количество видимых слайдов
          coverflowEffect={{
            rotate: 0, // Угол поворота слайдов
            stretch: 0, // Растяжение слайдов
            depth: 100, // Глубина эффекта
            modifier: 2, // Модификатор эффекта
            slideShadows: false, // Отключение теней
          }}
          autoplay={{
            delay: 1000, // Автоматическая прокрутка каждую секунду
            disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
          }}
          loop={true} // Бесконечная прокрутка
          lazy={true} // Включение ленивой загрузки
          preloadImages={false} // Отключение предзагрузки всех изображений
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
      </Container>
    </section>
  );
};

export default PhotoSlider;
