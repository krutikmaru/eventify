import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useUser } from "../../contexts/UserContext";
import axios from "axios";

const BookEvent = () => {
  const [count, setCount] = useState(1);
  const locn = useLocation();
  const { user } = useUser();
  const navigate = useNavigate();
  const { id, title, location, description, date, image, pricePerPerson } =
    locn.state;
  function handleClick() {
    axios
      .post("http://localhost:8080/Eventify/webresources/api/book", {
        username: user.username,
        tickets: count,
        eventid: id,
        total: pricePerPerson * count,
      })
      .then((response) => {
        console.log("Success:", response.data);
        navigate("/");
      })
      .catch((err) => console.log("Error:", err));
  }
  return (
    <>
      <Navbar />
      <div className="w-full h-[200vh] flex justify-start items-start pt-10 bg-main-dark px-40 font-inter">
        <div className="w-[100%] min-h-[100%] ">
          <div className="w-full h-[400px]  rounded-md relative overflow-hidden">
            <img
              alt="Image"
              src={image}
              className="absolute w-full h-full object-cover top-0 left-0"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-[#dfdfdf] text-6xl font-bold">{title}</h1>
          </div>
          <div className="mt-4">
            <span className="text-[#dfdfdf] underline text-xl">{location}</span>
          </div>
          <div className="mt-4">
            <span className="text-[#8f8f8f] text-xl">{description}</span>
          </div>
          <div className="mt-6 h-20 flex justify-between items-center bg-red-0">
            <span className="text-[#121212] text-base bg-yellow-200 py-2 px-4 rounded-md font-extrabold font-inter">
              {date}
            </span>
            <div>
              <span className="text-white mr-4">Price per person</span>
              <span className="bg-green-500 text-[#121212]  py-2 px-4 font-extrabold text-base rounded-md">
                ${pricePerPerson}
              </span>
            </div>
          </div>
          <div className="mt-20 flex justify-between items-center">
            <Counter count={count} setCount={setCount} />
            <span className="bg-green-500 text-[#121212]  py-2 px-4 font-extrabold rounded-md text-xl ">
              Total: ${count * pricePerPerson}
            </span>
            <div>
              <button
                onClick={handleClick}
                className="bg-purple-button w-52 drop-shadow-button-shadow text-base font-medium text-white px-4 py-2 rounded-md"
              >
                Confirm bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Counter = ({ count, setCount }) => {
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    if (count === 1) return;
    setCount(count - 1);
  }
  return (
    <div className="flex items-center ">
      <span className="text-white mr-5">Number of tickets</span>
      <div className="flex bg-google-blue rounded-md w-32 px-2 py-1 justify-evenly items-center">
        <button className="text-white text-3xl" onClick={handleDecrement}>
          -
        </button>
        <span className="text-white text-3xl">{count}</span>
        <button className="text-white text-3xl" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default BookEvent;
