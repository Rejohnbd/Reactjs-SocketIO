import React from "react";

import "./Employee.css";

function Employee(props) {
  const employee = props.employeeInfo;
  const empImage = employee.image;
  return (
    <section className="team-section hiro-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 wow fadeInUp">
            <h2 className="section-title">
              {employee.message} <br /> {employee.name}
            </h2>
            {/* <p className="section-text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p> */}
          </div>
          <div className="col-md-7 wow fadeInRight">
            <div
              id="hiroTeamCarousel"
              className="hiro-team-carousel carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="team-card featured"
                        data-animation="animated flipInY"
                      >
                        <img
                          src={`data:image/jpg;base64,${empImage}`}
                          alt="Paulina Gayoso"
                          className="team-member-thumbnail"
                        />
                        <div className="team-member-details">
                          <h6 className="team-member-name">{employee.name}</h6>
                          <p className="team-member-title">Project Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Employee;
