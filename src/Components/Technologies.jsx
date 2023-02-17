import { Row } from "reactstrap";
import data from "../Components/data.json";
import CardGallery from "./Card";
import styles from "./Card.module.css";

function Technologies() {
  return (
    <section>
      <div className="container">
        <Row className={styles.techServices}>
          {data.Technology.map((item, index) => {
            return (
              <CardGallery
                {...item}
                key={index}
                nozoom={false}
                // iconUrl={iconUrl}
              />
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default Technologies;
