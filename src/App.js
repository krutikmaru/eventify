import { useState } from "react";
import Login from "./components/Authentication/Login";
import Home from "./components/Home/Home";
import ListEvent from "./components/ListEvent/ListEvent";
import Event from "./components/Home/Event";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./contexts/UserContext";
import BookEvent from "./components/Home/BookEvent";
function App() {
  const { user } = useUser();
  return (
    <>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/list-event" element={<ListEvent />} />
            <Route path="/event" element={<BookEvent />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route
              path="/list-event"
              element={<Navigate to="/login" replace />}
            />
            <Route path="/event" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
