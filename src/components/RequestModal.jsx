import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaPaperPlane, FaUser, FaPhone, FaMagic } from 'react-icons/fa';


// Использование 

// const [showModal, setShowModal] = useState(false);

// // Где-то в компоненте:
// <Button onClick={() => setShowModal(true)}>Открыть форму</Button>
// <RequestModal show={showModal} onHide={() => setShowModal(false)} />


const RequestModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    personalization: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = "8198677796:AAGKdasotMqBW0-ymtjxkAcg3DhfpY1Srrs";//"ВАШ_ТОКЕН_TELEGRAM_BOT";
      const chatId = "-4674647074"; //"ВАШ_CHAT_ID";
      const message = `
          📌 Новая заявка!\n
          Имя: ${formData.name}\n
          Телефон: ${formData.phone}\n
          Согласие на обработку: ${formData.personalization ? 'Да' : 'Нет'}
        `;
  
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Ошибка при отправке');
      }
  
      // console.log('Данные отправлены в Telegram:', formData);
      onHide();
      alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
      
      // Сброс формы после успешной отправки
      setFormData({
        name: '',
        phone: '',
        personalization: false
      });
  
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.');
    }
  };

  const modalStyles = {
    modalHeader: {
      borderBottom: 'none',
      paddingBottom: '0'
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#333'
    },
    modalBody: {
      padding: '30px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    formLabel: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
      fontWeight: '500'
    },
    formIcon: {
      marginRight: '10px',
      color: '#FF5708'
    },
    submitBtn: {
      backgroundColor: '#FF5708',
      borderColor: '#FF5708',
      fontWeight: '500',
      padding: '10px 25px',
      marginTop: '15px',
      '&:hover': {
        backgroundColor: '#e04a07',
        borderColor: '#e04a07'
      }
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    checkboxCustom: {
      width: '20px',
      height: '20px',
      border: '2px solid #FF5708',
      borderRadius: '4px',
      marginRight: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: formData.personalization ? '#FF5708' : 'transparent'
    },
    checkboxIcon: {
      color: 'white',
      fontSize: '12px',
      opacity: formData.personalization ? '1' : '0',
      transition: 'all 0.2s'
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton style={modalStyles.modalHeader}>
        <Modal.Title style={modalStyles.modalTitle}>
          Оставить заявку
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body style={modalStyles.modalBody}>
        <Form onSubmit={handleSubmit}>
          <Form.Group style={modalStyles.formGroup}>
            <Form.Label style={modalStyles.formLabel}>
              <FaUser style={modalStyles.formIcon} />
              Ваше имя
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              required
            />
          </Form.Group>

          <Form.Group style={modalStyles.formGroup}>
            <Form.Label style={modalStyles.formLabel}>
              <FaPhone style={modalStyles.formIcon} />
              Номер телефона
            </Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (900) 123-45-67"
              required
            />
          </Form.Group>

          <Form.Group style={modalStyles.formGroup}>
            <label style={modalStyles.checkboxLabel}>
              <div style={modalStyles.checkboxCustom}>
                <FaMagic style={modalStyles.checkboxIcon} />
              </div>
              <input
                type="checkbox"
                name="personalization"
                checked={formData.personalization}
                onChange={handleChange}
                hidden
              />
              Добавить персонализацию?
            </label>
          </Form.Group>

          <Button 
            type="submit" 
            style={modalStyles.submitBtn}
          >
            <FaPaperPlane style={{ marginRight: '8px' }} />
            Отправить заявку
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RequestModal;