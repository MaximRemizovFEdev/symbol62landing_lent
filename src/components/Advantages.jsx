import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Advantages = () => {
  // Объект со стилями
  const styles = {
    advantages: {
      padding: "0 0 50px", // Отступы сверху и снизу
    },
    advantages__title: {
      fontSize: "48px", // Размер текста
      color: "#F5F2F1", // HEX для C:24 M:17 Y:18 K:3
      whiteSpace: "nowrap", // Текст в одну строку
      textAlign: "center", // Выравнивание по центру
      width: "100%", // Занимает всю ширину
      fontWeight: "bolder",
    },
    advantages__row: {
      display: "flex", // Flexbox для выравнивания высоты колонок
      alignItems: "stretch", // Растягиваем колонки на всю высоту
      marginTop: "40px",
    },
    advantages__leftCol: {
      backgroundColor: "rgba(0, 0, 0, 0.3)", 
      borderRadius: "30px", // Скругленные края
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: "100%", // Высота как у правой колонки
    },
    advantages__leftColText: {
      fontSize: "32px", // Размер текста
      color: "#000000", // Черный цвет
      fontWeight: "bold", // Жирный текст
    },
    advantages__rightCol: {
      paddingLeft: "40px", // Отступ слева
    },
    advantages__rightColBold: {
      fontSize: "32px", // Размер текста
      color: "#FF5708", // Оранжевый цвет
      fontWeight: "bold", // Жирный текст
      marginBottom: "1px", // Отступ снизу
    },
    advantages__rightColRegular: {
      fontSize: "16px", // Размер текста
      color: "#000000", // Черный цвет
      marginBottom: "16px", // Отступ снизу
    },
  };

  return (
    <section style={styles.advantages}>
      <Container>
        {/* Первый Row: Заголовок */}
        <Row>
          <Col>
            <div style={styles.advantages__title}>КАЧЕСТВО СРОКИ ЦЕНА</div>
          </Col>
        </Row>

        {/* Второй Row: Две колонки */}
        <Row style={styles.advantages__row}>
          {/* Левая колонка */}
          <Col md={2}></Col>
          <Col md={4} style={styles.advantages__leftCol}>
            <div style={styles.advantages__leftColText}>Преимущества</div>
          </Col>

          {/* Правая колонка */}
          <Col md={6} style={styles.advantages__rightCol}>
            <div style={styles.advantages__rightColBold}>8 лет</div>
            <div style={styles.advantages__rightColRegular}>
              мы производим сувенирную продукцию
            </div>

            <div style={styles.advantages__rightColBold}>Более 37 317 человек</div>
            <div style={styles.advantages__rightColRegular}>
              носят текстильную продукцию нашего производства
            </div>

            <div style={styles.advantages__rightColBold}>Собственное производство</div>
            <div style={styles.advantages__rightColRegular}>
              для комфортных цен и сроков под каждый заказ
            </div>

            <div style={styles.advantages__rightColBold}>Оперативное изготовление</div>
            <div style={styles.advantages__rightColRegular}>
              От согласования макета до готовности - 2 дня
            </div>

            <div style={styles.advantages__rightColBold}>Качественные материалы</div>
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