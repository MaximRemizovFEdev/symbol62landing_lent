import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaVk } from 'react-icons/fa';

const Footer = () => {
  const footerStyles = {
    footer: {
      backgroundColor: '#FF5708',
      color: 'white',
      padding: '50px 0',
      marginTop: '50px'
    },
    footer__logo: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '20px',
      display: 'block'
    },
    footer__title: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '20px',
      position: 'relative',
      paddingBottom: '10px',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '50px',
        height: '2px',
        backgroundColor: 'white'
      }
    },
    footer__link: {
      color: 'white',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '10px',
      transition: 'all 0.3s',
      '&:hover': {
        color: '#f0f0f0',
        textDecoration: 'underline'
      }
    },
    footer__icon: {
      marginRight: '10px',
      verticalAlign: 'middle'
    },
    footer__bottom: {
      borderTop: '1px solid rgba(255,255,255,0.2)',
      paddingTop: '20px',
      marginTop: '30px',
      fontSize: '14px'
    }
  };

  return (
    <footer style={footerStyles.footer}>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <span style={footerStyles.footer__logo}>UniverSymbols</span>
            <p>Производство и продажа сигнальных лент с 2010 года. Качественные материалы, надежные поставки.</p>
          </Col>

          <Col md={4} className="mb-4">
            <h3 style={footerStyles.footer__title}>Контакты</h3>
            <a href="tel:+79065435369" style={footerStyles.footer__link}>
              <FaPhone style={footerStyles.footer__icon} /> +7 (906) 543-53-69
            </a>
            <a href="mailto:info@universymbols.ru" style={footerStyles.footer__link}>
              <FaEnvelope style={footerStyles.footer__icon} /> info@universymbols.ru
            </a>
            <div style={footerStyles.footer__link}>
              <FaMapMarkerAlt style={footerStyles.footer__icon} /> Рязань, ул. Радищева, 43
            </div>
            <a 
              href="https://vk.com/universymbols" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={footerStyles.footer__link}
            >
              <FaVk style={footerStyles.footer__icon} /> Мы ВКонтакте
            </a>
          </Col>

          <Col md={4} className="mb-4">
            <h3 style={footerStyles.footer__title}>Информация</h3>
            <a href="#about" style={footerStyles.footer__link}>О компании</a>
            <a href="#products" style={footerStyles.footer__link}>Наша продукция</a>
            <a href="#delivery" style={footerStyles.footer__link}>Доставка и оплата</a>
            <a href="#contacts" style={footerStyles.footer__link}>Контакты</a>
          </Col>
        </Row>

        <Row>
          <Col>
            <div style={footerStyles.footer__bottom}>
              <div>© 2023 UniverSymbols. Все права защищены.</div>
              <div>ИП Афонин | ИНН 623008765432 | ОГРНИП 123456789012345</div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;