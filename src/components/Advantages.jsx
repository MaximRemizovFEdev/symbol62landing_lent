import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import pic from "../images/pic1.png"; // Импортируем background

const Advantages = () => {
  const styles = {
    advantages: {
      padding: "0 0 50px",
      marginTop: "-28px",
    },
    advantages__title: {
      fontSize: "78px",
      color: "#F5F2F1",
      whiteSpace: "nowrap",
      textAlign: "center",
      width: "100%",
      fontWeight: "bolder",
      marginRight: "20px",
    },
    advantages__row: {
      display: "flex",
      alignItems: "stretch",
      marginTop: "40px",
    },
    advantages__leftCol: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      borderRadius: "30px",
      display: "flex",
      flexDirection: "column", // Добавлено для вертикального расположения
      position: "relative", // Для позиционирования изображения
      overflow: "hidden",
      height: "70vh",
      padding: 0, // Убираем внутренние отступы колонки
    },
    advantages__leftColText: {
      fontSize: "32px",
      color: "#000000",
      fontWeight: "bold",
      padding: "20px", // Добавляем отступы для текста
      zIndex: 2, // Текст поверх изображения
      position: "relative", // Для z-index
      backgroundColor: "rgba(255, 255, 255, 0.7)", // Фон для лучшей читаемости
      borderRadius: "30px 30px 0 0", // Скругляем только верхние углы
    },
    advantages__leftColImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Заполняет пространство с сохранением пропорций
      position: "absolute", // Абсолютное позиционирование
      top: 0,
      left: 0,
    },
    advantages__rightCol: {
      paddingLeft: "40px",
    },
    advantages__rightColBold: {
      fontSize: "32px",
      color: "#FF5708",
      fontWeight: "bold",
      marginBottom: "1px",
    },
    advantages__rightColRegular: {
      fontSize: "16px",
      color: "#000000",
      marginBottom: "16px",
    },
  };

  return (
    <section id="about" style={styles.advantages}>
      {/* Первый Row: Заголовок */}
      <Marquee
        style={styles.marquee}
        speed={150} // Скорость прокрутки
        gradient={false} // Отключаем градиент по краям
        pauseOnHover={false} // Пауза при наведении
      >
        {"КАЧЕСТВО СРОКИ ЦЕНА КАЧЕСТВО СРОКИ ЦЕНА".split(" ").map((char, i) => (
          <span key={i} style={styles.advantages__title}>
            {char}
          </span>
        ))}
      </Marquee>
      <Container>
        {/* Второй Row: Две колонки */}
        <Row style={styles.advantages__row}>
          {/* Левая колонка */}
          <Col md={2}></Col>
          <Col md={4} style={styles.advantages__leftCol}>
            {/* <div style={styles.advantages__leftColText}>Преимущества</div> */}
            <img src={pic} alt="Преимущества" style={styles.advantages__leftColImage} />
          </Col>

          {/* Правая колонка */}
          <Col md={6} style={styles.advantages__rightCol}>
            <div style={styles.advantages__rightColBold}>8 лет</div>
            <div style={styles.advantages__rightColRegular}>
              мы производим сувенирную продукцию
            </div>

            <div style={styles.advantages__rightColBold}>
              Более 37 317 человек
            </div>
            <div style={styles.advantages__rightColRegular}>
              носят текстильную продукцию нашего производства
            </div>

            <div style={styles.advantages__rightColBold}>
              Собственное производство
            </div>
            <div style={styles.advantages__rightColRegular}>
              для комфортных цен и сроков под каждый заказ
            </div>

            <div style={styles.advantages__rightColBold}>
              Оперативное изготовление
            </div>
            <div style={styles.advantages__rightColRegular}>
              От согласования макета до готовности - 2 дня
            </div>

            <div style={styles.advantages__rightColBold}>
              Качественные материалы
            </div>
            <div style={styles.advantages__rightColRegular}>
              В производстве мы используем премиум ленты
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Advantages;
