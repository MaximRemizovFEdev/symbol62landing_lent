import React from "react";
import { Container, Row, Col, Tab, Tabs, Table } from "react-bootstrap";
import "./style.css";
import "../styleTabs.css";

const Price = () => {
  // Данные для таблиц
  const typicalRibbons = [
    { id: 1, name: "Лента 1", price: "100 ₽" },
    { id: 2, name: "Лента 2", price: "150 ₽" },
    { id: 3, name: "Лента 3", price: "200 ₽" },
    { id: 4, name: "Лента 4", price: "250 ₽" },
    { id: 5, name: "Лента 5", price: "300 ₽" },
    { id: 6, name: "Лента 6", price: "350 ₽" },
    { id: 7, name: "Лента 7", price: "400 ₽" },
  ];

  const personalizedRibbons = [
    { id: 1, name: "Лента A", price: "500 ₽" },
    { id: 2, name: "Лента B", price: "550 ₽" },
    { id: 3, name: "Лента C", price: "600 ₽" },
    { id: 4, name: "Лента D", price: "650 ₽" },
    { id: 5, name: "Лента E", price: "700 ₽" },
  ];

  return (
    <section className="price">
      <Container>
        {/* Заголовок "Прайс" */}
        <Row>
          <Col>
            <h1 className="price__title">Прайс</h1>
          </Col>
        </Row>

        {/* Вкладки */}
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="typical"
              id="price-tabs"
              className="price__tabs"
            >
              {/* Вкладка "Типовые ленты" */}
              <Tab eventKey="typical" title="Типовые ленты" className="price__tab">
                <Table striped bordered hover className="price__table">
                  <thead>
                    <tr>
                      <th>Наименование</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {typicalRibbons.map((ribbon) => (
                      <tr key={ribbon.id}>
                        <td>{ribbon.name}</td>
                        <td>{ribbon.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab>

              {/* Вкладка "Персонализированные ленты" */}
              <Tab eventKey="personalized" title="Персонализированные ленты" className="price__tab">
                <Table striped bordered hover className="price__table">
                  <thead>
                    <tr>
                      <th>Наименование</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {personalizedRibbons.map((ribbon) => (
                      <tr key={ribbon.id}>
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