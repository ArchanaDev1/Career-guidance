import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(user?user.gender:"");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("student"));
    if (user) {
      setUser(user);
      setSelectedGender(user.gender);
    } else {
      navigate("/signin");
    }
  }, []);

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      {!user ? null : (
        <div>
          <section className="common-section">
            <h1>My Profile</h1>
          </section>
          <section className="common-section">
            <form onSubmit={(e) => e.preventDefault()} className="profile-form">
              <h4 className="text-left">Personal Details</h4>
              <div className="row">
                <div className="profile-form-elem-container">
                  <div className="label">Name:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="text"
                      placeholder="name"
                      className="profile-form-input"
                      value={user.name}
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
                      value={user.email}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="profile-form-elem-container">
                  <div className="label">Date of Birth:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="date"
                      placeholder="DOB"
                      className="profile-form-input"
                    />
                  </div>
                </div>
                <div className="profile-form-elem-container">
                  <div className="label">Gender:</div>
                  <div className="profile-form-input-container radio">
                    <label>
                      <input
                        type="radio"
                        value="Male"
                        checked={selectedGender === "Male"}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Female"
                        checked={selectedGender === "Female"}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Other"
                        checked={selectedGender === "Other"}
                        onChange={handleChange}
                      />
                      Other
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="profile-form-elem-container">
                  <div className="label">Building no. & street:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="text"
                      placeholder="building & street"
                      className="profile-form-input"
                    />
                  </div>
                </div>
                <div className="profile-form-elem-container">
                  <div className="label">City:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="text"
                      placeholder="City"
                      className="profile-form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="profile-form-elem-container">
                  <div className="label">State:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="text"
                      placeholder="state"
                      className="profile-form-input"
                    />
                  </div>
                </div>
                <div className="profile-form-elem-container">
                  <div className="label">Pincode:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="number"
                      placeholder="pincode"
                      className="profile-form-input"
                    />
                  </div>
                </div>
              </div>

              <h4 className="text-left m-top">Educational Details</h4>

              <h5 className="text-left">10th School Details</h5>
              <div className="row">
                <div className="profile-form-elem-container">
                  <div className="label">School name:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="text"
                      placeholder="name"
                      className="profile-form-input"
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
                    />
                  </div>
                </div>
              </div>

              <h5 className="text-left">12th School Details</h5>
              <div className="row">
                <div className="profile-form-elem-container">
                  <div className="label">School name:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="text"
                      placeholder="name"
                      className="profile-form-input"
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
                    />
                  </div>
                </div>
              </div>

              <h5 className="text-left">Graduation Details</h5>
              <div className="row">
                <div className="profile-form-elem-container">
                  <div className="label">Course:</div>
                  <div className="profile-form-input-container">
                    <input
                      type="text"
                      placeholder="course"
                      className="profile-form-input"
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
                    />
                  </div>
                </div>
              </div>

              <div className="row m-top">
                <button className="btn-secondary">Save</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default Profile;
