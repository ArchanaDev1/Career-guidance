import React from 'react'

const Catalog = ({college, image, cover}) => {
  return (
    <div className="clg-catalog cursor-pointer catalog-effect">
          {/* Image section */}
          <div className="catalog-img-container">
            <img src={image} alt="clg-img" className="catalog-image" />
          </div>
          {/* Details section */}
          <div className="apply-btn-container">
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
  )
}

export default Catalog
