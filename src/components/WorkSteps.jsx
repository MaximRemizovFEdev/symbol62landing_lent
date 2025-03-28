import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WorkSteps = () => {
  return (
    <div style={{ backgroundColor: '#FF5708', width: '100%', padding: '20px 0' }}>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1 style={{ color: 'white', fontSize: '72px', margin: 0 }}>
              Как мы работаем?
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WorkSteps;