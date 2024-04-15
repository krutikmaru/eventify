import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState({});
  const [postData, setPostData] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8080/testing-rest/webresources/generic/events")
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/testing-rest/webresources/generic", postData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
  };

  // Handle input change for the POST request
  const handleInputChange = (e) => {
    setPostData({ message: e.target.value });
  };

  return (
    <div>
      {/* <h1>POST Request:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={postData.message}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};
