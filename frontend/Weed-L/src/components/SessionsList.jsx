import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import SessionForm from "./SessionForm";
import "../css/SessionList.css";

const SessionList = () => {
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = () => {
    axios
      .get("/session/sessions")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setSessions(response.data);
        } else {
          setError("Unable to load sessions. Please try again later.");
        }
      })
      .catch((err) => {
        setError(
          "Error fetching sessions: " +
            (err.response ? err.response.data.message : err.message)
        );
      });
  };

  const addSession = (newSession) => {
    axios
      .post("/session/createsession", newSession, { withCredentials: true })
      .then((response) => {
        fetchSessions(); // Refresh the list on success
      })
      .catch((error) => {
        setError(
          "Error creating session: " +
            (error.response ? error.response.data.message : "Network Error")
        );
      });
  };

  const deleteSession = (sessionId) => {
    axios
      .delete(`/session/deletesessions/${sessionId}`, { withCredentials: true })
      .then(() => {
        setSessions((prevSessions) =>
          prevSessions.filter((session) => session.id !== sessionId)
        );
      })
      .catch((error) => {
        setError(
          "Failed to delete session: " +
            (error.response ? error.response.data.message : "Network Error")
        );
      });
  };

  return (
    <div className="session-view">
      <div className="session-header">
        <h1>Your Sessions</h1>
        <button onClick={() => setIsFormOpen(true)}>+</button>
      </div>

      {sessions.length > 0 ? (
        <ul className="session-list">
          {sessions.map((session) => (
            <li key={session.id} className="session-item">
              <h2>{session.title}</h2>
              <p>{session.description}</p>
              <p>Consumption Methods: {session.consumptionMethods}</p>
              <p>Date: {session.date}</p>
              <button onClick={() => deleteSession(session.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-sessions">No sessions found.</p>
      )}
      <SessionForm
        isOpen={isFormOpen}
        onRequestClose={() => setIsFormOpen(false)}
        onSave={addSession}
      />
    </div>
  );
};

export default SessionList;
