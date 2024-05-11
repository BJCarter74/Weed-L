import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "../css/SessionForm.css";

function SessionForm({ isOpen, onRequestClose }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    consumptionMethods: "",
    rating: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, description, date, consumptionMethods, rating } = formData;
    const data = {
      title,
      description,
      date,
      consumptionMethods,
      rating,
    };
    try {
      const response = await axios.post(
        "https://localhost:3000/session/createsession",
        data,
        {
          withCredentials: true,
        }
      );
      onRequestClose(); // Close the modal on success
    } catch (error) {
      setError("Failed to create session. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <form onSubmit={handleSubmit} className="form">
        {error && <p className="error">{error}</p>}
        <input
          className="input-field"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          className="textarea-field"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <input
          className="input-field"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <input
          className="input-field"
          name="consumptionMethods"
          placeholder="Consumption Methods"
          value={formData.consumptionMethods}
          onChange={handleInputChange}
          required
        />
        <input
          className="input-field"
          name="rating"
          type="number"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleInputChange}
          required
        />
        <div className="button-group">
          <button type="submit" className="button">
            Submit
          </button>
          <button onClick={onRequestClose} className="button">
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default SessionForm;
