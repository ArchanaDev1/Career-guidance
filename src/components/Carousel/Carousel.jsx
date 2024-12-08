import React, { useEffect, useState } from "react";

const Carousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <section className="carousel-section">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel image ${index + 1}`}
            className={index === activeIndex ? "active" : ""}
          />
        ))}
      </section>
    </div>
  );
};

export default Carousel;
