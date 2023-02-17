import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { TfiAngleUp } from "react-icons/tfi";

function ScrolltoTop() {
  const [backtoTopPage, setbacktoTopPage] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1500) {
        setbacktoTopPage(true);
      } else {
        setbacktoTopPage(false);
      }
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backtoTopPage && (
        <button className={styles.scrollToTop} onClick={scrollTop}>
          <TfiAngleUp className={styles.upArrow} />
        </button>
      )}
    </div>
  );
}

export default ScrolltoTop;
