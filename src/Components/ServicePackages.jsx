import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Card,
  CardTitle,
  CardBody,
  Container,
} from "reactstrap";
import { RiCheckFill } from "react-icons/ri";
import styles from "./Card.module.css";
import "../../src/App.css";

function ServicePackages() {
  const [btnActiveColor, setbtnActiveColor] = useState(false);

  const togglerhandler = (value) => {
    setbtnActiveColor(value);
  };
  const activeClass = btnActiveColor ? "" : "active";
  return (
    <section className={styles.service_pack}>
      <Container>
        <Row>
          {/* Left Card content */}
          <Col sm={7} className={styles.text}>
            <div className={styles.service_pack_text}>
              <h3
                className={
                  styles.serviceTitle ? styles.serviceTitle : styles.quicklinks
                }
              >
                The service packages
              </h3>
              <h1>Choose affordable and 100% premium package</h1>
              <p>
                We are an insight and behaviour driven creative marketing
                agency. A Full package Digital Creative Agency Specializing in:
                Video Production, Web Design, Branding, Brand Strategy, Content
                Marketing and Aerial Cinematography. 
              </p>
              <p>
              Our passion for customer
                excellence is just one reason why we are the market leader.
                We've always worked very hard to give our customers the best
                experience in dealing with our company.
              </p>
            </div>
            <Col>
              <Button
                className={activeClass ? styles.activeBtn : styles.greyBtn}
                onClick={() => togglerhandler(false)}
              >
                Enterprise
              </Button>
              <Button
                className={activeClass ? styles.greyBtn : styles.activeBtn}
                onClick={() => togglerhandler(true)}
              >
                Business
              </Button>
            </Col>
          </Col>

          {/* Right Card Content*/}

          <Col sm={5}>
            <Card className={styles.noBorder}>
              <CardTitle className={styles.titleGreen}>
                {btnActiveColor ? (
                  <h1 className={styles.priceTitle}>$129.99</h1>
                ) : (
                  <h1 className={styles.priceTitle}>$149.99</h1>
                )}
                {btnActiveColor ? (
                  <p className={`${styles.planName}`}>Business Plan</p>
                ) : (
                  <p className={`${styles.planName}`}>Enterprise Plan</p>
                )}
              </CardTitle>
              <CardBody className={styles.bodyGrey}>
                {btnActiveColor ? (
                  <p className={styles.complimentList}>
                    <RiCheckFill
                      style={{
                        fontSize: "18px",
                        marginRight: "10px",
                        color: "#8f9397",
                      }}
                    />
                    Up to 5 users monthly
                  </p>
                ) : (
                  <p className={styles.complimentList}>
                    <RiCheckFill
                      style={{
                        fontSize: "18px",
                        marginRight: "10px",
                        color: "#8f9397",
                      }}
                    />
                    Up to 10 users monthly
                  </p>
                )}
                <p className={styles.complimentList}>
                  <RiCheckFill
                    style={{
                      fontSize: "18px",
                      marginRight: "10px",
                      color: "#8f9397",
                    }}
                  />
                  Unlimited updates
                </p>

                {btnActiveColor ? (
                  <p className={styles.complimentList}>
                    <RiCheckFill
                      style={{
                        fontSize: "18px",
                        marginRight: "10px",
                        color: "#8f9397",
                      }}
                    />
                    20% off hosting & domain
                  </p>
                ) : (
                  <p className={styles.complimentList}>
                    <RiCheckFill
                      style={{
                        fontSize: "18px",
                        marginRight: "10px",
                        color: "#8f9397",
                      }}
                    />
                    Free host & domain included
                  </p>
                )}
                <p className={styles.complimentList}>
                  <RiCheckFill
                    style={{
                      fontSize: "18px",
                      marginRight: "10px",
                      color: "#8f9397",
                    }}
                  />
                  24/7 dedicated Support
                </p>
                {btnActiveColor ? (
                  <p className={styles.complimentList}>
                    <RiCheckFill
                      style={{
                        fontSize: "18px",
                        marginRight: "10px",
                        color: "#8f9397",
                      }}
                    />
                    500GB Storage usage
                  </p>
                ) : (
                  <p className={styles.complimentList}>
                    <RiCheckFill
                      style={{
                        fontSize: "18px",
                        marginRight: "10px",
                        color: "#8f9397",
                      }}
                    />
                    Unlimited Storage usage
                  </p>
                )}
                <Col>
                  <Button type="button" className={styles.getBtn}>
                    Get it now!
                  </Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicePackages;
