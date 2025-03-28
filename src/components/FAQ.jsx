import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Как сделать заказ?",
    answer: "Оставьте свою заявку по форме (ссылка-попап), наш менеджер свяжется с вами, пришлет каталог и уточнит все детали"
  },
  {
    question: "Получение заказа и доставка",
    answer: "Забрать заказ вы можете в нашем офисе. Если вы находитесь в другом городе, согласовать доставку любой транспортной компанией вы сможете при оформлении заказа. Бесплатная доставка для заказов свыше 10 000 рублей."
  },
  {
    question: "Оплата",
    answer: "Оплатить заказ можно онлайн, переводом или по счету (для юридических лиц)"
  },
  {
    question: "Добавление персонализации",
    answer: "Чтобы добавить персональных элементов, отметьте соответствующий пункт в форме (ссылка-попап) заявки. Наш менеджер свяжется с вами и учтет все ваши пожелания, а также подготовит дизайн-макет вашей будущей ленты."
  }
];

const styles = {
  faq: {
    padding: "60px 0",
    background: "linear-gradient(to bottom, #f9f9f9 0%, #ffffff 100%)",
  },
  faq__container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  faq__item: {
    marginBottom: "16px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    background: "#fff",
  },
  faq__question: {
    width: "100%",
    padding: "20px 24px",
    textAlign: "left",
    border: "none",
    background: "#fff",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#333",
  },
  faq__questionHover: {
    backgroundColor: "#f8f8f8",
  },
  faq__icon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    marginLeft: "15px",
    position: "relative",
  },
  faq__iconLine: {
    position: "absolute",
    background: "#FF5708",
    borderRadius: "2px",
  },
  faq__iconLineHorizontal: {
    width: "100%",
    height: "2px",
  },
  faq__iconLineVertical: {
    width: "2px",
    height: "100%",
  },
  faq__answer: {
    color: "#666",
    lineHeight: "1.6",
    padding: "0 24px",
  },
  faq__answerAnimated: {
    overflow: "hidden",
  },
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq" style={styles.faq}>
      <Container>
        <Row>
          <Col style={styles.faq__container}>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="faq__item"
                style={styles.faq__item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.button
                  className="faq__question"
                  style={styles.faq__question}
                  onClick={() => toggleItem(index)}
                  whileHover={styles.faq__questionHover}
                >
                  {item.question}
                  <span className="faq__icon" style={styles.faq__icon}>
                    <motion.span
                      className="faq__icon-line faq__icon-line--horizontal"
                      style={{ ...styles.faq__iconLine, ...styles.faq__iconLineHorizontal }}
                      animate={{ rotate: activeIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="faq__icon-line faq__icon-line--vertical"
                      style={{ ...styles.faq__iconLine, ...styles.faq__iconLineVertical }}
                      animate={{ opacity: activeIndex === index ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="faq__answer"
                      style={{ ...styles.faq__answer, ...styles.faq__answerAnimated }}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto",
                        opacity: 1,
                        paddingBottom: 24,
                        paddingTop: 0
                      }}
                      exit={{ height: 0, opacity: 0, padding: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;