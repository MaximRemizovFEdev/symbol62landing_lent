import React from "react";
import { Container, Row, Col, Tab, Tabs, Table } from "react-bootstrap";
import "./styleTabs.css";

const Price = () => {
  // Данные для таблиц
  const typicalRibbons = [
    { name: "Лента 1", price: "100 ₽" },
    { name: "Лента 2", price: "150 ₽" },
    { name: "Лента 3", price: "200 ₽" },
    { name: "Лента 4", price: "250 ₽" },
    { name: "Лента 5", price: "300 ₽" },
    { name: "Лента 6", price: "350 ₽" },
    { name: "Лента 7", price: "400 ₽" },
  ];

  const personalizedRibbons = [
    { name: "Лента A", price: "500 ₽" },
    { name: "Лента B", price: "550 ₽" },
    { name: "Лента C", price: "600 ₽" },
    { name: "Лента D", price: "650 ₽" },
    { name: "Лента E", price: "700 ₽" },
  ];

  // Объект со стилями по БЭМ
  const styles = {
    price: {
      padding: "50px 0",
    },
    price__title: {
      fontSize: "78px",
      color: "#FF5708",
      marginTop: "0",
      textAlign: "center",
    },
    price__tabs: {
      display: "flex",
      border: "2px solid #FF5708",
      borderRadius: "5px",
      overflow: "hidden",
    },
    price__tab: {
      flex: "1",
      textAlign: "center",
      padding: "10px 0",
      cursor: "pointer",
    //   borderRight: "2px solid #FF5708",
    },
    price__tabActive: {
      backgroundColor: "#FF5708",
      color: "white",
    },
    price__tabInactive: {
      backgroundColor: "white",
      color: "#FF5708",
    },
    price__table: {
      backgroundColor: "#F5F2F1",
      color: "white",
      borderColor: "white",
    },
  };

  return (
    <section style={styles.price}>
      <Container>
        {/* Заголовок "Прайс" */}
        <Row>
          <Col>
            <h1 style={styles.price__title}>Прайс</h1>
          </Col>
        </Row>

        {/* Вкладки */}
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="typical"
              id="price-tabs"
              style={styles.price__tabs}
            >
              {/* Вкладка "Типовые ленты" */}
              <Tab
                eventKey="typical"
                title={
                  <div
                    style={{
                      ...styles.price__tab,
                      ...styles.price__tabActive, // Активная вкладка
                    }}
                  >
                    Типовые ленты
                  </div>
                }
              >
                <Table striped bordered hover style={styles.price__table}>
                  <thead>
                    <tr>
                      <th>Наименование</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {typicalRibbons.map((ribbon, index) => (
                      <tr key={index}>
                        <td>{ribbon.name}</td>
                        <td>{ribbon.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab>

              {/* Вкладка "Персонализированные ленты" */}
              <Tab
                eventKey="personalized"
                title={
                  <div
                    style={{
                      ...styles.price__tab,
                      ...styles.price__tabInactive, // Неактивная вкладка
                    }}
                  >
                    Персонализированные ленты
                  </div>
                }
              >
                <Table striped bordered hover style={styles.price__table}>
                  <thead>
                    <tr>
                      <th>Наименование</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {personalizedRibbons.map((ribbon, index) => (
                      <tr key={index}>
                        <td>{ribbon.name}</td>
                        <td>{ribbon.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Price;