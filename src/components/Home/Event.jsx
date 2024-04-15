import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Event = () => {
  const [count, setCount] = useState(0);
  const locn = useLocation();
  const { title, location, description, date, image, pricePerPerson } =
    locn.state;
  return (
    <div className="w-full min-h-screen flex justify-start items-start bg-main-dark px-40 font-inter">
      <div className="w-full h-screen bg-red-00 flex flex-col justify items-center">
        <div className="w-full h-[400px]  rounded-md relative overflow-hidden">
          <img
            alt="Image"
            src={image}
            className="absolute w-full h-full object-cover top-0 left-0"
          />
        </div>
        <div className="w-full h-[50%] relative">
          <div>
            <h1 className="text-[#dfdfdf] text-6xl font-bold">{title}</h1>
          </div>
          <div className="mt-6">
            <span className="text-[#8f8f8f] text-xl">{location}</span>
          </div>
          <div className="mt-6">
            <span className="text-[#8f8f8f] text-xl">{description}</span>
          </div>
          <div className="mt-6">
            <span className="text-[#121212] text-sm bg-yellow-200 py-1 px-2 rounded-md font-bold">
              {date}
            </span>
          </div>
          <div className="mt-6">
            <span className="bg-green-500 text-[#121212]  py-2 px-4 font-extrabold text-base rounded-md">
              ${pricePerPerson}
            </span>
          </div>
          <div className="absolute bottom-[6px] right-4">
            <button className="bg-purple-button w-52 drop-shadow-button-shadow text-base font-medium text-white px-4 py-2 rounded-md">
              Confirm bookings
            </button>
          </div>
          <Counter count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
};

const Counter = ({ count, setCount }) => {
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    if (count === 0) return;
    setCount(count - 1);
  }
  return (
    <div className="flex absolute bottom-[6px] right-80 bg-google-blue drop-shadow-google-blue rounded-md w-32 px-2 py-1 justify-evenly items-center">
      <button className="text-white text-3xl" onClick={handleDecrement}>
        -
      </button>
      <span className="text-white text-3xl">{count}</span>
      <button className="text-white text-3xl" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Event;
