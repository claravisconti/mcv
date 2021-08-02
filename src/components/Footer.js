import React from "react";
import "../App.css";
import { Container, Row, Col, Nav} from "react-bootstrap";

task = ["Hola","Chau"];

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <ul>
          tasks.map(task => {
          return <li key={`task_${task}`}>{task}</li>
          )}
          </ul> 
          </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
