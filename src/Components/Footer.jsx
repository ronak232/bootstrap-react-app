import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { TfiMapAlt, TfiHeadphoneAlt, TfiTime, TfiEmail } from "react-icons/tfi";
import styles from "../Components/Card.module.css";
import ScrolltoTop from "./ScrolltoTop";
function Footer() {
  return (
    <footer>
      <div className={`${styles.footerContent} py-5`}>
        <div className="container">
          <Row>
            <Col md={4} lg className="px-3">
              <a href="/">
                <img
                  className={styles.logoImg}
                  src="https://wizixo.webestica.com/assets/images/logo.svg"
                  alt="Logo"
                />
              </a>
              <div className="py-3">
                <p className={styles.ContactStyle}>
                  Wizixo is a highly creative, modern, visually stunning and
                  Bootstrap 5 Creative Multi-purpose corporate and portfolio
                  HTML5 template.
                </p>
                <p className={styles.ContactStyle}>
                  It is based on the powerful Bootstrap 5 Framework to make sure
                  an entirely responsive layout.
                </p>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div>
                <ul className="px-2 list-group list-group-borderless">
                  <li className="d-flex mb-3">
                    <TfiMapAlt className="fs-1 me-2" />
                    <a
                      href="/"
                      className={
                        styles.ContactStyle
                          ? styles.quicklinks
                          : styles.ContactStyle
                      }
                    >
                      1421 Coburn Hollow Road Metamora, Near Center Point, IL
                      61548.
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <TfiHeadphoneAlt className="fs-5 me-2" />
                    <a
                      href="tel:(251) 854-6308"
                      className={
                        styles.ContactStyle
                          ? styles.quicklinks
                          : styles.ContactStyle
                      }
                    >
                      (251) 854-6308
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <TfiEmail className="fs-5 me-2" />
                    <a
                      href="mailto:help@wizixo.com"
                      className={
                        styles.ContactStyle
                          ? styles.quicklinks
                          : styles.ContactStyle
                      }
                    >
                      help@wizixo.com
                    </a>
                  </li>
                  <li className="d-flex mb-3">
                    <TfiTime className="fs-5 me-2" />
                    <p href="/" className={styles.ContactStyle}>
                      Mon - Fri: 09:00 - 21:00
                      <br />
                      Closed
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} md={2}>
              <div className="px-2">
                <h6>Quick Links</h6>
                <ul className="px-0">
                  <li className="py-1">
                    <a href="/" className={`${styles.quicklinks}`}>
                      About
                    </a>
                  </li>
                  <li className="py-1">
                    <a href="/" className={`${styles.quicklinks}`}>
                      Contact
                    </a>
                  </li>
                  <li className="py-1">
                    <a href="/" className={`${styles.quicklinks}`}>
                      Home
                    </a>
                  </li>
                  <li className="py-1">
                    <a href="/" className={`${styles.quicklinks}`}>
                      Blog
                    </a>
                  </li>
                  <li className="py-1">
                    <a href="/" className={`${styles.quicklinks}`}>
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <Form className={`py-4 px-4 ${styles.titleGreen}`}>
                <FormGroup>
                  <Label className="">
                    Subscribe to our newsletter to receive exclusive offers.
                  </Label>
                  <Input name="Email" placeholder="e-mail..." type="email" />
                </FormGroup>
                <Button className={styles}>Join us</Button>
              </Form>
            </Col>
          </Row>
        </div>

        {/* Footer Divider */}

        <div className={`py-3 ${styles.dividerLine}`}>
          <span className=""></span>
        </div>

        {/* Footer Copyright */}
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-start">
            <div className="copyright-text">
              <p>&copy;2022 All Rights Reserved by Wizixo.</p>
            </div>
            <div className="copyright-text-links">
              <ul className="copyright-links list-inline">
                <li className="list-inline-item px-2">
                  <a href="/" className="list-group-item-action">
                    Home
                  </a>
                </li>
                <li className="list-inline-item px-2">
                  <a href="/" className="list-group-item-action">
                    About Us
                  </a>
                </li>
                <li className="list-inline-item px-2">
                  <a href="/" className="list-group-item-action">
                    Carrer
                  </a>
                </li>
                <li className="list-inline-item px-2">
                  <a href="/" className="list-group-item-action">
                    Privacy & Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ScrolltoTop />
    </footer>
  );
}

export default Footer;
