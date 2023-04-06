import React from "react";
import useAuth from "../../hooks/useAuth";
import DashboardButtons from "../../components/DashboardButtons";
import DisplayGraph from "../../components/DisplayGraph";

import "../HomePage/HomePage.css"
import inProcess from "../../pages/Media/in_process.jpg"


const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user] = useAuth();

  // const { patterns } = props;

  return (

    <section className="dash-grid">
      <h1 className="content-one">{user.username}'s Dashboard</h1>
      <DashboardButtons  />
      <div className="dash-img">
            <img src={inProcess} alt="inProcess" className="actual-img" />
        </div>

      <DisplayGraph  />
    </section>
  );
};

export default HomePage;
