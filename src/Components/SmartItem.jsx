import { Card, CardBody, CardImg, Col, Row } from "reactstrap";
import data from "./data.json";
import styles from "./Card.module.css";
import CarouselSlider from "../Backup/Carousel";
function SmartItems() {
  return (
    <section>
      <CarouselSlider/>
      <div className="container">
        {data.webItems.map((item, index) => {
          return (
            <div className={styles.smartContainer} key={index}>
              <h1 className={styles.smartTechTitle}>{item.head}</h1>
              <div>
                <p className={styles.desc}>{item.descriptions}</p>
              </div>
              <Row>
                <Col sm={3} className="py-2">
                  <Card className={styles.cardHeight}>
                    <CardImg
                    className={`${styles.visionImg}`}
                      alt="Card image cap"
                      src={`${item.Images.url1}`}
                      top
                      width="100%"
                      height="100%"
                    />
                  </Card>
                </Col>
                <Col sm={3} className="py-2">
                  <Card className={styles.cardHeight}>
                    <CardImg
                      className={`${styles.visionImg}`}
                      alt="Card image cap"
                      src={`${item.Images.url2}`}
                      top
                      width="100%"
                      height="100%"
                    />
                  </Card>
                </Col>
                <Col sm={6} className="py-2">
                  <CardBody className={styles.gradiantbgGrid}>
                    <h2 className={` p-3 ${styles.visionHeading}`}>
                      Our vision is simple –
                      <span>
                        to make technology an asset for enterprises, not an
                        intricacy.
                      </span>
                    </h2>
                  </CardBody>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SmartItems;
