import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState({});
  const fetchUserData = async () => {
    const response = await Axios.get("https://randomuser.me/api/");
    setUserData(response.data.results[0]);
    console.log(response.data.results[0])
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="MyApp">
      <Card userData={userData} />
    </div>
  );
}

export default App;
