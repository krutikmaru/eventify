import React from "react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-[#1d1d1d] relative">
      <span className="absolute top-5 text-xl text-[#dfdfdf] font-medium left-12">
        Evenitfy
      </span>
      <button
        onClick={() => navigate("/list-event")}
        className="bg-purple-button absolute right-32 top-5 text-sm font-medium text-white px-4 py-1 rounded-[3px]"
      >
        List event
      </button>
      <button
        onClick={() => setUser(null)}
        className="bg-purple-button absolute right-12 top-5 text-sm font-medium text-white px-4 py-1 rounded-[3px]"
      >
        logout
      </button>
    </div>
  );
};

export default Navbar;
