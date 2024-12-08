import React, { useEffect, useState } from "react";
import img1 from "../../../assets/carouselpic1.jpg";
import img2 from "../../../assets/carouselpic2.jpg";
import img3 from "../../../assets/carouselpic3.jpg";
import Carousel from "../../../components/Carousel/Carousel";
import Footer from "../../../components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const images = [img1, img2, img3];

  return (
    <div>
      <Carousel images={images} />
      <section className="common-section">
        <h1>Our Motive</h1>
        <p className="quotes">
          "At our career guidance platform, we believe that every individual has
          unique potential. Our mission is to empower you with the knowledge,
          skills, and insights to navigate the complexities of your career
          journey and help you unlock opportunities that align with your true
          passion."
        </p>
      </section>
      <section className="common-section">
        <div className="custom-btn-1 margin-bottom-10">
            <span>Explore Your Career</span>
            <span><FaArrowRight /></span>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
