import React from "react";
import { CardBody, Col, Row } from "reactstrap";
import data from "./data.json";
import styles from "./Card.module.css";
// import { faSave } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  return (
    <section>
      <div className={`container ${styles.services_container}`}>
        <Row className={styles.services_content}>
          {data.services.map((item ,index) => {
            return (
              
              <Col md={4} key={index}>
                <div className={styles.services_cards}>
                  <CardBody className={styles.title}>{item.title}</CardBody>
                  <CardBody className={styles.descriptions}>
                    {item.descriptions}
                  </CardBody>
                </div>
              </Col>
            
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default Services;
