import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo.png"; // Импортируем логотип
import bgPic from "../../images/bg1.png"; // Импортируем background
import RequestModal from "../RequestModal";
import "./style.css";
import Header from "./Header";

const HeaderScreen = () => {
  const [showModal, setShowModal] = useState(false);

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
      <Header />
      <img className={"bg"} src={bgPic} alt="символика" />
      <Container fluid="md" className={"content"}>
        <Row>
          <Col>
            {/* Заголовки и кнопка */}
            <div className={"titleWrapper"}>
              <h1 className={"mainTitle"}>Ленты выпускника</h1>
              <h2 className={"subTitle"}>с индивидуальным дизайном</h2>

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
