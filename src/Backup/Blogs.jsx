import React from "react";
import { Row } from "reactstrap";
import data from "../Components/data.json";
import CardGallery from "../Components/Card";
function Blogs() {
  return (
    <section>
      <div className="container">
        <Row>
          {data.Blogs.map((item, index) => {
            return <CardGallery {...item} key={index} nozoom={false} />;
          })}
        </Row>
      </div>
    </section>
  );
}

export default Blogs;
