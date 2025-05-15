import React from "react";
import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="nav-cont">
        <Navbar />
        <hr style={{ height: "0", border: "0.5px solid rgb(230, 227, 227)" }} />
        <div className="home-container">
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
