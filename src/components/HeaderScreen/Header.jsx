import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import "./style.css";
import logo from "../../images/logo.png"; // Импортируем логотип

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <header className="fixed-header">
      <Container fluid="xxl">
        <Navbar expand="lg" className="header-navbar">
          {/* Бургер-меню для мобильных */}
          <div className="d-flex d-lg-none">
            <button
              className="burger-button"
              onClick={handleShowOffcanvas}
              aria-label="Открыть меню"
            >
              <List size={24} />
            </button>
          </div>

          {/* Основное меню - слева */}
          <Nav className="me-auto d-none d-lg-flex">
            <Nav.Link href="#about" className="nav-link">
              О компании
            </Nav.Link>
            <Nav.Link href="#products" className="nav-link">
              Наша продукция
            </Nav.Link>
            <Nav.Link href="#delivery" className="nav-link">
              Доставка и оплата
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Контакты
            </Nav.Link>
          </Nav>

          {/* Место под лого - справа */}
          <div className="logo-placeholder">
            <img
              src={logo} // Замените на путь к вашему лого
              alt="Лого"
              style={{ width: "100px", height: "50px" }}
            />
          </div>

          {/* Оффканвас меню для мобильных */}
          <Offcanvas
            show={showOffcanvas}
            onHide={handleCloseOffcanvas}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Меню</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link
                  href="#about"
                  className="nav-link"
                  onClick={handleCloseOffcanvas}
                >
                  О компании
                </Nav.Link>
                <Nav.Link
                  href="#products"
                  className="nav-link"
                  onClick={handleCloseOffcanvas}
                >
                  Наша продукция
                </Nav.Link>
                <Nav.Link
                  href="#delivery"
                  className="nav-link"
                  onClick={handleCloseOffcanvas}
                >
                  Доставка и оплата
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className="nav-link"
                  onClick={handleCloseOffcanvas}
                >
                  Контакты
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
