import CardGallery from "./Card";
import data from "../Components/data.json";
// import { Container, Row } from "reactstrap";
import styles from "./Card.module.css";
import { Row } from "reactstrap";

function Gallery() {
  if (data.gallery) {
    return (
      <section className={styles.portfolio_gallery}>
        <div className="container">
          <div className={`text-center ${styles.portfolioContent}`}>
            <div className={styles.portfolioContent}>
              <h2 className={styles.portfolioTextItalic}>
                Check out some of our latest work.
              </h2>
              <h2 className={styles.portfolioTextBold}>
                Our Portfolio: Quality Results
              </h2>
              <p className={`px-5 ${styles.portfolioTextDesc}`}>
                Our portfolio shows our hard work and devotion to helping our
                clients succeed. Don't just take our word for it. Check out the
                latest work.
              </p>
            </div>
          </div>
          <Row>
            {data.gallery.map((item, id) => {
              return <CardGallery {...item} key={id} nozoom={true} />;
            })}
          </Row>
        </div>
      </section>
    );
  }
}

export default Gallery;
