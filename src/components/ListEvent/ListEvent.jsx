import React, { useState } from "react";
import { styles } from "../Authentication/styles";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListEvent = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [pricePerPerson, setPricePerPerson] = useState(0);
  const [description, setDescription] = useState("");
  const [organizerPhone, setOrganizerPhone] = useState(0);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  function handleAddEvent() {
    if (
      title === "" ||
      location === "" ||
      date === "" ||
      image === "" ||
      description === "" ||
      organizerPhone === 0
    ) {
      setIsError(true);
      return;
    }
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    const id = `${timestamp}${random}`;
    console.log({
      id,
      title,
      location,
      description,
      date,
      image,
      ppp: pricePerPerson,
      organizer: organizerPhone,
    });
    axios
      .post("http://localhost:8080/Eventify/webresources/api/add-event", {
        id,
        title,
        location,
        description,
        date,
        image,
        ppp: pricePerPerson,
        organizer: organizerPhone,
      })
      .then((response) => {
        console.log("Event add success:", response);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error Event add:", err);
      });
  }
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-main-dark flex justify-center items-center">
        <div className="relative w-[400px] h-full font-inter flex justify-center items-center flex-col">
          <h1 className="text-white font-bold text-4xl absolute left-[-300px] top-24">
            List new event
          </h1>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            placeholder="Title"
            autoCorrect="false"
          />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={styles.input}
            placeholder="Location"
            autoCorrect="false"
          />
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.input}
            placeholder="DD Month, YYYY"
            autoCorrect="false"
          />
          <input
            value={pricePerPerson}
            onChange={(e) => setPricePerPerson(e.target.value)}
            type="number"
            className={styles.input}
            placeholder="Price per person ($)"
            autoCorrect="false"
          />
          <input
            value={organizerPhone}
            onChange={(e) => setOrganizerPhone(e.target.value)}
            className={styles.input}
            placeholder="Organizer's phone number"
            autoCorrect="false"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={styles.input}
            placeholder="Image url"
            autoCorrect="false"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            className={styles.input}
          />
          
          <button onClick={handleAddEvent} className={styles.button}>
            List event
          </button>
          {isError && (
            <span className="text-red-500">
              Error: All fields are required & should be proper
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ListEvent;
