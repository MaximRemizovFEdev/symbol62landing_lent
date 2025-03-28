import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FaqHeader = () => {
  return (
    <div
      style={{ backgroundColor: "#FF5708", width: "100%", padding: "20px 0" }}
    >
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1 style={{ color: "white", fontSize: "72px", margin: 0 }}>
              Вопрос-ответ
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqHeader;
