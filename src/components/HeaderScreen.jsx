import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png"; // Импортируем логотип
import bgPic from "../images/bg1.png"; // Импортируем background
import RequestModal from "./RequestModal";

const HeaderScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const styles = {
    bg: {
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: 1,
      objectFit: "cover",
    },
    content: {
      position: "relative",
      zIndex: 2,
    },
  };

  const handleOrderClick = () => {
    setShowModal(true);
  };

  // Функция для обработки наведения/фокуса
  const handleHover = (e) => {
    e.target.style.backgroundColor = "#FF5708";
    e.target.style.color = "white";
    e.target.style.borderColor = "white";
  };

  // Функция для обработки ухода/потери фокуса
  const handleLeave = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#FF5708";
    e.target.style.borderColor = "#FF5708";
  };

  return (
    <section
      style={{
        backgroundColor: "#FF5708",
        width: "100%",
        padding: "50px 0", // Отступы сверху и снизу для красоты
        overflow: "hidden",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <img style={styles.bg} src={bgPic} alt="символика" />
      <Container fluid="md" style={styles.content}>
        <Row>
          <Col>
            {/* Лого в правом углу */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "30px", // Отступ от верхней границы контейнера
              }}
            >
              <img
                src={logo} // Замените на путь к вашему лого
                alt="Лого"
                style={{ width: "100px", height: "50px" }}
              />
            </div>

            {/* Заголовки и кнопка */}
            <div
              style={{
                textAlign: "left",
                marginTop: "50px", // Отступ от верхней границы контейнера
              }}
            >
              <h1
                style={{
                  fontSize: "78px",
                  color: "#FFFFFF",
                  marginTop: "0",
                }}
              >
                Ленты выпускника
              </h1>
              <h2
                style={{
                  fontSize: "48px",
                  color: "#FFFFFF",
                }}
              >
                с индивидуальным дизайном
              </h2>

              {/* Кнопка "Заказать" */}
              <button
                onClick={handleOrderClick}
                style={{
                  backgroundColor: "white",
                  //   color: "#FF5708",
                  border: "2px solid #FF5708",
                  borderRadius: "10px",
                  padding: "10px 30px",
                  fontSize: "22px",
                  cursor: "pointer",
                  marginTop: "20px", // Отступ от заголовка
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
            </div>
          </Col>
        </Row>
      </Container>
      <RequestModal show={showModal} onHide={() => setShowModal(false)} />
    </section>
  );
};

export default HeaderScreen;
