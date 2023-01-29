import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import "./EventTask.css";
const EventTask = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [task, setTask] = useState([]);
  useEffect(() => {
    fetch(
      `https://volunteer-network-server-gray.vercel.app/eventTask?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
      });
  }, [loggedInUser]);
  console.log(task);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          {task.map((each) => (
            <div className="col-11 col-sm-11 col-md-6 col-lg-4 mb-5 mt-4">
              <div className="task">
                <img src={each.img} alt="" />
                <div className="info">
                  <h4>{each.title}</h4>
                  <p>{each.date}</p>
                  <button className="cencel-btn">Cancel</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventTask;
