import React from "react";

const ApplicationForm = ({takeTest}) => {
  return (
    <div className="application-form-screen">
      <section className="application-form-section">
        <form onSubmit={(e) => e.preventDefault()} className="application-form">
          <h1 className="text-center underline m-bottom-2">Application Form</h1>
          <h4 className="text-left">Personal Details</h4>
          <div className="row m-top-2">
            <div className="profile-form-elem-container">
              <div className="label">Name:</div>
              <div className="profile-form-input-container">
                <input
                  type="text"
                  placeholder="name"
                  className="profile-form-input"
                  value={"Akash Kumar"}
                  disabled
                />
              </div>
            </div>
            <div className="profile-form-elem-container">
              <div className="label">Email:</div>
              <div className="profile-form-input-container">
                <input
                  type="email"
                  placeholder="email"
                  className="profile-form-input"
                  value={"akash@gmail.com"}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="row m-top-2">
            <div className="profile-form-elem-container">
              <div className="label">Date of Birth:</div>
              <div className="profile-form-input-container">
                <input
                  type="date"
                  placeholder="DOB"
                  className="profile-form-input"
                  value={"2002-03-22"}
                  disabled
                />
              </div>
            </div>
            <div className="profile-form-elem-container">
              <div className="label">Gender:</div>
              <div className="profile-form-input-container radio">
                <input
                  type="text"
                  className="profile-form-input"
                  value={"Male"}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="row m-top-2">
              <div className="profile-form-elem-container">
                <div className="label">Building no. & street:</div>
                <div className="profile-form-input-container">
                  <input type="text" placeholder="building & street" className="profile-form-input" value={"52B Alpha-2"} disabled/>
                </div>
              </div>
              <div className="profile-form-elem-container">
                <div className="label">City:</div>
                <div className="profile-form-input-container">
                  <input type="text" placeholder="City" className="profile-form-input" value={"Noida"} disabled/>
                </div>
              </div>
            </div>

            <div className="row m-top-2">
              <div className="profile-form-elem-container">
                <div className="label">State:</div>
                <div className="profile-form-input-container">
                  <input type="text" placeholder="state" className="profile-form-input" value={"Uttar Pradesh"} disabled/>
                </div>
              </div>
              <div className="profile-form-elem-container">
                <div className="label">Pincode:</div>
                <div className="profile-form-input-container">
                  <input type="number" placeholder="pincode" className="profile-form-input" value={238008} disabled/>
                </div>
              </div>
            </div>

          <h4 className="text-left m-top m-bottom-2">Educational Details</h4>

          <h5 className="text-left m-bottom-2">10th School Details</h5>
          <div className="row m-bottom-2">
            <div className="profile-form-elem-container">
              <div className="label">School name:</div>
              <div className="profile-form-input-container">
                <input
                  type="text"
                  placeholder="name"
                  className="profile-form-input"
                  value={"Government Inter College"}
                  disabled
                />
              </div>
            </div>
            <div className="profile-form-elem-container">
              <div className="label">Percentage:</div>
              <div className="profile-form-input-container">
                <input
                  type="number"
                  placeholder="without % symbol"
                  className="profile-form-input"
                  value={77}
                  disabled
                />
              </div>
            </div>
          </div>

          <h5 className="text-left m-bottom-2">12th School Details</h5>
          <div className="row m-bottom-2">
            <div className="profile-form-elem-container">
              <div className="label">School name:</div>
              <div className="profile-form-input-container">
                <input
                  type="text"
                  placeholder="name"
                  className="profile-form-input"
                  value={"Government Inter College"}
                  disabled
                />
              </div>
            </div>
            <div className="profile-form-elem-container">
              <div className="label">Percentage:</div>
              <div className="profile-form-input-container">
                <input
                  type="number"
                  placeholder="without % symbol"
                  className="profile-form-input"
                  value={80}
                  disabled
                />
              </div>
            </div>
          </div>

          <h5 className="text-left m-bottom-2">Choose career</h5>

          <div className="row m-bottom-2">
            <div className="profile-form-elem-container">
              <label for="course" className="label">Select Course:</label>
              <select id="course" className="profile-form-input-container profile-form-input" >
                <option value="">
                  Select a Course
                </option>
                <option value="BCA" >Bachelor of Computer Applications (BCA)</option>
                <option value="BBA" >
                  Bachelor of Business Administration (BBA)
                </option>
                <option value="MCA">
                  Master of Computer Applications (MCA)
                </option>
                <option value="MBA">Master of Business Administration (MBA)</option>
              </select>
            </div>
            <div className="profile-form-elem-container">
              <label for="location" className="label">Select Location:</label>
              <select id="location" className="profile-form-input-container profile-form-input">
                <option value="" disabled selected>
                  Select a Location
                </option>
                <option value="New York">Delhi</option>
                <option value="Los Angeles">Bangalore</option>
                <option value="Chicago">Pune</option>
                <option value="Houston">Kanpur</option>
              </select>
            </div>
          </div>

          <div className="row m-top flex centre-horizontal">
            <button className="btn-secondary" onClick={takeTest}>Attend Test</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ApplicationForm;
