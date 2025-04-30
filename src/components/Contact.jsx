import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaClock, FaVk, FaUserTie, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const styles = {
    contact: {
      padding: '60px 0',
      backgroundColor: '#f9f9f9'
    },
    contact__title: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '40px',
      color: '#333',
      textAlign: 'center'
    },
    contact__card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      height: '100%'
    },
    contact__item: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '20px'
    },
    contact__icon: {
      fontSize: '24px',
      color: '#FF5708',
      marginRight: '15px',
      flexShrink: '0'
    },
    contact__text: {
      color: '#555',
      lineHeight: '1.6'
    },
    contact__link: {
      color: '#FF5708',
      textDecoration: 'none',
      transition: 'all 0.3s',
      ':hover': {
        color: '#e04a07',
        textDecoration: 'underline'
      }
    },
    contact__map: {
      width: '100%',
      height: '400px',
      borderRadius: '12px',
      border: 'none',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }
  };

  return (
    <section id="contact" style={styles.contact}>
      <Container>
        <h2 style={styles.contact__title}>Контакты</h2>
        
        <Row className="g-4">
          <Col md={6}>
            <div style={styles.contact__card}>
              <div style={styles.contact__item}>
                <FaMapMarkerAlt style={styles.contact__icon} />
                <div style={styles.contact__text}>
                  <strong>Адрес:</strong><br />
                  Рязань, ул. Радищева, 43, 3 этаж, кабинет 33
                </div>
              </div>
              
              <div style={styles.contact__item}>
                <FaPhone style={styles.contact__icon} />
                <div style={styles.contact__text}>
                  <strong>Телефон:</strong><br />
                  <a href="tel:+79065435369" style={styles.contact__link}>+7 (906) 543-53-69</a>
                </div>
              </div>
              
              <div style={styles.contact__item}>
                <FaVk style={styles.contact__icon} />
                <div style={styles.contact__text}>
                  <strong>Группа ВКонтакте:</strong><br />
                  <a 
                    href="https://vk.com/universymbols" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.contact__link}
                  >
                    vk.com/universymbols
                  </a>
                </div>
              </div>
              
              <div style={styles.contact__item}>
                <FaTelegram style={styles.contact__icon} />
                <div style={styles.contact__text}>
                  <strong>Группа ВКонтакте:</strong><br />
                  <a 
                    href="https://t.me/symbol62" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.contact__link}
                  >
                    t.me/symbol62
                  </a>
                </div>
              </div>
              
              <div style={styles.contact__item}>
                <FaClock style={styles.contact__icon} />
                <div style={styles.contact__text}>
                  <strong>Часы работы:</strong><br />
                  с 10:00 до 19:00, пн-пт
                </div>
              </div>
              
              <div style={styles.contact__item}>
                <FaUserTie style={styles.contact__icon} />
                <div style={styles.contact__text}>
                  <strong>Реквизиты:</strong><br />
                  ИП Афонин Д.О.<br />
                  ИНН: 623012493394
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div style={styles.contact__map}>
              <iframe
                src="https://yandex.ru/map-widget/v1/-/CCUBP-YE1D"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Яндекс Карта - Офис компании"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;