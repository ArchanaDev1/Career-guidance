import React from "react";
import clgBackgroundPic from "../../assets/clg1cover.jpg";

const CollegeProfile = ({ college, cover, toggleApplicationForm }) => {
  return (
    <div className="college-profile">
      <section className="college-profile-section">
        <section className="img-section">
          <img src={cover} alt="clg-cover" className="clg-cover-img" />
          <h1 className="clg-name">{college.name}</h1>
          <button className="clg-apply-btn" onClick={toggleApplicationForm}>Apply</button>
        </section>
        <section className="m-top">
          <h2 className="text-center center-heading">About {college.name}</h2>
          <ul className="list m-top">
            <li>
              <div className="point">Origin:</div>
              <div>{college.officeLocation.locationName}</div>
            </li>
            <li>
              <div className="point">Address:</div>
              <div>{college.officeLocation.officeAddress}</div>
            </li>
          </ul>
        </section>
        <section className="courses m-top-2">
          <h3 className="underline m-bottom-2">Our Courses</h3>
          <ul>
            {college.courses.map((item) => (
              <li className="m-bottom-2">
                <div className="college-details">
                  <div className="flex">
                    <div className="point flex">Course: </div>
                    <div>{item.courseName}</div>
                  </div>
                  <div className="flex">
                    <div className="point">Duration: </div>
                    <div>{item.courseDuration} Years</div>
                  </div>
                  <div className="flex">
                    <div className="point">Fee: </div>
                    <div>{item.courseFee}</div>
                  </div>
                  <div className="flex">
                    <div className="point">Eligibility: </div>
                    <div className="flex fcol">
                      <div className="flex">
                        <div className="small-point">Qualification: </div>
                        <div>{item.eligibility.qualification}</div>
                      </div>
                      <div className="flex">
                        <div className="small-point">Minimum Percentage: </div>
                        <div>{item.eligibility.minimumPercentage}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section id="admission">
          <h3 className="underline m-top-2 m-bottom-2">Admission</h3>
          <p className="m-bottom-2">
            Apply and unlock a world of opportunities. Follow the simple steps
            below:
          </p>
          <ol className="ordered-list">
            <li>Fill out the online application form.</li>
            <li>Attend the entrance exam.</li>
          </ol>
        </section>
      </section>
    </div>
  );
};

export default CollegeProfile;
