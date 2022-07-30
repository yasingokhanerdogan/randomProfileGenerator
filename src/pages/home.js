import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import moment from "moment";

const Home = () => {
  const [userData, setUserData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchRandomUser = async () => {
    setUserData("");
    await axios
      .get("https://randomuser.me/api/", {})
      .then(({ data }) => setUserData(data.results[0]))
      .catch((err) => {
        userData !== "" && setUserData("");
        setErrorMessage(err.message);
        console.error(`Error: ${err.message}`);
      });
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <>
      <Helmet>
        <title>Random Profile Generator</title>
        <meta name="description" content="Random Profile Generator Description" />
      </Helmet>

      <div className="wrapper">
        <div className="container">
          {errorMessage !== "" ? (
            <h3 className="error">{errorMessage}</h3>
          ) : userData !== "" ? (
            <div className="card">
              <div className="row">
                <img
                  src={userData.picture.medium}
                  width={150}
                  height={150}
                  alt={userData.name.first + "'s Profile Photo"}
                />
              </div>
              <div className="row">
                <h5 className="title">Name: </h5>
                <p className="content">
                  {userData.name.first + " " + userData.name.last}
                </p>
              </div>
              <div className="row">
                <h5 className="title">Gender: </h5>
                <p className="content">{userData.gender}</p>
              </div>
              <div className="row">
                <h5 className="title">Location: </h5>
                <p className="content">{userData.location.city + ", " + userData.location.country}</p>
              </div>
              <div className="row">
                <h5 className="title">Email: </h5>
                <p className="content">{userData.email}</p>
              </div>
              <div className="row">
                <h5 className="title">Address: </h5>
                <p className="content">
                  {userData.location.street.name +
                    " Street, No: " +
                    userData.location.street.number +
                    " " +
                    userData.location.city +
                    ", " +
                    userData.location.country}
                </p>
              </div>
              <div className="row">
                <h5 className="title">Birthday: </h5>
                <p className="content">{moment(userData.dob.date).format('Do MMMM YYYY')}</p>
              </div>

              <div className="row">
                <h5 className="title">Age: </h5>
                <p className="content">{userData.dob.age}</p>
              </div>

              <div className="row">
                <h5 className="title">Phone: </h5>
                <p className="content">{userData.phone}</p>
              </div>

              <div className="row">
                <button type="button" onClick={fetchRandomUser}>
                  Change Profile
                </button>
              </div>
            </div>
          ) : (
            <ClipLoader color="#fff" size={100} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
