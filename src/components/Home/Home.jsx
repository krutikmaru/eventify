import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventCard = ({
  id,
  title,
  location,
  description,
  date,
  image,
  pricePerPerson,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1d1d1d] h-48 w-full rounded-md mb-5 flex justify-evenly items-center">
      <div className="w-[30%] h-[90%] rounded-md overflow-hidden relative">
        <img
          alt="Image"
          src={image}
          className="absolute w-full h-full object-cover top-0 left-0"
        />
      </div>
      <div className="w-[65%] h-[90%] border-[#121212] relative rounded-md font-inter px-2 py-2">
        <div>
          <h1 className="text-[#dfdfdf] text-2xl font-bold">{title}</h1>
        </div>
        <div>
          <span className="text-[#8f8f8f] text-sm">{location}</span>
        </div>
        <div className="mt-3">
          <span className="text-[#121212] text-sm bg-yellow-200 py-1 px-2 rounded-md font-bold">
            {date}
          </span>
        </div>
        <div className="absolute bottom-4">
          <span className="bg-green-500 text-[#121212]  py-2 px-4 font-extrabold text-base rounded-md">
            ${pricePerPerson}
          </span>
        </div>
        <div className="absolute bottom-[6px] right-4">
          <button
            onClick={() =>
              navigate("/event", {
                state: {
                  id,
                  title,
                  location,
                  description,
                  date,
                  image,
                  pricePerPerson,
                },
              })
            }
            className="bg-purple-button w-52 drop-shadow-button-shadow text-base font-medium text-white px-4 py-2 rounded-md"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/Eventify/webresources/api/get-all-events")
      .then((response) => {
        setEvents(response.data);
        console.log("Success:", response.data);
      })
      .catch((err) => console.log("Error:", err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#121212] px-3 sm:px-20 xl:px-80 py-6">
        <h1 className="text-4xl text-[#dfdfdf] font-inter font-bold my-8">
          Upcoming events
        </h1>
        {events.map((event) => {
          return (
            <EventCard
              id={event.id}
              title={event.title}
              location={event.location}
              description={event.description}
              date={event.date}
              image={event.image}
              pricePerPerson={event.ppp}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
