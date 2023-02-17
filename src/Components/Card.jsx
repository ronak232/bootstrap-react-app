// Reusable Component to create the Flex-Card.
import { Card, CardBody, CardText, CardTitle, Col } from "reactstrap";
import styles from "./Card.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


function CardGallery({ title, category, image, description, nozoom, iconUrl }) {
  return (
    <Col sm={4} className={styles.col}>
      <Card className={styles.cardbody}>
        <div className={styles.card__container_content}>
          <img
            className={nozoom ? styles.zoomimg : styles.noZoomimg}
            alt="Sample"
            src={`${image}`}
          />
        </div>
        <CardBody>
          <CardTitle className={styles.title} tag="h5">
            {title}
          </CardTitle>
          {<CardText>{category}</CardText> ? (
            <CardText>{category}</CardText>
          ) : (
            ""
          )}
          {<CardText>{description}</CardText> ? (
            <CardText>{description}</CardText>
          ) : (
            ""
          )}
        </CardBody>
      </Card>
    </Col>
  );
}

export default CardGallery;
