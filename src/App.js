import "./App.css";
import React, { useEffect, useState } from "react";
import Loading from "./Component/Loading";
import NavBar from "./Component/NavBar";

function App() {
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/img/")
      .then((respone) => respone.blob())
      .then((img) => {
        const imgURL = URL.createObjectURL(img);
        setImage(imgURL);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container">
        {image === "" ? (
          <Loading />
        ) : (
          <img className="profile-img" src={image} alt="Profile" />
        )}
      </div>
    </div>
  );
}

export default App;
